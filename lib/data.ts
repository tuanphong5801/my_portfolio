import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated Hanoi University of Industry (Haui)",
    location: "Bac Tu Liem, Ha Noi",
    description:
      "I graduated after 4 years of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "ㅤ6/2023ㅤ",
  },
  {
    title: "Intern Front-End Developer",
    location: "Thanh Xuan, Ha Noi",
    description:
      "I worked as an intern front-end developer for 3 months. I also upskilled to improve myself.",
    icon: React.createElement(CgWorkAlt),
    date: "ㅤ9/2023ㅤ",
  },
  // {
  //   title: "",
  //   location: "",
  //   description:
  //     "",
  //   icon: React.createElement(FaReact),
  //   date: "ㅤㅤ",
  // },
] as const;

export const projectsData = [
  {
    title: "Waiting...",
    description:
      "I'm waiting to update this project on here.",
    tags: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Waiting...",
    description:
      "I'm waiting to update this project on here.",
    tags: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Waiting...",
    description:
      "I'm waiting to update this project on here.",
    tags: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Bootstrap",
  "Figma",
  "MongoDB",
  "Redux",
  "Express",
  "PostgreSQL",
  "Framer Motion",
] as const;
