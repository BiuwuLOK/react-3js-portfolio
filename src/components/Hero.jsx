import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";

import Intro from "./Intro";
import DesktopCanvas from "./canvas/Desktop";
import { mouse } from "../assets";

// import Neurons from "./Neurons";

const Hero = () => {
  return (
    // wiout navbar area
    <section className="relative w-full h-screen mx-auto">
      {/* Hero.sample */}
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        {/* scrolly icon */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-violet-600" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        {/* intro fixed content */}
        <div className="break-words">
          <h1 className={`${styles.heroHeadText}`}>
            Hi, this is
            <div className="text-orange-400">Maximilian Raku Lok</div>
          </h1>
          <p className={`${styles.heroSubText} mt-4 text-white`}>
            Working as
            <Intro className={`sm:mx-auto text-violet-400`} />
          </p>
        </div>
      </div>

      {/* 3d desktop/computer module */}
      <DesktopCanvas />
    </section>
  );
};

export default Hero;
