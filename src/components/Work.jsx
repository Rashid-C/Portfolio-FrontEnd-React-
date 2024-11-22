/**
 * @copyright 2024 RASHID_C
 * @license Apache-2.0
 */

/**
 * Components
 */
import ProjectCard from "./ProjectCard";
import project1 from '../images/project-1.png'
import project2 from '../images/project-2.png'
import project3 from '../images/project-3.png'
import project4 from '../images/project-4.png'
import project5 from '../images/project-5.png'
import project6 from '../images/project-6.png'


const works = [
  {
    imgSrc: project1,
    title: "Full stack blog app",
    tags: ["API", "MVC", "Development"],
    projectLink: "https://github.com/Rashid-C/mern-blog",
  },
  {
    imgSrc: project2,
    title: "React vite portfolio ",
    tags: ["API", "GSAP", "Tailwind CSS"],
    projectLink: "https://github.com/Rashid-C/Portfolios",
  },
  {
    imgSrc: project3,
    title: "Modern school website",
    tags: ["Development", "RestAPI", "Animation"],
    projectLink: "https://github.com/Rashid-C/Professional_Education_Website",
  },
  {
    imgSrc: project4,
    title: "eCommerce website",
    tags: ["Web-design", "Development", "Figma"],
    projectLink: "https://github.com/Rashid-C/speed-ecommerce",
  },
  {
    imgSrc: project5,
    title: "Service website",
    tags: ["IT", "Service"],
    projectLink: "https://github.com/Rashid-C/Rashid_portfolio",
  },
  {
    imgSrc: project6,
    title: "ToDo personal app",
    tags: ["Web-design", "Development"],
    projectLink: "https://github.com/Rashid-C/To-Do-App",
  },
];

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">My portfolio highlights</h2>
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
