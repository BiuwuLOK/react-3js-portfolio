import React from "react";
import { motion } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const AboutMotionLottie = ({ src, title, variants, className, ...props }) => {
  return (
    <motion.div
      initial="rest"
      whileHover="popOut"
      animate="rest"
      variants={variants}
      className={`flex flex-col justify-center items-center ${className}`}
    >
      <DotLottieReact
        src={src}
        autoplay
        loop
        className="w-36 h-36 object-contain"
        {...props}
      />
      <h3 className="text-white text-[20px] font-bold text-center mt-4">
        {title}
      </h3>
    </motion.div>
  );
};

export default AboutMotionLottie;
