/**
 * @copyright 2025 Shahriar Tamjid
 * @license Apache-2.0
 */

import React from "react";
import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: "/images/projects/ecommerce.png",
    title: "Ecommerce Platform",
    tags: ["Next.js", "Sanity"],
    projectLink: "https://ecommerce-sanity-beige.vercel.app/",
  },
  {
    imgSrc: "/images/projects/expense_tracker.png",
    title: "Expense Tracker",
    tags: ["React.js"],
    projectLink: "https://expense-tracker-chi-teal.vercel.app/",
  },
  {
    imgSrc: "/images/projects/disney_plus.png",
    title: "Disney+ Clone",
    tags: ["React.js", "Firebase"],
    projectLink: "https://disney-plus-4ec19.web.app/",
  },
  {
    imgSrc: "/images/projects/nft_marketplace.png",
    title: "NFT Marketplace",
    tags: ["React.js"],
    projectLink: "https://shahriar-nft-marketplace.netlify.app/",
  },
  {
    imgSrc: "/images/projects/vanilla_movies.png",
    title: "Vanilla Movies",
    tags: ["React.js", "TMDB API"],
    projectLink: "https://vanilla-movies.vercel.app/",
  },
  {
    imgSrc: "/images/projects/inverse_modulo_calculator.png",
    title: "Inverse Mod Calculator",
    tags: ["JavaScript", "Bootstrap"],
    projectLink: "https://shahriar-tamjid.github.io/inverse-modulo-calculator/",
  },
];

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">My Portfolio Highlights</h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
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
