import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close, logoAdj } from "../assets";

const Navbar = () => {
  // react useState func
  const [active, setActive] = useState(""); // page switch
  const [toggle, setToggle] = useState(false); // toggle switch

  return (
    <nav
      className={`
        ${styles.paddingX} w-full items-center py-5 fixed top-0 z-20 bg-primary
      `}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* left parts - Icon & Title */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-10 h-10 object-contain" />
          <p className=" text-white text-[18px] font-bold cursor-pointer">
            Maximilian.r.Lok
            <span className="sm:block hidden">| FullStack | Data Science</span>
          </p>
        </Link>

        {/* end parts - for web - none toggle */}
        <ul className=" list-none hidden md:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`
              ${active === link.title ? "text-white" : "text-secondary"}
               hover:text-white text-[18px] font-medium cursor-pointer
              `}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        {/* end parts - for mobile - with toggle */}
        <div className="md:hidden flex flex-1 justify-end items-center">
          {/* toggle */}
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${!toggle ? "hidden" : "flex"}
            p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w[140px] z-10 rounded-xl
          `}
          >
            {/* dropdown links */}
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`
                  ${active === link.title ? "text-white" : "text-secondary"}
                  hover:text-white text-[18px] font-medium cursor-pointer
                  `} // active and switch class
                  onClick={() => {
                    setActive(link.title); // page switch
                    setToggle(!toggle); // re - toggle
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
