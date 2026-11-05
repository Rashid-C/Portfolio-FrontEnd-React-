/**
 * @copyright 2024 RASHID_C
 * @license Apache-2.0
 */

import { useRef, useState } from 'react'
import { useLenis } from 'lenis/react'
import SkillCard from './SkillCard'
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
import stripe from '../images/stripe.svg'
import Aouth from '../images/oauth.svg'
import GitHub from '../images/github.svg'
import redux from '../images/redux.svg'
import python from '../images/python.svg'
import django from '../images/django.svg'
import nestjs from '../images/nestjs.svg'
import mysql from '../images/mysql.svg'
import githubActions from '../images/githubactions.svg'
import openai from '../images/openai.svg'
import vitest from '../images/vitest.svg'

const skillItems = [
  // Core stack, in the order it appears on my resume headline
  { imgSrc: next, label: 'Next.js', desc: 'SSR, SSG and SEO' },
  { imgSrc: react, label: 'React.js', desc: 'Frontend Library' },
  { imgSrc: typescript, label: 'TypeScript', desc: 'Typed JavaScript' },
  { imgSrc: python, label: 'Python', desc: 'Programming Language' },
  { imgSrc: node, label: 'Node.js', desc: 'Backend Runtime' },
  { imgSrc: nestjs, label: 'NestJS', desc: 'Structured Node APIs' },
  { imgSrc: django, label: 'Django REST Framework', desc: 'Python APIs' },
  { imgSrc: postgresql, label: 'PostgreSQL', desc: 'Schema Design & Tuning' },

  // Infra, data layer and cloud
  { imgSrc: docker, label: 'Docker', desc: 'Containerised Deploys' },
  { imgSrc: express, label: 'Express.js', desc: 'REST API Framework' },
  { imgSrc: mysql, label: 'MySQL', desc: 'Relational Database' },
  { imgSrc: mongodb, label: 'MongoDB', desc: 'NoSQL Database' },
  { imgSrc: prisma, label: 'Prisma ORM', desc: 'Migrations & Queries' },
  { imgSrc: redis, label: 'Redis', desc: 'Caching Layer' },
  { imgSrc: aws, label: 'AWS', desc: 'EC2, S3, RDS, Lambda' },
  { imgSrc: githubActions, label: 'GitHub Actions', desc: 'CI/CD Pipelines' },

  // Integrations, quality and tooling
  { imgSrc: stripe, label: 'Stripe and PayPal', desc: 'Payments Integration' },
  { imgSrc: Aouth, label: 'JWT and RBAC', desc: 'Auth & Permissions' },
  { imgSrc: openai, label: 'OpenAI API', desc: 'AI Product Features' },
  { imgSrc: vitest, label: 'Vitest', desc: 'Automated Testing' },
  { imgSrc: tailwind, label: 'Tailwind CSS', desc: 'With shadcn/ui' },
  { imgSrc: redux, label: 'Redux Toolkit', desc: 'State Management' },
  { imgSrc: js, label: 'JavaScript ES6+', desc: 'Core Language' },
  { imgSrc: GitHub, label: 'Git and GitHub', desc: 'Version Control' },
]

const ITEMS_PER_PAGE = 8

const Skill = () => {
  const lenis = useLenis()
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
      lenis?.scrollTo(sectionRef.current, { offset: -88 })
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
