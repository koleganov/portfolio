import React from "react";
import ProjectCard from "../ProjectCard";

import project1 from "../../assets/images/project-1.jpg";
import project2 from "../../assets/images/project-2.jpg";
import project3 from "../../assets/images/project-3.jpg";
import project4 from "../../assets/images/project-4.jpg";
import project5 from "../../assets/images/project-5.jpg";
import project6 from "../../assets/images/project-6.jpg";

const works = [
  {
    imgSrc: project1,
    title: "Project-1",
    tags: ["API", "MVC", "Development"],
    projectLink: "https://musify-5al0.onrender.com/",
  },
  {
    imgSrc: project2,
    title: "Project-2",
    tags: ["API", "SPA"],
    projectLink: "https://pixstock-official.vercel.app/",
  },
  {
    imgSrc: project3,
    title: "Project-3",
    tags: ["Development", "API"],
    projectLink: "",
  },
  {
    imgSrc: project4,
    title: "Project-4",
    tags: ["Web-design", "Development"],
    projectLink: "https://github.com/codewithsadee-org/wealthome",
  },
  {
    imgSrc: project5,
    title: "Project-5",
    tags: ["eCommerce", "Development"],
    projectLink: "https://github.com/codewithsadee/anon-ecommerce-website",
  },
  {
    imgSrc: project6,
    title: "Project-6",
    tags: ["Web-design", "Development"],
    projectLink: "https://github.com/codewithsadee/vcard-personal-portfolio",
  },
];

const Work: React.FC = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">Мои ключевые проекты</h2>
        <div className="grid  gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
