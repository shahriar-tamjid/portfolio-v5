/**
 * @copyright 2025 Shahriar Tamjid
 * @license Apache-2.0
 */

import React from "react";
import ExperienceCard from "./ExperienceCard";

const experience = [
  {
    content:
      "Built and maintained complex ERP modules using Oracle database, Spring Boot, and RESTful APIs to enhance system performance and user engagement. Ensured application stability and robustness through comprehensive unit, integration, and asynchronous testing. Worked closely with Agile/Scrum teams to define, develop, and deliver scalable features within sprint timelines, leveraging Git and Apache Subversion (SVN) for robust version control and team collaboration.",
    designation: "Software Engineer",
    timeline: "Jun 2023 - Present",
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
