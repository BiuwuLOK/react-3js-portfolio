import { useState } from "react";
// import typewritter lib
import { TypeAnimation } from "react-type-animation";

// define the function component
const TypewriterEffect = () => {
  const CURSOR_CLASS = "cursor"; // def cursor class, -not working
  const [textColor, setTextColor] = useState("#a78bfa"); // base text color

  return (
    <span
      style={{
        // setting of animation
        whiteSpace: "pre-line",
        display: "block",
        minHeight: "200px",
        color: textColor, // for color change
        opacity: 0.92,
      }}
    >
      <TypeAnimation
        cursor={true}
        sequence={[
          211, // pre-delay for read-able
          (e) => e.classList.remove(CURSOR_CLASS), // hide cursor
          `over stack developer`,
          900,
          "", // pre color change
          () => setTextColor("#38bdf8"),
          `with data process and database`,
          900,
          "", // pre color change
          () => setTextColor("#34d399"),
          `researcher of machine learning and statistics etc.`,
          1200, // Pause after the last sentence is typed
          "", // pre color change
          (e) => e.classList.add(CURSOR_CLASS), //
          () => setTextColor("LightSalmon"),
          `over stack developer, \nwith data process and database, \nresearcher of machine learning and statistics etc.`,
          4444, // Pause after the full text is typed
          "",
          210,
          () => setTextColor("#a78bfa"),
        ]}
        speed={81.616} // Typing speed for characters
        wrapper="span"
        repeat={Infinity} // Repeat 0-99 / infinity, 0 as once
      />
    </span>
  );
};

export default TypewriterEffect;
