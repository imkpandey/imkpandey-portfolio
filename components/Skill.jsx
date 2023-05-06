'use client';

import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";


const Skill = ({ id, imgUrl, title, calc }) => (
  <div className="group relative flex cursor-pointer">
    <motion.img
      variants={textVariant(0.2)}
      src={imgUrl}
      title={title}
      className=" object-scale-down w-20 h-20 md:w-24 md:h-24 xl:w-28 xl:h-28 filter group-hover:grayscale transition duration-100 ease-in-out"
    />
  </div>
);

export default Skill;