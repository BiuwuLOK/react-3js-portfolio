// import UseDviceSize from "./usehooks/UseDviceSize";

import { motion } from "framer-motion";
import { mouse } from "../assets";

const HeroIcons = ({ isMobile, isTablet, browserCondition }) => {
  // const { isMobile, isTablet } = UseDviceSize();
  // debug when use as single component.

  // def base class for icon positioning
  const baseIconBarClass = "absolute w-full flex justify-center items-center";

  // browser position adjustment for Safari
  const conditionPosition = browserCondition
    ? "xs:safari-icon-bottom sm:safari-icon-bottom bottom-12"
    : "xs:bottom-4 bottom-12";

  // re-size for the scroll icon
  const scrollIconSize =
    isMobile || isTablet ? "w-[26px] h-[42px] " : "w-[34px] h-[64px] p-2";

  // re-size for scroll dot
  const scrollIconDotSize = isMobile || isTablet ? "w-2 h-2" : "w-3 h-3";

  // function visibility of the mouse icon
  const mouseIconVisibility = isMobile
    ? "hidden"
    : isTablet
    ? "w-[40px] h-[40px]"
    : "w-[64px] h-[64px]";

  return (
    /* base icon bar */
    <div className={`${baseIconBarClass} ${conditionPosition} z-10`}>
      {/* scroll icon */}
      <a href="#about" className="relative">
        <div
          className={`${scrollIconSize} rounded-3xl border-4 border-secondary flex justify-center items-start`}
        >
          <motion.div
            animate={{
              y: [0, 24, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className={`${scrollIconDotSize} rounded-full bg-secondary mb-1`}
          />
        </div>
      </a>

      {/* mouse-icon */}
      <div className={`${mouseIconVisibility} absolute bottom-0 right-0`}>
        <img src={mouse} alt="mouse" className="object-contain" />
      </div>
    </div>
  );
};

export default HeroIcons;
