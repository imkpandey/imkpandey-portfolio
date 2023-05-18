"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";
import React, { useRef, useState } from "react";
import Skill from "../components/Skill";
import { stacks } from "../constants";

const Skills = () => (
  <section className={`${styles.yPaddings}`} id="Skills">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto`}
    >
      <div className="flex flex-col justify-center items-center relative">
        <motion.h2
          variants={textVariant(0.1)}
          className="text-primary-gray font-bold uppercase tracking-wide"
        >
          Skills
        </motion.h2>
        <motion.h1
          variants={textVariant(0.1)}
          className="max-w-[85%] pt-4 font-bold justify-self-center tracking-wider text-center md:text-[50px] sm:text-[25px] text-[40px] md:leading-[80px] sm:leading-[30px] leading-[50px] uppercase"
        >
          Tech Stack
        </motion.h1>
        <motion.div
          className={`${styles.yPaddings} mx-auto grid grid-cols-4 gap-5`}
        >
          {stacks.map((stack, index) => (
            <Skill key={stack.title} {...stack} index={index} />
          ))}
        </motion.div>
      </div>
    </motion.div>
  </section>
);

export default Skills;
