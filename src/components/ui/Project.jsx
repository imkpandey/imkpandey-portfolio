"use client";

import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const projects = [
  {
    name: "MINDPOP",
    subtitle: "Design & Development",
    src: "/mindpop.jpg",
    link: "https://mindpop.vercel.app",
    color: "#000000",
  },
  {
    name: "BOLT AI LANDING PAGE",
    subtitle: "Design & Development",
    src: "/karauli.jpg",
    link: "https://bolt-ai-gray.vercel.app",
    color: "#8C8C8C",
  },
  {
    name: "STARCLINCH",
    subtitle: "Design & Development",
    src: "/starclinch.jpg",
    link: "https://starclinch-eta.vercel.app",
    color: "#EFE8D3",
  },
  {
    name: "AFK PHARMA WEBSITE",
    subtitle: "Design & Development",
    src: "/afk.jpg",
    link: "https://afk-pharma.vercel.app",
    color: "#706D63",
  },
  {
    name: "R3F-GODRAY",
    subtitle: "Three.js Experiment",
    src: "/",
    link: "https://r3f-godray.vercel.app",
    color: "#706D63",
  },
  {
    name: "R3F-RIPPLE",
    subtitle: "Three.js Experiment",
    src: "/",
    link: "https://r3f-ripple.vercel.app",
    color: "#706D63",
  },
  {
    name: "R3F-INFINITY-TRAIL",
    subtitle: "Three.js Experiment",
    src: "/",
    link: "https://r3f-infinity-trails.vercel.app",
    color: "#706D63",
  },
];

