"use client";

import React from "react";

export default function Project({ index, title, setModal }) {
  return (
    <div
      onMouseEnter={() => {
        setModal({ active: true, index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index });
      }}
      className="flex w-full justify-between items-center p-[50px 100px 50px 100px] border-t-[1px] border-[#c9c9c9] cursor-pointer transition-all duration-200 hover:opacity-50"
    >
      <h2 className="text-[60px] m-0 transition-all duration-300 hover:-translate-x-[10px]">
        {title}
      </h2>

      <p className="transition-all font-light duration-300 hover:-translate-x-[10px]">
        Design & Development
      </p>
    </div>
  );
}
