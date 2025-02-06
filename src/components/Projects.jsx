import React, { useRef } from "react";

const Projects = () => {
  const projectsRef = useRef();
  return (
    <section
      id="projects"
      ref={aboutRef}
      className="about-section relative flex justify-center items-center w-full h-screen bg-[#101010] text-[#edebe8] overflow-hidden"
    >
      <div className="about-container w-[80%] flex flex-col gap-8">
        <p className="about-text text-lg uppercase tracking-[0.3em]">
          ABOUT ME
        </p>
        <p className="about-copy text-3xl md:text-6xl font-medium">
          Hi, I&apos;m Kartikey, a{" "}
          <span className="text-yellow-500">self-proclaimed</span> creative web
          developer. I create bespoke web experiences by spending half of my
          time coding and other half convincing my code to work.
        </p>
      </div>
    </section>
  );
};

export default Projects;
