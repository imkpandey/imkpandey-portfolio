"use client";

import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import Link from "next/link";

const ExploreMockup = ({ id, index, imgUrl, title, link }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.75, 1.5)}
    className={
      "relative overflow-hidden bg-cover bg-no-repeat flex flex-col items-center justify-center w-[400px] h-[300px] md:w-[700px] md:h-[500px] lg:w-[900px] lg:h-[600px] transition-[flex] duration-[1s] ease-out-flex cursor-pointer"
    }
  >
      <img
        src={imgUrl}
        alt={title}
        className="absolute w-full h-full object-cover rounded-[10px] transition duration-300 ease-in-out hover:scale-110"
      />
  </motion.div>
);

export default ExploreMockup;
