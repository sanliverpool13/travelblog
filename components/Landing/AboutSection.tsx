"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import LakeLouiseUsBlue from "../../public/images/UsLakeLouiseBlue.jpg";

const AboutSection = () => {
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

  return (
    <section className="w-full flex flex-col justify-center items-center relative text-bg-clr-footer">
      <motion.div
        className="md:grid w-[90%] max-w-[1300px] md:grid-cols-[60%_40%] md:gap-x-8 gap-y-8 flex flex-col items-center"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
      >
        <div className="p-0 text-left flex flex-col items-left h-full">
          <motion.h4
            className="text-6xl mb-4 font-light font-logo"
            variants={itemVariants}
          >
            About Us
          </motion.h4>
          <motion.h4
            className="text-2xl mb-4 font-bold md:text-xl"
            variants={itemVariants}
          >
            We are Madison and Sanjar
          </motion.h4>
          <motion.p
            className="leading-[1.7rem] text-lg overflow-hidden flex-grow mb-4 md:mb-8"
            variants={itemVariants}
          >
            We met in 2020, and our first trip together was in 2022 to Cancun,
            Mexico. Since then, we&apos;ve nurtured a passion for exploring
            places and things in life together. <br />
            <br />
            We are early risers fueled by our morning coffee, avid readers, and
            we love to run and hike.
            <br />
            <br />
            This website is our space to share our travels, hikes, and all the
            adventures we embark on together.
          </motion.p>
          <motion.div variants={itemVariants}>
            <Link href="/about">
              <button className="bg-clr-trqse rounded-[15px] cursor-pointer flex justify-center items-center text-center w-36 h-12 p-1 text-lg border-none transition-all duration-200 ease-in hover:shadow-md">
                Our Story
              </button>
            </Link>
          </motion.div>
        </div>
        <motion.div
          className="relative h-[100vw] md:h-[50vw] lg:h-[30vw] w-full"
          variants={itemVariants}
        >
          <Image
            src={LakeLouiseUsBlue.src}
            alt="Us in Lake Louise Portrait"
            fill
            className="object-cover rounded-[15px]"
            priority
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
