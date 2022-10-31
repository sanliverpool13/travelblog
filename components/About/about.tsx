import React from "react";
import Image from "next/image";
import { FaEllipsisH } from "react-icons/fa";
import {
  AboutContainer,
  AboutGridSection,
  AboutHeader,
  AboutImageSection,
  AboutInnerContainer,
  AboutTextParagraph,
  AboutTextSection,
  ContactLink,
  Divider,
  OurStoryGrid,
  OurStoryHeader,
  OurStoryImageContainer,
  OurStoryParagraph,
  OurStorySubHeader,
  OurStoryTextContainer,
} from "./style";

import SanjarProfile from "../../public/images/SanjarWithMountainsInBG.jpg";
import MadisonProfile from "../../public/images/MadisonOnTrail.jpg";
import OurStoryImage from "../../public/images/OurStory.jpg";
import MadisonGreece from "../../public/images/MadisonGreeceView.jpg";
import SanjarPeak from "../../public/images/SanjarPeak.jpg";
import Link from "next/link";

const MadisonAboutText =
  "Hi, I am Madison. I am 22, studying to be a nurse. I have a passiong for professional caring. \n\n I love working with kids and hope to work at SickKids one day. I have been vegan since I was 14 years old, \n at the behest of my mother. I love reading books, hiking and exploring new places in the world.";

const SanjarAboutText =
  "Hi, I am Sanjar, a 28 year old software engineer. I am an avid reader and an avid sports fan. I have played highly competitive soccer my whole life and have lived in 5 countries. I am lucky to be a polygot as I speak English, Russian, Kazakh, Hebrew and some German. Like Madison, I am fascinated with traveling and seeing how people live in different parts of the world. I am also trying to be eat whole food plant based, even though it's hard sometimes.";
const About: React.FC = () => {
  return (
    <AboutContainer>
      <AboutInnerContainer>
        <OurStoryGrid>
          <OurStoryImageContainer>
            <Image src={OurStoryImage.src} layout="fill" objectFit="cover" />
          </OurStoryImageContainer>
          <OurStoryText />
        </OurStoryGrid>
        <Divider />
        <AboutSection
          isMadison={true}
          text={MadisonAboutText}
          imagePath={MadisonGreece.src}
        />
        <Divider />
        <AboutSection
          isMadison={false}
          text={SanjarAboutText}
          imagePath={SanjarPeak.src}
        />
      </AboutInnerContainer>
    </AboutContainer>
  );
};

interface HeaderProps {
  text: string;
}

const Header: React.FC<HeaderProps> = ({ text }) => {
  return <AboutHeader>{text}</AboutHeader>;
};

interface AboutSectionProps {
  isMadison: boolean;
  text: string;
  imagePath: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({
  isMadison,
  text,
  imagePath,
}) => {
  const title: string = isMadison ? "Madison" : "Sanjar";

  return (
    <AboutGridSection isMadison={isMadison}>
      <AboutImageSection isMadison={isMadison}>
        <Image src={imagePath} layout="fill" objectFit="cover" />
      </AboutImageSection>
      <AboutTextSection isMadison={isMadison}>
        <OurStoryHeader>{title}</OurStoryHeader>
        <AboutTextParagraph>{text}</AboutTextParagraph>
      </AboutTextSection>
    </AboutGridSection>
  );
};

const OurStoryText: React.FC = () => {
  return (
    <OurStoryTextContainer>
      <OurStoryHeader>Our Story</OurStoryHeader>
      <OurStorySubHeader>Exploring The World Together</OurStorySubHeader>
      <OurStoryParagraph>
        We are Madison and Sanjar, a couple who is passionate about travelling
        and seeing how life unfolds in different places.
        <br />
        <br />
        We met in 2020 while working at Starbucks. Madison was working as a
        student barista for four years already while studying to be a nurse.
        Whereas Sanjar was working as a part-time barista while in search of a
        software engineering job.
        <br />
        <br />
        It was our first trip together to Mexico in 2022 that sparked our desire
        to see more of the world together and create a platform to share our
        journey. After this we began traveling together as much as our budget
        and free time from work or school allowed us!
        <br />
        <br />
        We share a passion for reading, drinking coffee, adventures, and of
        course each other. We hope to inspire others to get out and experience
        the world in a similar way, as this is something we all took for granted
        prior to 2020.
        <br />
        <br />
        Through our blog and social media platforms we will share our tips,
        tricks, and authentic experiences! Hope you follow along our adventures!
        <br />
        <br />
        P.S. we love to connect with you and hear your feedback. Feel free to
        reach out and connect with us{" "}
        <ContactLink>
          <Link href="/contact">here</Link>
        </ContactLink>
        .
      </OurStoryParagraph>
    </OurStoryTextContainer>
  );
};

export default About;
