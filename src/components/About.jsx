import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => {
  return <p>{title}</p>;
};

const About = () => {
  return (
    <>
      {/* section Title */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>INTRODUCTION</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      {/* motion introduce */}
      <motion.p
        variants={fadeIn("", "", 0.2, 1)}
        className="mt-4 text-secondary text-[16px] max-w-3xl leading-[30px]"
      >
        blablablablablablabla. blablablablablablabla blablablablablablabla
        blablablablablablabla blablablablablablabla. blablablablablablabla
        blablablablablablabla blablablablablablabla blablablablablablabla.
        blablablablablablabla blablablablablablabla blablablablablablabla
      </motion.p>

      {/* animate card */}
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => {
          <ServiceCard key={service.title} index={index} {...service} />;
        })}
      </div>
    </>
  );
};

export default About;
