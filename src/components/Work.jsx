/**
 * @copyright 2024 RASHID_C
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import { useRef, useState } from "react";

/**
 * Components
 */
import ProjectCard from "./ProjectCard";
import ecommerce from "../images/ecommerce.png";
import project1 from "../images/project-1.png";
import gocart from "../images/gocart.png";
import project3 from "../images/project-3.png";
import english from "../images/english.png";
import kerala from "../images/kerala.png";
import mehara from "../images/mehara.png";

const works = [
  {
    imgSrc: mehara,
    title: "Mehara Pardha Ecommerce -(UAE)",
    tags: [
      "Nextjs",
      "Google OAuth",
      "ecommerse",
      "JWT Auth",
      "Admin Dashboard",
    ],
    projectLink: "https://mehara.vercel.app",
  },
  {
    imgSrc: ecommerce,
    title: "AZC Ecommerce  (UAE)",
    tags: [
      "Nextjs",
      "Stripe&PayPal",
      "Admin Dashboard",
      "shadcn UI",
      "fullstack",
    ],
    projectLink: "https://azc-ecom.vercel.app",
  },
  {
    imgSrc: project1,
    title: "MERN Blog - Blog Plateform",
    tags: ["MERN", "Google OAuth", "JWT Auth", "Admin Dashboard"],
    projectLink: "https://mern-stack-blog-plateform.vercel.app",
  },

  {
    imgSrc: english,
    title: "English Expert Coaching Platform",
    tags: ["React.js", "Tailwind CSS", "Responsive UI"],
    projectLink: "https://kerala-english-coach.vercel.app",
  },
  {
    imgSrc: gocart,
    title: "Multi Venter e-commerce",
    tags: ["Next.js", "Tailwind CSS", "Responsive UI"],
    projectLink: "https://nexuscart-alpha.vercel.app",
  },
  {
    imgSrc: kerala,
    title: "Bakery Store",
    tags: ["React.js", "Tailwind CSS", "Responsive UI"],
    projectLink: "https://keralabakery.netlify.app",
  },

  {
    imgSrc: project3,
    title: "Rashid's Blog - CMS",
    tags: ["MERN", "Google OAuth", "Admin Dashboard"],
    projectLink: "https://github.com/Rashid-C/mern-blog",
  },
];

const ITEMS_PER_PAGE = 4;

const Work = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const sectionRef = useRef(null);
  const totalPages = Math.ceil(works.length / ITEMS_PER_PAGE);

  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentWorks = works.slice(start, start + ITEMS_PER_PAGE);
  const emptySlots = ITEMS_PER_PAGE - currentWorks.length;

  const handlePageChange = (nextPage) => {
    setCurrentPage(nextPage);

    requestAnimationFrame(() => {
      if (!sectionRef.current) return;
      const headerOffset = 88;
      const targetTop =
        sectionRef.current.getBoundingClientRect().top +
        window.scrollY -
        headerOffset;

      window.scrollTo({ top: targetTop, behavior: "smooth" });
    });
  };

  return (
    <section id="work" className="section" ref={sectionRef}>
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">Major projects</h2>

        <div className="reveal-up">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {currentWorks.map(({ imgSrc, title, tags, projectLink }, key) => (
              <ProjectCard
                key={`${title}-${key}`}
                imgSrc={imgSrc}
                title={title}
                tags={tags}
                projectLink={projectLink}
              />
            ))}

            {emptySlots > 0 &&
              Array.from({ length: emptySlots }, (_, index) => (
                <div
                  key={`empty-slot-${index}`}
                  className="invisible rounded-xl border border-zinc-700/40"
                  aria-hidden="true"
                />
              ))}
          </div>

          <div className="flex items-center justify-center gap-2 mt-6">
            <button
              type="button"
              onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="h-9 px-3 rounded-lg text-sm bg-zinc-800 hover:bg-zinc-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Prev
            </button>

            {Array.from({ length: totalPages }, (_, index) => {
              const page = index + 1;
              const isActive = page === currentPage;

              return (
                <button
                  key={page}
                  type="button"
                  onClick={() => handlePageChange(page)}
                  className={`h-9 min-w-9 px-3 rounded-lg text-sm transition-colors ${
                    isActive
                      ? "bg-sky-400 text-zinc-950"
                      : "bg-zinc-800 hover:bg-zinc-700 text-zinc-100"
                  }`}
                >
                  {page}
                </button>
              );
            })}

            <button
              type="button"
              onClick={() =>
                handlePageChange(Math.min(totalPages, currentPage + 1))
              }
              disabled={currentPage === totalPages}
              className="h-9 px-3 rounded-lg text-sm bg-zinc-800 hover:bg-zinc-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