export default function Project({ index, title, setModal }) {
  const positions = {
    bottom: 0,
    middle: -80,
    top: -160,
  };

  const lastMousePosition = useRef({ x: 0, y: 0 });
  let activeProject = null;
  let ticking = false;
  let mouseTimeout = null;
  let isMouseMoving = false;

  const projectList = document.querySelector(".project-list");
  const projectElements = document.querySelectorAll(".project");
  const projectPreview = document.querySelector(".project-preview");

  const animatePreview = () => {
    const projectsListRect = projectList.getBoundingClientRect();
    if (
      lastMousePosition.current.x > projectsListRect.left ||
      lastMousePosition.current.x < projectsListRect.right ||
      lastMousePosition.current.y > projectsListRect.top ||
      lastMousePosition.current.y < projectsListRect.bottom
    ) {
      const previewImages = projectPreview.querySelectorAll("img");
      previewImages.forEach((image) => {
        gsap.to(image, {
          scale: 0,
          duration: 0.5,
          ease: "power2.out",
          onComplete: () => image.remove(),
        });
      });
    }
  };

  const updateProjects = () => {
    animatePreview();

    if (activeProject) {
      const rect = activeProject.getBoundingClientRect();
      const isStillOver =
        lastMousePosition.current.x >= rect.left &&
        lastMousePosition.current.x <= rect.right &&
        lastMousePosition.current.y >= rect.top &&
        lastMousePosition.current.y <= rect.bottom;

      if (!isStillOver) {
        const wrapper = activeProject.current.querySelector(".project-wrapper");
        const leavingFromTop =
          lastMousePosition.current.y < rect.top + rect.height / 2;

        gsap.to(wrapper, {
          y: leavingFromTop ? positions.top : positions.bottom,
          duration: 0.5,
          ease: "power2.out",
        });
        activeProject = null;
      }
    }

    projectElements.forEach((project, index) => {
      if (project === activeProject) return;
      const rect = project.getBoundingClientRect();
      const isMouseOver =
        lastMousePosition.current.x >= rect.left &&
        lastMousePosition.current.x <= rect.right &&
        lastMousePosition.current.y >= rect.top &&
        lastMousePosition.current.y <= rect.bottom;

      if (isMouseOver) {
        const wrapper = project.querySelector(".project-wrapper");
        const enterFromTop =
          lastMousePosition.current.y < rect.top + rect.height / 2;

        gsap.to(wrapper, {
          y: positions.middle,
          duration: 0.5,
          ease: "power2.out",
          // onComplete: () => {
          //   activeProject = project;
          //   gsap.to(wrapper, {
          //     y: enterFromTop ? positions.top : positions.bottom,
          //     duration: 0.5,
          //     ease: "power2.out",
          //   })
          // }
        });
        activeProject = project;
      }
    });

    ticking = false;
  };

  const updateMousePosition = (e) => {
    lastMousePosition.current = { x: e.clientX, y: e.clientY };
    // if(!ticking) {
    //   window.requestAnimationFrame(updateProjects);
    //   ticking = true;
    // }
    isMouseMoving = true;
    if (mouseTimeout) clearTimeout(mouseTimeout);
  };

  const projectListRect = projectList.getBoundingClientRect();
  const isInsideProjectList =
    lastMousePosition.current.x >= projectListRect.left &&
    lastMousePosition.current.x <= projectListRect.right &&
    lastMousePosition.current.y >= projectListRect.top &&
    lastMousePosition.current.y <= projectListRect.bottom;

  if (isInsideProjectList) {
    mouseTimeout = setTimeout(() => {
      isMouseMoving = false;
      const images = projectPreview.querySelectorAll("img");
      if (images.length > 1) {
        const lastImage = images[images.length - 1];
        images.forEach((image) => {
          if (image !== lastImage) {
            gsap.to(image, {
              scale: 0,
              duration: 0.5,
              ease: "power2.out",
              onComplete: () => image.remove(),
            });
          }
        });
      }
    }, 2000);
  }

  animatePreview();

  projectElements.forEach((project, index) => {
    const wrapper = project.querySelector(".project-wrapper");
    let currentPosition = positions.top;

    project.addEventListener("mouseenter", (e) => {
      activeProject = project;
      const rect = project.getBoundingClientRect();
      const enterFromTop = e.clientY < rect.top + rect.height / 2;

      if (enterFromTop || currentPosition === positions.bottom) {
        currentPosition = positions.middle;
        gsap.to(wrapper, {
          y: positions.middle,
          duration: 0.5,
          ease: "power2.out",
        });
      }

      const img = document.createElement("img");
      img.src = projects[index].src;
      img.style.position = "absolute";
      img.style.top = 0;
      img.style.left = 0;
      img.style.scale = 0;
      img.style.zIndex = Date.now();

      projectPreview.appendChild(img);

      gsap.to(img, {
        scale: 1,
        duration: 0.5,
        ease: "power2.out",
      });
    });

    project.addEventListener("mouseleave", (e) => {
      activeProject = null;
      const rect = project.getBoundingClientRect();
      const leaveFromTop = e.clientY < rect.top + rect.height / 2;
      currentPosition = leaveFromTop ? positions.top : positions.bottom;

      gsap.to(wrapper, {
        y: currentPosition,
        duration: 0.5,
        ease: "power2.out",
      });
    });
  });

  useEffect(() => {
    document.addEventListener("mousemove", updateMousePosition);

    document.addEventListener(
      "scroll",
      () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            updateProjects();
          });
          ticking = true;
        }
      },
      { passive: true }
    );

    return () => {
      document.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <div className="project-list border-t border-black/30">
      {projects.map((project, index) => () => (
        <div
          className="project h-[80px] [clip-path:polygon(0_0,100%_0,100%_100%,0_100%)]"
          key={index}
        >
          <div className="project-wrapper relative h-[240px] will-change-transform -translate-y-[160px]">
            <div className="project-name w-full flex justify-between items-center h-[80px] px-1.5 py-4 cursor-pointer border-b border-black/30 bg-white text-black">
              <h1 className="text-[72px] uppercase font-semibold tracking-tight leading-tight">
                {project.name}
              </h1>
              <h1 className="text-[72px] uppercase font-semibold tracking-tight leading-tight">
                {project.subtitle}
              </h1>
            </div>
            <div className="project-project w-full flex justify-between items-center h-[80px] px-1.5 py-4 cursor-pointer border-b border-black/30 bg-black text-white">
              <h1 className="text-[72px] uppercase font-semibold tracking-tight leading-tight">
                {project.name}
              </h1>
              <h1 className="text-[72px] uppercase font-semibold tracking-tight leading-tight">
                See lives
              </h1>
            </div>
            <div className="project-name w-full flex justify-between items-center h-[80px] px-1.5 py-4 cursor-pointer border-b border-black/30 bg-white text-black">
              <h1 className="text-[72px] uppercase font-semibold tracking-tight leading-tight">
                {project.name}
              </h1>
              <h1 className="text-[72px] uppercase font-semibold tracking-tight leading-tight">
                {project.subtitle}
              </h1>
            </div>
          </div>
        </div>
      ))}
      <div
        className="project-preview fixed bottom-[15px] right-[15px] w-[30%] h-[30%] z-[2]"
        ref={projectPreview}
      ></div>
    </div>
  );
}
