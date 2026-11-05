/**
 * @copyright 2026 RASHID_C
 * @license Apache-2.0
 */

import HighlightList from './HighlightList'

const experiences = [
  {
    role: 'Full Stack Engineer',
    company: 'AZC Electronics Trading LLC',
    duration: 'Jan 2026 - Present',
    location: 'Dubai, UAE · On-site',
    highlights: [
      'Sole engineer of NezeX One (nezexone.com), a multi-tenant cloud ERP live in production in the UAE and used daily by its client - 11 Django apps with per-tenant data isolation and multiple branches per business, on Django REST Framework, PostgreSQL and Next.js/TypeScript.',
      'Implemented UAE VAT tax invoices with TRN, locked issued invoices corrected through credit notes, and custom payment terms with due-date calculation.',
      'Designed role-based access control with 29 granular permissions and 8 customisable default roles, enforced centrally on every API request.',
      'Wrote 527 automated backend tests in a GitHub Actions CI pipeline, ran 127 schema and data migrations on the live PostgreSQL database, and built a deployment script that backs up the database, uploads Docker images and restarts services on AWS EC2 and S3.',
      'Built Al Fath for an Abu Dhabi accounting and tax firm - a bilingual (English/Arabic) public website plus a staff practice-management system: NestJS REST API on PostgreSQL/Prisma with per-module permissions, optimistic locking, a transactional field-level audit log, login rate limiting, least-privilege database roles and 250+ Vitest tests.',
      'Own the company\'s production e-commerce website (azcstore.info) - Next.js, Node.js and MongoDB with Stripe and PayPal payments, Next.js SEO, Google Analytics and an OpenAI-powered customer engagement feature.',
    ],
  },
  {
    role: 'Back End Developer (Contract)',
    company: 'Polosys Technologies LLP',
    duration: 'Jun 2026 - Aug 2026',
    location: 'Malappuram, India · Remote',
    highlights: [
      'Built and maintained REST APIs across Sales Invoice, Sales Order, Delivery Challan, Estimates, Purchase, Inventory, and Customer modules in an organisation-scoped multi-tenant SaaS ERP serving the GCC and Saudi Arabia market.',
      'Cut VendorCredit transaction processing ~99% (110s → 800ms) on AWS Lambda and RDS by rebuilding the service layer with bulk database operations and a custom incremental FIFO engine (FIFOEngineV2), unblocking real-time invoice workflows.',
      'Reduced PurchaseInvoice processing from up to 60 seconds to 1-2 seconds using the same V2 architecture, removing a daily bottleneck in accounting operations.',
      'Fixed 14 interconnected bugs across 5 files in the Delivery Challan module - inventory reversal, status-machine handling, and DC-to-invoice conversion edge cases including voided and bulk-deleted invoices.',
      'Added multi-unit quantity conversion (carton to piece) across Delivery Challan, Sales Order, and Sales Invoice, letting items be sold in one unit while inventory tracks in another without breaking downstream documents.',
      'Resolved production crashes in Sales By Item and Sales By Customer reports caused by soft-deleted records, replacing unsafe .get() calls with .filter().first() fallbacks.',
      'Corrected Statement, Receipt Voucher, and Payment PDF templates from US Letter to A4 to meet GCC document standards.',
      'Authored the platform\'s technical documentation site in Docusaurus - 13 business modules, API reference, backend architecture, and a frontend developer onboarding guide.',
      'Audited 579 files across 27 Django apps, documented 21 architectural issues, and closed out hardcoded secrets and weak key configurations before they became incidents.',
    ],
  },
  {
    role: 'Software Developer',
    company: 'Doctosmart Enterprises, Govt. Cyber Park',
    duration: 'Jul 2024 - Dec 2025',
    location: 'Calicut, India · On-site',
    highlights: [
      'Delivered a clinical (IVF) management system by designing the relational database schema and REST APIs in Django/DRF and PostgreSQL, covering patient records, appointments, and medical history.',
      'Built a MERN-stack e-commerce platform end to end - authentication, product and order flows, admin tooling, and a responsive React front end.',
      'Mentored 2 junior developers through code reviews.',
    ],
  },
  {
    role: 'MERN Stack Developer',
    company: 'Learnbuds',
    duration: 'Jan 2024 - Jul 2024',
    location: 'Ernakulam, India · Hybrid',
    highlights: [
      'Built the authentication module for a matrimony platform (MERN stack) - sign-up, login, and JWT/session-based token generation - by designing the token and session-handling layer.',
      'Added self-service password-reset flows so users could recover account access without manual intervention.',
    ],
  },
  {
    role: 'MERN Stack Developer (Internship)',
    company: 'Brototype',
    duration: 'Oct 2022 - Dec 2023',
    location: 'Malappuram, India · On-site',
    highlights: [
      'Completed an intensive MERN program focused on production-ready full-stack development.',
      'Built multiple projects including e-commerce, social, and booking systems using React, Node.js, and MongoDB.',
    ],
  },
]

const education = {
  degree: 'BSc Computer Science',
  school: 'University of Calicut, Kerala',
  duration: '2018 - 2022',
}

const certifications = [
  'One Million Prompters - AI Prompt Engineering (Dubai Future Foundation)',
  'AI & Data Science (DDU-GKY)',
  'MongoDB Basics (MongoDB University)',
  'EF SET English - B2',
]

const languages = 'English, Malayalam, Hindi (basic)'

const Experience = () => {
  return (
    <section id='experience' className='section'>
      <div className='container'>
        <h2 className='headline-2 mb-3 reveal-up'>Work experience</h2>

        <p className='text-zinc-400 mb-8 max-w-[60ch] reveal-up'>
          Four years of shipping production software &mdash; most recently
          ERP and e-commerce systems running live in the UAE.
        </p>

        <div className='relative'>
          <div className='absolute left-[7px] top-2 bottom-2 w-px bg-zinc-700'></div>

          <div className='space-y-10'>
            {experiences.map(({ role, company, duration, location, highlights }) => (
              <article
                key={`${company}-${role}`}
                className='reveal-up relative pl-8 md:pl-10'
              >
                <span className='absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full bg-sky-400 ring-4 ring-zinc-900'></span>

                <div className='flex flex-wrap items-start justify-between gap-3'>
                  <div>
                    <h3 className='title-1'>{role}</h3>
                    <p className='text-zinc-300 mt-1'>
                      {company}{' '}
                      <span className='text-zinc-500'>- {location}</span>
                    </p>
                  </div>

                  <p className='h-8 text-sm text-zinc-200 bg-zinc-50/10 grid items-center px-3 rounded-lg'>
                    {duration}
                  </p>
                </div>

                <HighlightList items={highlights} />
              </article>
            ))}
          </div>
        </div>

        <div className='mt-12 bg-zinc-800/50 p-7 rounded-2xl md:p-10 reveal-up'>
          <h3 className='title-1 mb-5'>Education &amp; certifications</h3>

          <div className='grid gap-6 md:grid-cols-2'>
            <div>
              <p className='text-zinc-200'>{education.degree}</p>
              <p className='text-sm text-zinc-400 mt-1'>
                {education.school} &middot; {education.duration}
              </p>

              <p className='text-sm text-zinc-400 mt-4'>
                <span className='text-zinc-300'>Languages:</span> {languages}
              </p>
            </div>

            <ul className='space-y-2'>
              {certifications.map((item) => (
                <li
                  key={item}
                  className='text-sm md:text-base text-zinc-300 flex gap-2'
                >
                  <span
                    className='mt-2 h-1.5 w-1.5 rounded-full bg-sky-400 shrink-0'
                    aria-hidden='true'
                  ></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
