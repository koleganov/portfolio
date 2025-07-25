import React from "react";
import SkillCard from "../SkillCard";

import figma from "../../assets/images/figma.svg";
import css from "../../assets/images/css3.svg";
import javascript from "../../assets/images/javascript.svg";
import nodejs from "../../assets/images/nodejs.svg";
import expressjs from "../../assets/images/expressjs.svg";
import mongodb from "../../assets/images/mongodb.svg";
import react from "../../assets/react.svg";
import tailwind from "../../assets/images/tailwindcss.svg";

type SkillItem = {
  imgSrc: string;
  label: string;
  desc: string;
};

const skillItems: SkillItem[] = [
  { imgSrc: figma, label: "Figma", desc: "Design tool" },
  { imgSrc: css, label: "CSS", desc: "User Interface" },
  { imgSrc: javascript, label: "JavaScript", desc: "Interaction" },
  { imgSrc: nodejs, label: "NodeJS", desc: "Web Server" },
  { imgSrc: expressjs, label: "ExpressJS", desc: "Node Framework" },
  { imgSrc: mongodb, label: "MongoDB", desc: "Database" },
  { imgSrc: react, label: "React", desc: "Framework" },
  { imgSrc: tailwind, label: "TailwindCSS", desc: "User Interface" },
];

const Skills: React.FC = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2">Essential Tools I use</h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
          Discover the powerful tools and technologies I use to create
          exceptional, high-performing websites & applications.
        </p>
        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] cursor-pointer">
          {skillItems.map(({ imgSrc, label, desc }, index) => (
            <SkillCard key={index} imgSrc={imgSrc} label={label} desc={desc} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
