"use client";

import styles from "../styles";

const Footer = () => (
  <footer>
    <div
      className={`${styles.xPaddings} mx-auto pb-4 flex justify-between gap-8`}
    >
      <h2 className="font-bold text-primary-gray text-[16px]">Kartikey Pandey</h2>
      <div className="flex flex-row gap-8 tracking-wider">
        <h2 className="font-bold text-primary-gray text-[16px]">
          <a
            href="https://github.com/imkpandey"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </h2>
        <h2 className="font-bold text-primary-gray text-[16px]">
        <a
            href="https://linkedin.com/imkpandey"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </h2>
        <h2 className="font-bold text-primary-gray text-[16px]">
        <a
            href="Resume.pdf"
            download
          >
            Resume
          </a>
        </h2>
      </div>
    </div>
  </footer>
);

export default Footer;
