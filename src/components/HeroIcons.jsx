// import UseDviceSize from "./usehooks/UseDviceSize";

import { motion } from "framer-motion";
import { mouse } from "../assets";

const HeroIcons = ({ isMobile, isTablet }) => {
  // const { isMobile, isTablet } = UseDviceSize();
  // debug when use as single component.

  // def base class for icon positioning
  const baseIconPosition = "absolute xs:bottom-2 w-full flex";

  // function re-size for the scroll icon
  const scrollIconSize =
    isMobile || isTablet ? "w-[26px] h-[42px] " : "w-[34px] h-[64px] p-2";

  // function visibility of the mouse icon
  const mouseIconVisibility = isMobile
    ? "hidden"
    : isTablet
    ? "h-[40px]"
    : "h-[64px]";

  return (
    // base icon bar
    <div className="bottom-24">
      {/* scroll-icon */}
      <div className={`${baseIconPosition} justify-center`}>
        <a href="#about">
          <div
            className={`${scrollIconSize} rounded-2xl border-4 border-secondary flex justify-center items-start`}
          >
            {/* motion animate component */}
            <motion.dev
              animate={{
                y: [0, 24, 0], // moving only y[]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-2 h-3 rounded-full bg-secondary"
            />
          </div>
        </a>
      </div>
      {/* mouse-icon */}
      <div className={`${baseIconPosition} ${mouseIconVisibility} justify-end`}>
        <img src={mouse} alt="mouse" className="object-contain" />
      </div>
    </div>
  );
};

export default HeroIcons;
