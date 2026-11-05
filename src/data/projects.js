import alfath from '@/images/alfath.png'
import ecommerce from '@/images/ecommerce.png'
import english from '@/images/english.png'
import gocart from '@/images/gocart.png'
import kerala from '@/images/kerala.png'
import mehara from '@/images/mehara.png'
import mptms from '@/images/mptms.png'
import nezex from '@/images/nezex.png'
import NIBX from '@/images/nibx.png'
import polosysbooks from '@/images/polosysbooks.png'
import project1 from '@/images/project-1.png'
import project3 from '@/images/project-3.png'

/**
 * Projects with a `caseStudy` get their own page at /projects/[slug].
 * The others link straight to the live site or repo.
 */
export const projects = [
  {
    slug: 'nezex-one',
    imgSrc: nezex,
    title: 'NezeX One - Cloud ERP (UAE)',
    tags: ['Django REST Framework', 'Next.js', 'PostgreSQL', 'UAE VAT', 'AWS', 'Docker'],
    projectLink: 'https://nezexone.com/',
    caseStudy: {
      name: 'NezeX One',
      headline: 'A multi-tenant cloud ERP, live in the UAE',
      seoTitle: 'NezeX One: Multi-Tenant Cloud ERP Case Study',
      seoDescription:
        'How Rashid C built NezeX One, a multi-tenant cloud ERP live in the UAE, with UAE VAT invoicing, role-based access and 527 automated tests.',
      summary:
        'NezeX One is live in production in the UAE and used daily by its client. Sales, purchases, inventory and reporting share one customer list and one set of numbers, in English and Arabic, ready for UAE VAT.',
      role: 'Sole engineer: development, deployment, hosting and production support',
      company: 'AZC Electronics Trading LLC',
      period: 'Aug 2026 - Present',
      linkLabel: 'See NezeX One live',
      stats: [
        { label: 'Automated backend tests', value: '527' },
        { label: 'Live database migrations', value: '127' },
        { label: 'Granular permissions', value: '29' },
        { label: 'Django apps', value: '11' },
        { label: 'Customisable default roles', value: '8' },
      ],
      highlights: [
        'Architected a multi-tenant platform of 11 Django apps with per-tenant data isolation and multiple branches per business.',
        'Implemented UAE VAT tax invoices with TRN, locked issued invoices corrected through credit notes, and custom payment terms with due-date calculation.',
        'Designed role-based access control with 29 granular permissions and 8 customisable default roles, enforced centrally on every API request.',
        'Ran 127 schema and data migrations on the live PostgreSQL database.',
        'Wrote 527 automated backend tests with a GitHub Actions CI pipeline.',
        'Built a deployment script that backs up the database, uploads Docker images and restarts the services without manual server steps.',
      ],
      stack: ['Django', 'Django REST Framework', 'SimpleJWT', 'PostgreSQL', 'Next.js', 'TypeScript', 'Docker', 'Caddy', 'AWS EC2', 'AWS S3', 'GitHub Actions'],
    },
  },
  {
    slug: 'al-fath',
    imgSrc: alfath,
    title: 'Al Fath - Accounting (UAE)',
    tags: ['NestJS', 'PostgreSQL', 'Prisma', 'Next.js', 'Vitest'],
    projectLink: 'https://client-workflow-management-system.vercel.app/',
    caseStudy: {
      name: 'Al Fath',
      headline: 'A practice management system for an Abu Dhabi accounting and tax firm',
      seoTitle: 'Al Fath: Accounting Firm System Case Study',
      seoDescription:
        'A bilingual website and staff system for an Abu Dhabi accounting firm, built with NestJS and PostgreSQL, with audit logs and 250+ tests.',
      summary:
        'Al Fath gives the firm a bilingual English and Arabic public website and a staff system for running its client work, built so the records can be trusted.',
      role: 'Full Stack Engineer',
      company: 'AZC Electronics Trading LLC',
      period: '2026',
      linkLabel: 'See Al Fath live',
      stats: [
        { label: 'Vitest tests', value: '250+' },
        { label: 'Response to a stale edit', value: 'HTTP 409' },
      ],
      highlights: [
        'Built the NestJS REST API on PostgreSQL with Prisma migrations.',
        'Added custom roles, per-module permissions and own-versus-all data scoping enforced in SQL.',
        'Added optimistic locking, so a stale edit gets a 409 instead of overwriting newer work.',
        'Recorded changes in a transactional field-level audit log.',
        'Hardened access with login rate limiting, strict origin checks and least-privilege database roles.',
        'Wrote 250+ Vitest tests, plus backup and restore scripts.',
      ],
      stack: ['NestJS', 'PostgreSQL', 'Prisma', 'Next.js', 'TypeScript', 'Vitest'],
    },
  },
  {
    slug: 'azc-ecommerce',
    imgSrc: ecommerce,
    title: 'AZC E-commerce (UAE)',
    tags: ['Next.js', 'Stripe & PayPal', 'OpenAI', 'Admin Dashboard', 'shadcn/ui'],
    projectLink: 'https://www.azcstore.info/',
    caseStudy: {
      name: 'AZC E-commerce',
      headline: 'A production online store for customers across the GCC',
      seoTitle: 'AZC E-commerce: Online Store Case Study',
      seoDescription:
        'A production e-commerce store for GCC customers, built with Next.js, Node.js and MongoDB, with Stripe and PayPal checkout and an OpenAI feature.',
      summary:
        'I own the production e-commerce website for AZC Electronics Trading LLC, from checkout and order handling to search visibility and an OpenAI-powered customer engagement feature.',
      role: 'Full Stack Engineer',
      company: 'AZC Electronics Trading LLC',
      period: 'Jan 2026 - Present',
      linkLabel: 'See the store live',
      stats: [],
      highlights: [
        'Built and maintain the platform in Next.js, TypeScript, Node.js and MongoDB, keeping it live for GCC customers.',
        'Integrated two payment gateways, Stripe and PayPal, and built end-to-end order and admin workflows.',
        'Implemented Next.js SEO and multilingual support to improve reach across Gulf markets.',
        'Integrated an OpenAI-powered customer engagement feature and set up Google Analytics.',
      ],
      stack: ['Next.js', 'React', 'TypeScript', 'Node.js', 'MongoDB', 'Stripe', 'PayPal', 'shadcn/ui', 'OpenAI API', 'Google Analytics'],
    },
  },
  {
    slug: 'polosys-books',
    imgSrc: polosysbooks,
    title: 'Polosys Books - SaaS ERP (GCC)',
    tags: ['Django REST Framework', 'Multi-Tenant', 'PostgreSQL', 'AWS Lambda'],
    projectLink: 'https://web.polosysbooks.com/login/',
    caseStudy: {
      name: 'Polosys Books',
      headline: 'Making a multi-tenant SaaS ERP dramatically faster',
      seoTitle: 'Polosys Books: SaaS ERP Speed Case Study',
      seoDescription:
        'How Rashid C cut a multi-tenant ERP transaction from 110 seconds to 0.8 seconds with bulk database operations and a custom FIFO engine.',
      summary:
        'Polosys Books is a multi-tenant SaaS ERP serving the GCC and Saudi Arabia market. I joined on contract and rebuilt the slow transaction paths that were holding up daily accounting work.',
      role: 'Back End Developer (Contract)',
      company: 'Polosys Technologies LLP',
      period: 'Jun 2026 - Aug 2026',
      linkLabel: 'Open Polosys Books',
      stats: [
        { label: 'VendorCredit transaction', value: '110 s → 0.8 s' },
        { label: 'PurchaseInvoice processing', value: '60 s → 1-2 s' },
        { label: 'Interconnected bugs fixed', value: '14' },
        { label: 'Files audited', value: '579' },
      ],
      highlights: [
        'Cut VendorCredit transaction processing by about 99% on AWS Lambda and RDS by rebuilding the service layer with bulk database operations and a custom incremental FIFO engine.',
        'Reduced PurchaseInvoice processing from up to 60 seconds to 1-2 seconds using the same architecture.',
        'Fixed 14 interconnected bugs across 5 files in the Delivery Challan module through systematic root-cause analysis.',
        'Added multi-unit quantity conversion, so items sell in one unit while inventory tracks in another.',
        'Audited 579 files across 27 Django apps and documented 21 architectural issues for the technical lead.',
        'Wrote the platform\'s technical documentation site in Docusaurus, covering 13 business modules and the API reference.',
      ],
      stack: ['Django REST Framework', 'PostgreSQL', 'AWS Lambda', 'AWS RDS', 'Docusaurus'],
    },
  },
  {
    slug: 'mehar-pardha-tailor-management',
    imgSrc: mptms,
    title: 'Mehar Pardha - Tailor Management (UAE)',
    tags: ['Next.js', 'Django REST Framework', 'PostgreSQL', 'JWT Auth'],
    projectLink: 'https://tmsmp.vercel.app/',
  },
  {
    slug: 'mehara-pardha-ecommerce',
    imgSrc: mehara,
    title: 'Mehara Pardha E-commerce (UAE)',
    tags: ['Next.js', 'Google OAuth', 'E-commerce', 'JWT Auth', 'Admin Dashboard'],
    projectLink: 'https://meharcollective.vercel.app/',
  },
  {
    slug: 'nibx',
    imgSrc: NIBX,
    title: 'NIBX (USA)',
    tags: ['React.js', 'Vite', 'Tailwind CSS', 'Responsive UI', 'Motion'],
    projectLink: 'https://www.thenibx.com/',
  },
  {
    slug: 'mern-blog',
    imgSrc: project1,
    title: 'MERN Blog - Blog Platform',
    tags: ['MERN', 'Google OAuth', 'JWT Auth', 'Admin Dashboard'],
    projectLink: 'https://bloganu.vercel.app/',
  },
  {
    slug: 'english-expert',
    imgSrc: english,
    title: 'English Expert Coaching Platform',
    tags: ['React.js', 'Tailwind CSS', 'Responsive UI'],
    projectLink: 'https://kerala-english-coach.vercel.app',
  },
  {
    slug: 'multi-vendor-ecommerce',
    imgSrc: gocart,
    title: 'Multi-Vendor E-commerce',
    tags: ['Next.js', 'Tailwind CSS', 'Responsive UI'],
    projectLink: 'https://nexuscart-alpha.vercel.app',
  },
  {
    slug: 'bakery-store',
    imgSrc: kerala,
    title: 'Bakery Store',
    tags: ['React.js', 'Tailwind CSS', 'Responsive UI'],
    projectLink: 'https://keralabakery.netlify.app',
  },
  {
    slug: 'rashid-blog-cms',
    imgSrc: project3,
    title: "Rashid's Blog - CMS",
    tags: ['MERN', 'Google OAuth', 'Admin Dashboard'],
    projectLink: 'https://github.com/Rashid-C/mern-blog',
  },
]

export const caseStudies = projects.filter((project) => project.caseStudy)

export const getCaseStudy = (slug) =>
  caseStudies.find((project) => project.slug === slug)
