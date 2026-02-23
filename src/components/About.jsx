/**
 * @copyright 2025 Shahriar Tamjid
 * @license Apache-2.0
 */

const aboutItems = [
  {
    label: "Projects Done",
    number: 50,
  },
  {
    label: "Years of Experience",
    number: 3,
  },
];

import React from "react";

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
            Welcome! I&apos;m Tamjid, a Software Engineer focused on building scalable, enterprise-grade backend systems. I specialise in system design and writing clean, maintainable, production-ready code.
            <br /> <br />
            I&apos;m currently expanding into Machine Learning and Deep Learning, with interests in trustworthy AI, interpretability, and building efficient, data-driven systems.
          </p>

          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {aboutItems.map(({ label, number }, key) => (
              <div key={key}>
                <div className="flex items-center md:mb-2">
                  <span className="text-2xl font-semibold md:text-4xl">
                    {number}
                  </span>
                  <span className="text-teal-400 font-semibold md:text-3xl">
                    +
                  </span>
                </div>

                <p className="text-sm text-zinc-400">{label}</p>
              </div>
            ))}

            <img
              src="/images/logo.png"
              alt="Shahriar Tamjid"
              width={30}
              height={30}
              className="ml-auto md:w-[40px] md:h-[40px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
