"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { fadeIn } from "../utils/motion";

const ExploreCard = ({
  id,
  imgUrl,
  title,
  description,
  link,
  index,
  active,
  handleClick,
}) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className={`relative ${
      active === id ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[2]"
    } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
    onClick={() => handleClick(id)}
  >
    <img
      src={imgUrl}
      alt={title}
      className="absolute w-full h-full object-cover rounded-[24px]"
    />
    {active !== id ? (
      <h3 className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[90deg] lg:origin-[0,0]">
        {title}
      </h3>
    ) : (
      <div className="absolute bottom-0 p-8 justify-start w-full flex flex-col bg-[rgba(0,0,0,0.5)] rounded-[24px]">
        <span className="inline-flex items-baseline gap-2">
          <h2 className="mt-[24px] font-semibold sm:text-[32px] text-[24px]">
            {title}
          </h2>
          <a href={link} target="_blank" rel="noreferrer">
            <div
              className={`${styles.flexCenter} w-[40px] h-[40px] rounded-[20px] glassmorphism mb-[16px]`}
            >
              <img
                src="/link.svg"
                alt="link"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </a>
        </span>
        <h2 className="mt-[5px] font-normal sm:text-[20px] text-[16px]">
          {description}
        </h2>
      </div>
    )}
  </motion.div>
);

export default ExploreCard;
