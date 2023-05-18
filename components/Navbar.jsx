"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { navVariants } from "../utils/motion";

import "./Navbar.css";

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className="px-4 md:px-2"
  >
    <div
      className={`${styles.innerWidth} nav flex flex-wrap items-center justify-between mx-auto gap-8`}
    >
      <img
        src="IMKPANDEY.svg"
        alt="icon"
        height={175}
        width={140}
        className="object-fit"
      />
      <input className="menu-btn hidden" type="checkbox" id="menu-btn" />
      <label
        className="menu-icon block cursor-pointer md:hidden px-10 py-4 relative select-none"
        for="menu-btn"
      >
        <span className="navicon bg-grey-darkest flex items-center relative"></span>
      </label>
      <ul className="menu border-b md:border-none flex justify-end list-reset m-0 w-full md:w-auto">
        <li className="border-t md:border-none tracking-wider">
          <a
            href="#Projects"
            className="font-light text-[16px] block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-primary-gray"
          >
            PROJECTS
          </a>
        </li>
        <li className="border-t md:border-none tracking-wider">
          <a
            href="#Skills"
            className="font-light text-[16px] block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-primary-gray"
          >
            SKILLS
          </a>
        </li>
        <li className="border-t md:border-none tracking-wider">
          <a
            href="#Contact"
            className="font-light text-[16px] block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-primary-gray"
          >
            LET'S TALK
          </a>
        </li>
        <li className="border-t md:border-none relative">
          <a
            href="https://github.com/imkpandey"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="github.svg"
              alt="github"
              height={24}
              width={24}
              className="w-[24px] h-[24px] m-2.5 object-contain"
            />
          </a>
        </li>
      </ul>
      {/* <div className="flex flex-end py-12 gap-8 tracking-wider">
        <a href="#Projects" className="font-light text-[16px]">
          PROJECTS
        </a>
        <a href="#Skills" className="font-light text-[16px]">
          SKILLS
        </a>
        <a href="#Contact" className="font-light text-[16px]">
          LET'S TALK
        </a>
        <a href="https://github.com/imkpandey" target="_blank" rel="noreferrer">
          <img
            src="github.svg"
            alt="github"
            className="w-[24px] h-[24px] object-contain"
          />
        </a>
      </div> */}
    </div>
  </motion.nav>
);

export default Navbar;
