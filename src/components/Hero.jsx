import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";

import Intro from "./Intro";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    // wiout navbar area
    <section className=" relative w-full h-screen mx-auto">
      {/* Hero.sample */}
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        {/* scrolly icon */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-violet-600" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        {/* meme intro */}
        <div>
          <h1 className={`${styles.heroHeadText}`}>
            Hi, this is
            <span className=" text-orange-400"> Maximilian.raku.Lok</span>
          </h1>
          <p className={`${styles.heroSubText} mt-4 text-white`}>
            Working as
            <Intro className={` text-violet-400`} />
          </p>
        </div>
      </div>

      {/* 3d computer module */}
      {/* <ComputersCanvas /> */}
    </section>
  );
};

export default Hero;
