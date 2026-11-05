/**
 * @copyright 2024 RASHID_C
 * @license Apache-2.0
 */

import Paginated from './Paginated'
import SkillCard from './SkillCard'
import js from '@/images/javascript.svg'
import node from '@/images/nodejs.svg'
import express from '@/images/expressjs.svg'
import mongodb from '@/images/mongodb.svg'
import react from '@/images/react.svg'
import tailwind from '@/images/tailwindcss.svg'
import next from '@/images/next.svg'
import typescript from '@/images/typescript.svg'
import postgresql from '@/images/postgresql.svg'
import redis from '@/images/redis.svg'
import prisma from '@/images/prisma.svg'
import docker from '@/images/docker.svg'
import aws from '@/images/aws.svg'
import stripe from '@/images/stripe.svg'
import Aouth from '@/images/oauth.svg'
import GitHub from '@/images/github.svg'
import redux from '@/images/redux.svg'
import python from '@/images/python.svg'
import django from '@/images/django.svg'
import nestjs from '@/images/nestjs.svg'
import mysql from '@/images/mysql.svg'
import githubActions from '@/images/githubactions.svg'
import openai from '@/images/openai.svg'
import vitest from '@/images/vitest.svg'

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

const Skill = () => {
  return (
    <section id='skills' className='section'>
      <div className='container'>
        <h2 className='headline-2 reveal-up'>Essential Tools I use</h2>

        <p className='text-zinc-400 mt-3 mb-8 max-w-[55ch] reveal-up'>
          The technologies I use across frontend, backend, databases,
          cloud, and integrations.
        </p>

        <div className='reveal-up'>
          <Paginated
            perPage={8}
            label='Tools'
            gridClassName='grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
          >
            {skillItems.map(({ imgSrc, label, desc }) => (
              <SkillCard
                key={label}
                imgSrc={imgSrc}
                label={label}
                desc={desc}
                classes='h-full'
              />
            ))}
          </Paginated>
        </div>
      </div>
    </section>
  )
}

export default Skill
