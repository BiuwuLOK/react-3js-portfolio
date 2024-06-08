import React from "react";
import Tilt from "react-parallax-tilt";

import { motion } from "framer-motion";
import "../utils/parallax.css";

/* tilt responsive 3d cards */
const AboutServiceTilt = ({ index, title, icon }) => {
  const childVariants = {
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
    hidden: {
      opacity: 0,
      y: 50,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <Tilt
      className="xs:w-[250px] w-full"
      /* 
        original options settings in `card content` element
        option changes for "parallax-tilt" update
      */
      // rotation angle
      tiltMaxAngleX={24}
      tiltMaxAngleY={24}
      // enlarge when hover
      /* scale={1.12} */
      transitionSpeed={200}
      // glare effects like reflection
      // maintain with card content
      glareEnable={true}
      glarePosition="all"
      glareMaxOpacity={0.5}
      glareBorderRadius="24px"
      // tiltReverse={true} // hover angle
      perspective={500}
      //
    >
      <motion.div
        variants={childVariants}
        className="w-full bg-slate-600 p-0.5 rounded-[20px] shadow-card "
      >
        {/* card content */}
        <div
          // original options params // options={{  }}
          className="rounded-[20px] py-2 px-4 min-h-[280px] parallax"
        >
          <div className="para-context">
            <h3 className="text-white text-[20px] text-center items-center font-bold">
              {title}
            </h3>
            context
            <li>1</li>
            <li>2</li>
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
};

export default AboutServiceTilt;
