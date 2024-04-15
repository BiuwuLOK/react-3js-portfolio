import { useState } from "react";
import { TypeAnimation } from "react-type-animation";

const TypewriterEffect = () => {
  const CURSOR_CLASS = "cursor";
  const [textColor, setTextColor] = useState("LightSalmon");

  return (
    <span
      style={{
        whiteSpace: "pre-line",
        display: "block",
        minHeight: "200px",
        color: textColor,
        opacity: 0.92,
      }}
    >
      <TypeAnimation
        cursor={true}
        sequence={[
          211,
          `over stack developer`,
          900,
          "",
          () => setTextColor("#38bdf8"),
          `include data process & database`,
          900,
          "",
          () => setTextColor("#34d399"),
          `researcher of machine learning and statistics algo etc.`,
          1200, // Pause after the last sentence is typed
          "",
          (e) => e.classList.add(CURSOR_CLASS),
          () => setTextColor("#a78bfa"),
          `over stack developer, \ninclude data process & database, \nresearcher of machine learning and statistics algo etc.`,
          4444, // Pause after the full text is typed
          "",
          210,
        ]}
        speed={81.616} // Typing speed for characters
        wrapper="span"
        repeat={Infinity} // Repeat 0-99 / infinity, 0 as once
      />
    </span>
  );
};

export default TypewriterEffect;
