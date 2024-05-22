import React from "react";
import { Tilt } from "react-tilt"; // to tilt the cards on hover
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc"; // higher order component
import { fadeIn, textVariant } from "../utils/motion"; // utils

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,

          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt="title" className="w-16 h-16 object-contain" />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Enthusiastic BE Computer Science student with a passion for contributing
        to organizational success. Seeking to develop new skills, gain
        real-world experience, and leverage strong communication, critical
        thinking, and organizational abilities. Experienced in software
        development with proficiency in JavaScript and frameworks such as React
        and Node.js. A quick learner dedicated to creating efficient, scalable,
        and user-friendly solutions that address real-world problems. Let's
        collaborate to bring innovative ideas to life!
      </motion.p>

      {/* to display the cards */}
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

// using hoc in react
export default SectionWrapper(About, "about");
