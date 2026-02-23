/**
 * @copyright 2025 Shahriar Tamjid
 * @license Apache-2.0
 */

import React from "react";
import SkillCard from "./SkillCard";

const skillItem = [
  {
    imgSrc: "/images/Oracle.svg",
    label: "Oracle",
    desc: "Database",
  },
  {
    imgSrc: "/images/PostgresSQL.svg",
    label: "PostgreSQL",
    desc: "Database",
  },
  {
    imgSrc: "/images/Java.svg",
    label: "Java",
    desc: "Language",
  },
  {
    imgSrc: "/images/TypeScript.svg",
    label: "TypeScript",
    desc: "Language",
  },
  {
    imgSrc: "/images/spring-boot.png",
    label: "Spring Boot",
    desc: "Backend Framework",
  },
  {
    imgSrc: "/images/Angular.svg",
    label: "Angular",
    desc: "Frontend Framework",
  },
  {
    imgSrc: "/images/Git.svg",
    label: "Git",
    desc: "Version Control",
  },
  {
    imgSrc: "/images/Docker.svg",
    label: "Docker",
    desc: "Containerization",
  },
];

const mlItem = [
  {
    imgSrc: "/images/Python.svg",
    label: "Python",
    desc: "Language",
  },
  {
    imgSrc: "/images/NumPy.svg",
    label: "NumPy",
    desc: "Numerical Computing",
  },
  {
    imgSrc: "/images/Pandas.svg",
    label: "Pandas",
    desc: "Data Manipulation",
  },
  {
    imgSrc: "/images/Matplotlib.svg",
    label: "Matplotlib",
    desc: "Data Visualization",
  },
  {
    imgSrc: "/images/PyTorch.svg",
    label: "PyTorch",
    desc: "Deep Learning Research",
  },
  {
    imgSrc: "/images/TensorFlow.svg",
    label: "TensorFlow",
    desc: "Production-Scale Deep Learning",
  },
  {
    imgSrc: "/images/scikit-learn.svg",
    label: "SciKit Learn",
    desc: "Classical Machine Learning",
  },
  {
    imgSrc: "/images/OpenCV.svg",
    label: "OpenCV",
    desc: "Computer Vision",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">My Dev Tech Stack</h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
          Discover the powerful tools and technologies I use to create
          scalable, robust, and high-performing applications.
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

          <br /> <br />

      <div className="container">
        <h2 className="headline-2 reveal-up">My ML Tech Stack</h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
          Discover the powerful tools and technologies I use to create
          machine learning models and applications.
        </p>

        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {mlItem.map(({ imgSrc, label, desc }, key) => (
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
