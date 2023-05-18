"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { staggerContainer, mockupVariant } from "../utils/motion";
import { mockups } from "../constants";
import ExploreMockup from "../components/ExploreMockup";

const Mockups = () => {
  return (
    <section className={`${styles.yPaddings}`} id="Mockups">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.10 }}
        className={`${styles.innerWidth} mx-auto flex flex-col max-w-[100%]`}
      >
        <div className="flex flex-col justify-center items-center relative">
          <motion.h2
            variants={mockupVariant( 0.5, 0.5 )}
            className="text-primary-gray font-bold uppercase tracking-wide"
          >
            Featured UI Mockups
          </motion.h2>
          <div className="mt-[50px] flex flex-col min-h-[70vh] gap-20">
            {mockups.map((mockup, index) => (
              <ExploreMockup key={mockup.id} {...mockup} index={index} />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Mockups;
