"use client";

import styles from "../styles";

const Footer = () => (
  <footer>
    <div className={`${styles.innerWidth} mx-auto pb-4 flex justify-between gap-8`}>
      <h2 className="font-bold text-primary-gray">@2023 Kartikey Pandey</h2>
      <div className="flex flex-row gap-8 tracking-wider">
        <h2 className="font-bold text-primary-gray text-[16px]">Github</h2>
        <h2 className="font-bold text-primary-gray text-[16px]">LinkedIn</h2>
        <h2 className="font-bold text-primary-gray text-[16px]">Resume</h2>
      </div>
    </div>
  </footer>
);

export default Footer;
