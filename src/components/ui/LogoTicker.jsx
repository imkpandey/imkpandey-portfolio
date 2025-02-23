"use client";

import React from "react";
import jsLogo from "@/assets/js.png";
import tsLogo from "@/assets/ts.png";
import reactLogo from "@/assets/react.png";
import nextLogo from "@/assets/nextjs.svg";
import threeLogo from "@/assets/three.png";
import gsapLogo from "@/assets/gsap.png";
import motionLogo from "@/assets/motion.webp";
import tailwindLogo from "@/assets/tailwind.png";
import gptLogo from "@/assets/chatgpt.png";

import { motion } from "framer-motion";
import next from "next";

const LogoTicker = () => {
  return (
    <div className="relative w-full flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
      <motion.div
        initial={{ translateX: "-50%" }}
        animate={{ translateX: "0" }}
        transition={{
          repeat: Infinity,
          duration: 30,
          ease: "linear",
        }}
        className="flex flex-none gap-14 pr-14 -translate-x-1/2"
      >
        {[
          jsLogo,
          tsLogo,
          reactLogo,
          nextLogo,
          threeLogo,
          gsapLogo,
          motionLogo,
          tailwindLogo,
          gptLogo,
          jsLogo,
          tsLogo,
          reactLogo,
          nextLogo,
          threeLogo,
          gsapLogo,
          motionLogo,
          tailwindLogo,
          gptLogo,
        ].map((logo, index) => (
          <img
            src={logo.src}
            alt={logo.src}
            key={index}
            className="h-14 w-auto"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default LogoTicker;
