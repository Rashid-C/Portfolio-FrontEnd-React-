/**
 * @copyright 2024 RASHID_C
 * @license Apache-2.0
 */

import { useRef, useState } from 'react'
import SkillCard from './SkillCard'
import figma from '../images/figma.svg'
import css from '../images/css3.svg'
import js from '../images/javascript.svg'
import node from '../images/nodejs.svg'
import express from '../images/expressjs.svg'
import mongodb from '../images/mongodb.svg'
import react from '../images/react.svg'
import tailwind from '../images/tailwindcss.svg'
import next from '../images/next.svg'
import typescript from '../images/typescript.svg'
import postgresql from '../images/postgresql.svg'
import redis from '../images/redis.svg'
import prisma from '../images/prisma.svg'
import docker from '../images/docker.svg'
import aws from '../images/aws.svg'
import vercel from '../images/vercel.svg'
import git from '../images/git.svg'
import stripe from '../images/stripe.svg'
import Aouth from '../images/oauth.svg'
import GitHub from '../images/github.svg'
import redux from '../images/redux.svg'
import python from '../images/python.svg'
import django from '../images/django.svg'

const skillItems = [
  // Core stack, in the order it's presented on my LinkedIn headline
  { imgSrc: django, label: 'Django REST Framework', desc: 'Backend Framework' },
  { imgSrc: next, label: 'Next.js 15', desc: 'SSR and SSG Apps' },
  { imgSrc: react, label: 'React.js', desc: 'Frontend Framework' },
  { imgSrc: node, label: 'Node.js', desc: 'Backend Runtime' },
  { imgSrc: postgresql, label: 'PostgreSQL', desc: 'Relational Database' },

  // Supporting languages and backend
  { imgSrc: python, label: 'Python', desc: 'Programming Language' },
  { imgSrc: typescript, label: 'TypeScript', desc: 'Typed JavaScript' },
  { imgSrc: js, label: 'JavaScript ES6+', desc: 'Core Language' },
  { imgSrc: express, label: 'Express.js', desc: 'REST API Framework' },

  // Data layer
  { imgSrc: mongodb, label: 'MongoDB Atlas', desc: 'NoSQL Database' },
  { imgSrc: prisma, label: 'Prisma ORM', desc: 'Database ORM' },
  { imgSrc: redis, label: 'Redis Caching', desc: 'Performance Layer' },

  // Frontend styling and state
  { imgSrc: tailwind, label: 'Tailwind CSS', desc: 'Modern UI Styling' },
  { imgSrc: css, label: 'CSS3', desc: 'Responsive UI' },
  { imgSrc: redux, label: 'Redux Toolkit', desc: 'State Management' },

  // Security and payments
  { imgSrc: Aouth, label: 'OAuth and JWT', desc: 'Secure Authentication' },
  { imgSrc: stripe, label: 'Stripe and PayPal', desc: 'Payments Integration' },

  // Infra and tooling
  { imgSrc: docker, label: 'Docker', desc: 'Containerization' },
  { imgSrc: aws, label: 'AWS S3 and EC2', desc: 'Cloud Services' },
  { imgSrc: vercel, label: 'Vercel', desc: 'Deployment Platform' },
  { imgSrc: git, label: 'Git', desc: 'Version Control' },
  { imgSrc: GitHub, label: 'GitHub', desc: 'Secure version control' },
  { imgSrc: figma, label: 'Figma UI', desc: 'Design System' },
]

const ITEMS_PER_PAGE = 8

const Skill = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const sectionRef = useRef(null)
  const totalPages = Math.ceil(skillItems.length / ITEMS_PER_PAGE)

  const start = (currentPage - 1) * ITEMS_PER_PAGE
  const currentSkills = skillItems.slice(start, start + ITEMS_PER_PAGE)
  const emptySlots = ITEMS_PER_PAGE - currentSkills.length

  const handlePageChange = (nextPage) => {
    setCurrentPage(nextPage)

    requestAnimationFrame(() => {
      if (!sectionRef.current) return
      const headerOffset = 88
      const targetTop =
        sectionRef.current.getBoundingClientRect().top +
        window.scrollY -
        headerOffset

      window.scrollTo({ top: targetTop, behavior: 'smooth' })
    })
  }

  return (
    <section id='skills' className='section' ref={sectionRef}>
      <div className='container'>
        <h2 className='headline-2 reveal-up'>Essential Tools I use</h2>

        <p className='text-zinc-400 mt-3 mb-8 max-w-[55ch] reveal-up'>
          The technologies I use across frontend, backend, databases,
          cloud, and integrations.
        </p>

        <div className='reveal-up'>
          <div className='grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'>
            {currentSkills.map(({ imgSrc, label, desc }) => (
              <SkillCard
                key={label}
                imgSrc={imgSrc}
                label={label}
                desc={desc}
                classes='h-full'
              />
            ))}

            {emptySlots > 0 &&
              Array.from({ length: emptySlots }, (_, index) => (
                <div
                  key={`empty-skill-slot-${index}`}
                  className='invisible rounded-xl border border-zinc-700/40'
                  aria-hidden='true'
                />
              ))}
          </div>

          <div className='flex items-center justify-center gap-2 mt-6'>
            <button
              type='button'
              onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className='h-9 px-3 rounded-lg text-sm bg-zinc-800 hover:bg-zinc-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors'
            >
              Prev
            </button>

            {Array.from({ length: totalPages }, (_, index) => {
              const page = index + 1
              const isActive = page === currentPage

              return (
                <button
                  key={page}
                  type='button'
                  onClick={() => handlePageChange(page)}
                  className={`h-9 min-w-9 px-3 rounded-lg text-sm transition-colors ${
                    isActive
                      ? 'bg-sky-400 text-zinc-950'
                      : 'bg-zinc-800 hover:bg-zinc-700 text-zinc-100'
                  }`}
                >
                  {page}
                </button>
              )
            })}

            <button
              type='button'
              onClick={() =>
                handlePageChange(Math.min(totalPages, currentPage + 1))
              }
              disabled={currentPage === totalPages}
              className='h-9 px-3 rounded-lg text-sm bg-zinc-800 hover:bg-zinc-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors'
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skill
