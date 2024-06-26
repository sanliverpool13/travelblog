"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import OurStoryImage from "../../public/images/OurStory.jpg";
import MadisonGreece from "../../public/images/MadisonGreeceView.jpg";
import SanjarPeak from "../../public/images/SanjarPeak.jpg";

const MadisonAboutText =
  "Hey, I’m Madison! I’m a nurse. I am passionate about working with people and providing compassionate care. I currently work as a registered nurse at Sick Kids Toronto.I have been vegan since I was 14 years old and love discovering new plant based food spots where-ever we go (I’m working on converting Sanjar to the plant based life too). I also love to read, run, hike, and explore new places in the world. I’m always looking forward to our next adventure!";
const SanjarAboutText =
  "Hi, I am Sanjar, I'm a software engineer. In my free time I love to read, run, play sports, hike, and hang out with friends. I have played competitive soccer my whole life and am a Liverpool supporter. I also like working out, combining Calisthenics and Weight-lifting. I have lived in 5 countries and I speak fluent English, Russian, Kazakh, Hebrew, and some German. Like Madison, I have become fascinated with traveling and seeing how people live in different parts of the world. And yes, as Madison mentioned above I am trying to establish a whole foods plant based diet.";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.3,
      duration: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const About: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-[90%] max-w-[1300px] h-full flex flex-col gap-y-8 items-center">
        <section className="w-full pb-56 flex justify-center items-center ">
          <motion.article
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            className="md:grid md:grid-cols-[44%_4%_52%] flex flex-col md:gap-y-0 gap-y-8 items-center w-full"
          >
            <motion.div
              variants={itemVariants}
              className="relative w-full md:h-full h-[100vw]"
            >
              <Image
                src={OurStoryImage}
                fill
                style={{ objectFit: "cover" }}
                priority
                alt=""
                className="rounded-lg"
              />
            </motion.div>
            <div className="hidden md:block"></div>
            <div className="flex flex-col items-center text-left w-full md:order-none order-first">
              <motion.h2
                variants={itemVariants}
                className="w-full text-4xl font-medium mb-4 md:text-3xl"
              >
                Our Story
              </motion.h2>
              <motion.h2
                variants={itemVariants}
                className="w-full text-2xl mb-12 md:text-xl"
              >
                Exploring The World Together
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="w-full leading-[1.7rem] text-lg"
              >
                We are Madison and Sanjar, a couple who is passionate about
                travelling and seeing how life unfolds in different places.
                <br />
                <br />
                We met in 2020 while working at Starbucks. Madison was working
                as a student barista for four years already while studying to be
                a nurse. Whereas Sanjar was working as a part-time barista while
                in search of a software engineering job.
                <br />
                <br />
                It was our first trip together to Mexico in 2022 that sparked
                our desire to see more of the world together and create a
                platform to share our journey. After this we began traveling
                together as much as our budget and free time from work or school
                allowed us!
                <br />
                <br />
                We share a passion for reading, drinking coffee, adventures, and
                fitness. We hope to inspire others to get out and experience the
                world in a similar way, as this is something we all took for
                granted prior to 2020!
                <br />
                <br />
                Through our blog and social media platforms we will share our
                tips, tricks, and authentic experiences! Hope you follow along
                our journey!
                <br />
                <br />
                P.S. We would love to connect with you and hear your feedback.
                Feel free to reach out and contact us{" "}
                <span>
                  <Link href="/contact" className="text-teal-300 no-underline">
                    here
                  </Link>
                </span>
                .
              </motion.p>
            </div>
          </motion.article>
        </section>
        <section className="w-full pb-56 flex justify-center items-center">
          <PersonalAbout
            isMadison={true}
            text={MadisonAboutText}
            imagePath={MadisonGreece.src}
          />
        </section>
        <section className="w-full pb-56 flex justify-center items-center">
          <PersonalAbout
            isMadison={false}
            text={SanjarAboutText}
            imagePath={SanjarPeak.src}
          />
        </section>
      </div>
    </div>
  );
};

interface AboutSectionProps {
  isMadison: boolean;
  text: string;
  imagePath: string;
}

const PersonalAbout: React.FC<AboutSectionProps> = ({
  isMadison,
  text,
  imagePath,
}) => {
  const title: string = isMadison ? "Madison" : "Sanjar";

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      className={`w-full max-w-[1000px] ${
        isMadison ? "md-grid-madison" : "md-grid-not-madison"
      } flex flex-col gap-y-8 md:gap-y-0 md:items-center`}
    >
      <motion.div
        variants={itemVariants}
        className="relative w-full md:h-[30vw] sm:h-[50vw] h-100vw md-order-image"
      >
        <Image
          src={imagePath}
          fill
          style={{ objectFit: "cover" }}
          priority
          alt="Personal About Img"
          className="rounded-lg"
        />
      </motion.div>
      <div className="hidden md:block md-order-gap"></div>
      <div className="w-full md-order-text">
        <motion.h2
          variants={itemVariants}
          className="text-4xl mb-4 font-medium"
        >
          {title}
        </motion.h2>
        <motion.p variants={itemVariants} className="leading-[1.7rem] text-lg">
          {text}
        </motion.p>
      </div>
    </motion.section>
  );
};

export default About;
