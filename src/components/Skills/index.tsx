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
    { imgSrc: figma, label: "Figma", desc: "Инструмент дизайна" },
    { imgSrc: css, label: "CSS", desc: "Пользовательский интерфейс" },
    { imgSrc: javascript, label: "JavaScript", desc: "Интерактивность" },
    { imgSrc: nodejs, label: "NodeJS", desc: "Веб-сервер" },
    { imgSrc: expressjs, label: "ExpressJS", desc: "Фреймворк для Node" },
    { imgSrc: mongodb, label: "MongoDB", desc: "База данных" },
    { imgSrc: react, label: "React", desc: "Инструмент для разработки интрефейсов" },
    { imgSrc: tailwind, label: "TailwindCSS", desc: "Пользовательский интерфейс" },
];

const Skills: React.FC = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">Основные инструменты, которые я использую</h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
        Знакомьтесь с технологиями и инструментами, с помощью которых я создаю современные, удобные и эффективные сайты и веб-приложения.
        </p>
        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] cursor-pointer">
          {skillItems.map(({ imgSrc, label, desc }, index) => (
            <SkillCard key={index} imgSrc={imgSrc} label={label} desc={desc} classes="reveal-up"/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
