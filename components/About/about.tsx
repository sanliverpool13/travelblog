import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AboutContainer,
  AboutGridSection,
  AboutSection,
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

import OurStoryImage from "../../public/images/OurStory.jpg";
import MadisonGreece from "../../public/images/MadisonGreeceView.jpg";
import SanjarPeak from "../../public/images/SanjarPeak.jpg";
import { useInView } from "react-intersection-observer";

const MadisonAboutText =
  "Hey, I’m Madison! I’m a 22 year old nursing student, expected to graduate in 2024. I am passionate about working with people and providing compassionate care. I currently work as a paediatric support worker and hope to continue working with children as a paediatric nurse in the future. I have been vegan since I was 14 years old and love discovering new plant based food spots where-ever we go (I’m working on converting Sanjar to the plant based life too). I also love to read, run, hike, and explore new places in the world. I’m always looking forward to our next adventure!";
const SanjarAboutText =
  "Hi, I am Sanjar, a 28 year old software engineer. In my free time I love to read, run, play sports, hike, and hang out with friends. I have played competitive soccer my whole life and am a Liverpool supporter. I also like working out, combining Calisthenics and Weight-lifting. I have lived in 5 countries and I speak fluent English, Russian, Kazakh, Hebrew, and some German. Like Madison, I have become fascinated with traveling and seeing how people live in different parts of the world. And yes, as Madison mentioned above I am trying to establish a whole foods plant based diet.";

const About: React.FC = () => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  useEffect(() => {
    if (inView) {
      entry.target.classList.add();
    }
  }, [inView]);

  return (
    <AboutContainer>
      <AboutInnerContainer>
        <AboutSection>
          <OurStoryGrid>
            <OurStoryImageContainer>
              <Image
                src={OurStoryImage.src}
                layout="fill"
                objectFit="cover"
                priority
              />
            </OurStoryImageContainer>
            <OurStoryText />
          </OurStoryGrid>
        </AboutSection>
        {/* <Divider /> */}
        <AboutSection>
          <PersonalAbout
            observerRef={ref}
            isMadison={true}
            text={MadisonAboutText}
            imagePath={MadisonGreece.src}
          />
        </AboutSection>
        {/* <Divider /> */}
        <AboutSection>
          <PersonalAbout
            observerRef={ref}
            isMadison={false}
            text={SanjarAboutText}
            imagePath={SanjarPeak.src}
          />
        </AboutSection>
      </AboutInnerContainer>
    </AboutContainer>
  );
};

interface AboutSectionProps {
  isMadison: boolean;
  text: string;
  imagePath: string;
  observerRef: (node?: Element) => void;
}

const PersonalAbout: React.FC<AboutSectionProps> = ({
  isMadison,
  text,
  imagePath,
  observerRef,
}) => {
  const title: string = isMadison ? "Madison" : "Sanjar";

  return (
    <AboutGridSection isMadison={isMadison} ref={observerRef}>
      <AboutImageSection isMadison={isMadison}>
        <Image src={imagePath} layout="fill" objectFit="cover" priority />
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
        We share a passion for reading, drinking coffee, adventures, and
        fitness. We hope to inspire others to get out and experience the world
        in a similar way, as this is something we all took for granted prior to
        2020!
        <br />
        <br />
        Through our blog and social media platforms we will share our tips,
        tricks, and authentic experiences! Hope you follow along our journey!
        <br />
        <br />
        P.S. We would love to connect with you and hear your feedback. Feel free
        to reach out and contact us{" "}
        <ContactLink>
          <Link href="/contact">here</Link>
        </ContactLink>
        .
      </OurStoryParagraph>
    </OurStoryTextContainer>
  );
};

export default About;
