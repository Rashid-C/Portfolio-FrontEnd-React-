/**
 * @copyright 2024 RASHID_C
 * @license Apache-2.0
 */

import SkillCard from "./SkillCard";
import figma from "../images/figma.svg";
import css from "../images/css3.svg";
import js from "../images/javascript.svg";
import node from "../images/nodejs.svg";
import express from "../images/expressjs.svg";
import mongodb from "../images/mongodb.svg";
import react from '../images/react.svg';
import tailwind from '../images/tailwindcss.svg';

/**
 * Components
 */
const skillItem = [
  {
    imgSrc: figma,
    label: "Figma",
    desc: "Design tool",
  },
  {
    imgSrc: css,
    label: "CSS",
    desc: "User Interface",
  },
  {
    imgSrc: js,
    label: "JavaScript",
    desc: "Interaction",
  },
  {
    imgSrc: node,
    label: "NodeJS",
    desc: "Web Server",
  },
  {
    imgSrc: express,
    label: "ExpressJS",
    desc: "Node Framework",
  },
  {
    imgSrc: mongodb,
    label: "MongoDB",
    desc: "Database",
  },
  {
    imgSrc: react,
    label: "React",
    desc: "Framework",
  },
  {
    imgSrc: tailwind,
    label: "TailwindCSS",
    desc: "User Interface",
  },
];

const Skill = () => {
  return (
    <div className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">Essential Tools I use</h2>

        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
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
    </div>
  );
};

export default Skill;
