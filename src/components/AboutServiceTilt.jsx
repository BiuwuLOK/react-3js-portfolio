import React, { useState } from "react";

import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

const showVariants = {
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
      duration: 0.8,
    },
  },
};

// Variants for the 3D "pop-out" effect
const popOutVariants = {
  rest: {
    z: 0,
    transition: {
      duration: 0.6,
    },
  },
  popOut: {
    z: 80,
    scale: 1.2,
    transition: {
      duration: 0.6,
    },
  },
};

// Inline styles
const parallaxEffect = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "220px",
  height: "160px",
  // backgroundColor: "darkgreen",
  // color: "white",
  border: "5px solid black",
  borderRadius: "20px",
  transformStyle: "preserve-3d",
  background:
    // "repeating-linear-gradient(45deg, #015f01, #015f01 30px, #077407 30px, #077407 60px)",
    "linear-gradient(90deg, rgba(131,58,180,0.9) 0%, rgba(253,160,29,0.9) 50%, rgba(252,69,69,0.6) 100%)",
};

const AboutServiceTilt = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.div
      variants={showVariants}
      className="sm:w-[240px] w-[80%] mx-auto p-[2px] rounded-[20px] shadow-card bg-opacity-50"
    >
      <Tilt
        // className="parallax-effect"
        perspective={500}
        glareEnable={true}
        glareMaxOpacity={0.45}
        glareBorderRadius="18px"
        scale={1.2}
        gyroscope={true}
        // style={parallaxEffect}
        className="flex flex-wrap h-[180px] rounded-2xl
        border-2 border-x-white border-opacity-50 preserve-3d
        bg-gradient-to-r from-purple-600 to-red-400 
        "
      >
        <motion.div
          // motion mouse detect area
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          initial="rest"
          animate={isHovered ? "popOut" : "rest"}
          variants={popOutVariants}
          className="w-full h-full flex flex-col justify-center items-center"
        >
          <div className="text-4xl text-shadow-lg">ICONS</div>
          <div className="mt-2">Parallax Tilt</div>
          <div>👀 samples</div>
        </motion.div>
      </Tilt>
    </motion.div>
  );
};

export default AboutServiceTilt;
