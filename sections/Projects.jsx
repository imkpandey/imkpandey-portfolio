"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { staggerContainer, textVariant } from "../utils/motion";
import { useState } from "react";
import { ExploreCard } from "../components";
import { exploreWorlds } from "../constants";

const Projects = () => {
  const [active, setActive] = useState("project-2");

  return (
    <section className={`${styles.yPaddings}`} id="Projects">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col max-w-[85%]`}
      >
        <div className="flex flex-col justify-center items-center relative">
          <motion.h2
            variants={textVariant(0.15)}
            className="text-primary-gray font-bold uppercase tracking-wide"
          >
            Projects
          </motion.h2>
        </div>
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
