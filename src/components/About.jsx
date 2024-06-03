import React from "react";

import Tilt from "react-parallax-tilt";
// also run `npm install --legacy-peer-deps three` if browser unsupported

import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";

import { fadeIn, textVariant } from "../utils/motion";
// js function for Tilts

/*  */
const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt
      className="xs:w-[250px] w-full"
      /*
       prevent div-tag not working on some mobile
       following params apply to all Tilt `Service`
      */
      // rotation angle
      tiltMaxAngleX={41}
      tiltMaxAngleY={41}
      // enlarge when hover
      scale={1.12}
      transitionSpeed={450}
      // glare effects // not always working
      glarePosition="bottom"
      glareMaxOpacity={0.7}
      // tiltReverse={true} // hover reaction up or down
      //
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          // original options params
          // options={{  }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[260px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] text-center font-bold">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      {/* section title */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>INTRODUCTION</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      {/* section subtitle */}
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[16px] max-w-3xl leading-[30px]"
      >
        blablablablablablabla blablablablablablabla.
      </motion.p>

      {/* animate tilt array */}
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default About;
