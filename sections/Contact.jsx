"use client";

import { motion } from "framer-motion";
import { staggerContainer, textVariant } from "../utils/motion";
import styles from "../styles";

const Contact = () => (
  <section
    className={`${styles.yPaddings} h-[90vh] flex justify-center items-center`}
  >
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={"w-[90%] mx-auto flex flex-col"}
    >
      <div className="flex justify-center items-center flex-col relative z-10">
        <motion.h2
          variants={textVariant(0.1)}
          className="text-primary-gray font-bold md:text-[30px] text-[20px] uppercase"
          id="Contact"
        >
          Let's Work Together
        </motion.h2>
        <motion.div
          variants={textVariant(0.2)}
          className="flex flex-col space-y-20 items-center py-6"
        >
          <a href="mailto:imkpandey31@gmail.com" target="_blank" rel="noreferrer">
            <h1 className="font-bold justify-self-center tracking-wider text-center md:text-[60px] text-[40px] md:leading-[80px] leading-[50px] cursor-pointer uppercase">
              Get in Touch
            </h1>
          </a>
          {/* <motion.div
          variants={textVariant(3.6)}
          className="vertical-line"
        ></motion.div> */}
        </motion.div>
      </div>
    </motion.div>
  </section>
);

export default Contact;
