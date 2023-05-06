'use client';

import { motion } from "framer-motion";
import styles from "../styles";
import { fadeIn, textVariant } from "../utils/motion";


const Skill = ({ id, imgUrl, title, calc }) => (
  <div className="group relative flex cursor-pointer">
    <motion.img
      variants={textVariant(0.2)}
      src={imgUrl}
      title={title}
      className=" object-scale-down w-20 h-20 md:w-24 md:h-24 xl:w-28 xl:h-28 filter group-hover:grayscale transition duration-100 ease-in-out"
    />
    {/* <div className="absolute opacity-0 group-hover:opacity-20 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 md:w-24 md:h-24 xl:w-28 xl:h-28 z-0">
        <div className="flex items-center justify-center h-full">
            <p className="text-3xl font-semibold text-black opacity-100">{calc}%</p>
        </div>
    </div> */}
  </div>
);

export default Skill;