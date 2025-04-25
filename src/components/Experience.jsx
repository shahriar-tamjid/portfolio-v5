/**
 * @copyright 2025 Shahriar Tamjid
 * @license Apache-2.0
 */

import React from "react";
import ExperienceCard from "./ExperienceCard";

const experience = [
  {
    content:
      "Developed and optimized ERP system features by writing complex SQL and PL/SQL queries, fixing bugs, and ensuring efficient data pipelines for large-scale operations. Managed critical financial and inventory data to facilitate smooth transactions and accurate stock tracking. Collaborated with government and industry clients—including textiles, chemicals, and ceramics—to automate production and supply chain processes, enhancing operational efficiency. Focused on improving legacy systems for better performance while maintaining data integrity and system reliability.",
    designation: "Software Engineer",
    timeline: "Jun 2023 - Aug 2024",
    imgSrc: "/images/pridesys.jpg",
    company: "Pridesys IT Ltd.",
  },
  // {
  //   content: 'Impressive work! Fast loading times, intuitive design, and flawless backend integration. Highly recommend.',
  //   designation: 'Ethan Caldwell',
  //   timeline: 'Jun 2023 - Aug 2024',
  //   imgSrc: '/images/people-2.jpg',
  //   company: 'NexaWave'
  // },
];

const Experience = () => {
  return (
    <section id="experience" className="section overflow-hidden">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">My Work History</h2>

        <div className="flex items-stretch gap-3 w-fit">
          {experience.map(
            ({ content, designation, timeline, imgSrc, company }, key) => (
              <ExperienceCard
                key={key}
                designation={designation}
                timeline={timeline}
                imgSrc={imgSrc}
                company={company}
                content={content}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience;
