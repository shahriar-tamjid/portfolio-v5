/**
 * @copyright 2025 Shahriar Tamjid
 * @license Apache-2.0
 */

import React from "react";
import SkillCard from "./SkillCard";

const skillItem = [
  {
    imgSrc: "/images/javascript.svg",
    label: "JavaScript",
    desc: "Language",
  },
  {
    imgSrc: "/images/TypeScript.svg",
    label: "TypeScript",
    desc: "Language",
  },
  {
    imgSrc: "/images/Python.svg",
    label: "Python",
    desc: "Language",
  },
  {
    imgSrc: "/images/Swift.svg",
    label: "Swift",
    desc: "Language",
  },
  // {
  //     imgSrc: '/images/Go.svg',
  //     label: 'Go',
  //     desc: 'Language'
  // },
  {
    imgSrc: "/images/react.svg",
    label: "React",
    desc: "Framework",
  },
  {
    imgSrc: "/images/Nextjs.svg",
    label: "Next.js",
    desc: "React Framework",
  },
  {
    imgSrc: "/images/nodejs.svg",
    label: "Node.js",
    desc: "Web Server",
  },
  {
    imgSrc: "/images/expressjs.svg",
    label: "Express.js",
    desc: "Node Framework",
  },
  {
    imgSrc: "/images/PostgresSQL.svg",
    label: "PostgresSQL",
    desc: "Database",
  },
  {
    imgSrc: "/images/mongodb.svg",
    label: "MongoDB",
    desc: "Database",
  },
  // {
  //     imgSrc: '/images/Firebase.svg',
  //     label: 'Firebase',
  //     desc: 'Database'
  // },
  {
    imgSrc: "/images/tailwindcss.svg",
    label: "TailwindCSS",
    desc: "User Interface",
  },
  {
    imgSrc: "/images/Git.svg",
    label: "Git",
    desc: "Version Control",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">Essential Tools I Use</h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
          Discover the powerful tools and technologies I use to create
          exceptional, high-performing websites & applications.
        </p>

        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {skillItem.map(({ imgSrc, label, desc }, key) => (
            <SkillCard
              key={key}
              imgSrc={imgSrc}
              label={label}
              desc={desc}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
