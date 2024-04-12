import { TypeAnimation } from "react-type-animation";

const TypewriterEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        "I develop Web Applications,", // Type this sentence
        900, // Wait 0.9 second
        "Desktop Applications,", // Type this sentence
        900, // Wait 0.9 second
        "and User Interfaces", // Type this sentence
        900, // Wait 0.9 second
        "", // Erase all
        900, // Wait 0.9 second
        "I develop Web Applications,\nDesktop Applications,\nand User Interfaces", // Display all sentences at once
        6000, // Wait 5 seconds
        "", // Erase all
        900, // Wait 0.9 second (Start over)
      ]}
      wrapper="div"
      speed={69} // Typing speed
      style={{ whiteSpace: "pre-line" }} // This style will allow for line breaks
      repeat={2} // Repeat this sequence indefinitely
    />
  );
};

export default TypewriterEffect;
