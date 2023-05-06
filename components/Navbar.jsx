"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { navVariants } from "../utils/motion";

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-2 relative`}
  >
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <img
        src="imkpandey.svg"
        alt="icon"
        className="mt-[-25px] w-[150px] h-[175px] object-contain"
      />
      <div className="flex flex-end py-12 gap-8 tracking-wider">
        <a href="#Projects" className="font-light text-[16px]">
          PROJECTS
        </a>
        <a href="#Skills" className="font-light text-[16px]">
          SKILLS
        </a>
        <a href="#Contact" className="font-light text-[16px]">
          LET'S TALK
        </a>
        <a href="https://github.com/imkpandey" target="_blank">
          <img
            src="github.svg"
            alt="github"
            className="w-[24px] h-[24px] object-contain"
          />
        </a>
      </div>
    </div>
  </motion.nav>
);

export default Navbar;
