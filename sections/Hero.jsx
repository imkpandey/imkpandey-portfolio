"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";

const Hero = () => (
  <section className={`${styles.yPaddings}`} id="Hero">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="flex justify-center items-center flex-col relative z-10">
        <motion.h2
          variants={textVariant(1.1)}
          className="text-primary-gray text-[20px] font-bold uppercase"
        >
          Hi, My name is kartikey pandey
        </motion.h2>
        <motion.div
          variants={textVariant(3.6)}
          className="flex flex-col space-y-20 items-center py-6"
        >
          <h1 className="max-w-[85%] font-bold justify-self-center tracking-wider text-center text-[40px] sm:text-[40px] md:text-[60px] md:leading-[80px] sm:leading-[40px] leading-[40px] uppercase">
            I AM A FRONT-END WEB DEVELOPER WITH A KEEN EYE FOR WEB DESIGNING AND AESTHETICS
          </h1>
          {/* <motion.div
            variants={textVariant(3.6)}
            className="vertical-line"
          ></motion.div> */}
        </motion.div>
      </div>
    </motion.div>
  </section>
);

export default Hero;