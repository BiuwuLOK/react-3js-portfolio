import React from "react";

// import Tilt from "react-parallax-tilt";
import AboutServiceTilt from "./AboutServiceTilt";

import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
// services content

import { fadeIn, textVariant } from "../utils/motion";
// js function for Tilts

import { SectionWrapper } from "../hoc";

/* about main section */
const About = () => {
  const parentVariants = {
    show: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    hidden: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  return (
    <>
      {/* section title */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>INTRODUCTION</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      {/* section context */}
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[16px] max-w-3xl leading-[30px]"
      >
        blablablablablablabla blablablablablablabla.
      </motion.p>

      {/* tilt sevice card array */}
      <motion.div
        variants={parentVariants}
        className="mt-20 flex flex-wrap gap-10"
      >
        {services.map((service, index) => (
          <AboutServiceTilt
            key={service.title}
            index={index}
            {...service}
            // animateComplete={animateComplete}
          />
        ))}
      </motion.div>
    </>
  );
};

export default SectionWrapper(About, "About");
// apply function-wrapper
