{
  /* scroll-icon */
}
<div className="absolute xs:bottom-2 bottom-24 w-full flex justify-center items-center">
  {/* click scroll */}
  <a href="#about">
    <div className="w-[34px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
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
        className="w-3 h-3 rounded-full bg-secondary"
      />
    </div>
  </a>
</div>;

{
  /* mouse icon */
}
{
  /*       <div
        className={`${
          isMobile
            ? "hide-mobile"
            : "absolute xs:bottom-2 bottom-24 w-full flex justify-end items-center"
        }`}
      >
        <img
          src={mouse}
          alt="mouse"
          className="w-[64px] h-[64px] object-contain"
        />
      </div> */
}
