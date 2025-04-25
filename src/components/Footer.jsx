/**
 * @copyright 2025 Shahriar Tamjid
 * @license Apache-2.0
 */

import React from "react";
import { ButtonPrimary } from "./Button";

const sitemap = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Skills",
    href: "#skills",
  },
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "Experience",
    href: "#experience",
  },
  {
    label: "Contact me",
    href: "#contact",
  },
];

const socials = [
  {
    label: "GitHub",
    href: "https://www.github.com/shahirar-tamjid",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/shahriar-tamjid",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/shahriar_tamjid",
  },
  {
    label: "X",
    href: "https://x.com/shahriar_tamjid",
  },
];

// Get the current date
let currentDate = new Date();

// Get the current year (four-digit format)
let currentYear = currentDate.getFullYear();

const Footer = () => {
  return (
    <footer className="section">
      <div className="container">
        <div className="lg:grid lg:grid-cols-2">
          <div className="mb-10">
            <h2 className="headline-1 mb-8 lg:max-w-[12ch] reveal-up">
              Let&apos;s work together today!
            </h2>

            <ButtonPrimary
              href="mailto:shahriartamjid@gmail.com"
              label="Get in touch"
              icon="chevron_right"
              classes="reveal-up"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 lg:pl-20">
            <div>
              <p className="mb-2 reveal-up">Sitemap</p>

              <ul>
                {sitemap.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-2 reveal-up">Socials</p>

              <ul>
                {socials.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      target="_blank"
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex items-center justify-between pt-10 mb-8">
            <a href="/" className="logo reveal-up">
              <img
                src="/images/logo.png"
                alt="Shahriar Tamjid"
                width={40}
                height={40}
              />
            </a>

            <p className="text-zinc-500 text-sm reveal-up">
              &copy; <span>{currentYear}</span>{" "}
              <span className="text-zinc-200">Shahriar Tamjid</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
