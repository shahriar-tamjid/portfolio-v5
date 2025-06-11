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
    imgSrc: "/images/sql-server.svg",
    label: "Microsoft SQL Server",
    desc: "Database",
  },
  {
    imgSrc: "/images/PostgresSQL.svg",
    label: "PostgreSQL",
    desc: "Database",
  },
  {
    imgSrc: "/images/mysql.svg",
    label: "MySQL",
    desc: "Database",
  },
  {
    imgSrc: "/images/Java.svg",
    label: "Java",
    desc: "Language",
  },
  {
    imgSrc: "/images/Python.svg",
    label: "Python",
    desc: "Language",
  },
  {
    imgSrc: "/images/spring-boot.png",
    label: "Spring Boot",
    desc: "Backend Framework",
  },
  {
    imgSrc: "/images/next-js.svg",
    label: "Next.js",
    desc: "Frontend Framework",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">Essential Tools I Use</h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
          Discover the powerful tools and technologies I use to create
          scalable, robust, and high-performing data applications.
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
