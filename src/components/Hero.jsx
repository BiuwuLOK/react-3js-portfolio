import React from "react";

import { styles } from "../styles";

import Intro from "./Intro";

import UseDviceSize from "./usehooks/UseDviceSize";
// import params and hook function
// use under DesktopCanvas and HeroIcons

import DesktopCanvas from "./canvas/Desktop";
import HeroIcons from "./HeroIcons";

import { isMobileSafari, isSafari } from "react-device-detect"; // for safari

// import Neurons from "./Neurons";

const Hero = () => {
  // pass param from useHooks
  // when def error check child component duplicate defined params
  const { isMobile, isTablet } = UseDviceSize();

  return (
    /* Hero section */
    <section className="relative w-full h-screen mx-auto">
      {/* Hero and intro text */}
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex items-start gap-5`}
      >
        {/* liner icon */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-violet-600" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        {/* intro content */}
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

      {/*
       3d desktop/computer module
       this part can rotate or holding-move when users touch
       but limit by the 3D object area
      */}
      <DesktopCanvas
        isMobile={isMobile}
        isTablet={isTablet}
        isSafari={isSafari}
      />

      {/* Flowing bottom icons */}
      <HeroIcons
        isMobile={isMobile}
        isTablet={isTablet}
        browserCondition={isMobileSafari}
      />
    </section>
  );
};

export default Hero;
