/**
 * @copyright 2024 RASHID_C
 * @license Apache-2.0
 */

/**
 * Components
 */
import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: "/images/project-1.png",
    title: "Full stack blog app",
    tags: ["API", "MVC", "Development"],
    projectLink: "https://github.com/Rashid-C/mern-blog",
  },
  {
    imgSrc: "/images/project-2.png",
    title: "React vite portfolio ",
    tags: ["API", "GSAP", "Tailwind CSS"],
    projectLink: "https://github.com/Rashid-C/Portfolios",
  },
  {
    imgSrc: "/images/project-3.png",
    title: "Modern school website",
    tags: ["Development", "RestAPI", "Animation"],
    projectLink: "https://github.com/Rashid-C/Professional_Education_Website",
  },
  {
    imgSrc: "/images/project-4.png",
    title: "eCommerce website",
    tags: ["Web-design", "Development", "Figma"],
    projectLink: "https://github.com/Rashid-C/speed-ecommerce",
  },
  {
    imgSrc: "/images/project-5.png",
    title: "Service website",
    tags: ["IT", "Service"],
    projectLink: "https://github.com/Rashid-C/Rashid_portfolio",
  },
  {
    imgSrc: "/images/project-6.png",
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
