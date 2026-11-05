/**
 * @copyright 2026 RASHID_C
 * @license Apache-2.0
 */

import {
  Bot,
  Building2,
  Cloud,
  CreditCard,
  Database,
  Globe,
  Rocket,
  Server,
  Shield,
  Smartphone,
  TrendingUp,
  Wrench,
} from 'lucide-react'
import Paginated from './Paginated'

const services = [
  {
    icon: Building2,
    title: 'ERP & SaaS Development',
    desc: 'Multi-tenant business systems: sales, purchase, inventory, reporting, and UAE VAT tax invoices with credit notes.',
  },
  {
    icon: Globe,
    title: 'Web Development',
    desc: 'Responsive Next.js and React applications for every screen size, with clean architecture and SEO foundations.',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    desc: 'Cross-platform iOS and Android apps with React Native, sharing APIs and business logic with your web platform.',
  },
  {
    icon: Server,
    title: 'Backend & API Development',
    desc: 'REST APIs in Django REST Framework, NestJS and Express, with role-based access and reliable business logic.',
  },
  {
    icon: Database,
    title: 'Database Design',
    desc: 'PostgreSQL and MySQL schema design, indexing, query tuning, and safe migrations on live data.',
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    desc: 'Docker deployments on AWS (EC2, S3, RDS, Lambda), GitHub Actions CI/CD, backups, and automated releases.',
  },
  {
    icon: CreditCard,
    title: 'Payments & Integrations',
    desc: 'Stripe, PayPal, WhatsApp API and Zoho CRM integrations with secure checkout and reliable transactions.',
  },
  {
    icon: Shield,
    title: 'Security and Authentication',
    desc: 'JWT auth, granular permissions, audit logs, rate limiting, and least-privilege database access.',
  },
  {
    icon: Bot,
    title: 'AI Integration',
    desc: 'OpenAI-powered product features and AI-assisted engineering, with careful review for correctness and security.',
  },
  {
    icon: TrendingUp,
    title: 'SEO Optimization',
    desc: 'On-page SEO, technical SEO setup, metadata strategy, and search visibility improvements.',
  },
  {
    icon: Rocket,
    title: 'Performance Optimization',
    desc: 'Faster loading and API response times through caching, tuning, and frontend optimization.',
  },
  {
    icon: Wrench,
    title: 'Software Maintenance',
    desc: 'Continuous support, bug fixing, version upgrades, and feature enhancement after launch.',
  },
]

const iconStyles = [
  { halo: 'from-cyan-300/40 to-sky-500/10', gradFrom: '#67e8f9', gradTo: '#0ea5e9' },
  { halo: 'from-emerald-300/40 to-teal-500/10', gradFrom: '#6ee7b7', gradTo: '#14b8a6' },
  { halo: 'from-fuchsia-300/35 to-violet-500/10', gradFrom: '#f0abfc', gradTo: '#8b5cf6' },
]

const Service = () => {
  return (
    <section id='services' className='section'>
      <div className='container'>
        <h2 className='headline-2 mb-3 reveal-up'>My Services</h2>

        <p className='text-zinc-400 mt-3 mb-8 max-w-[60ch] reveal-up'>
          High-impact services focused on building secure, scalable, and
          business-ready digital products.
        </p>

        <div className='reveal-up'>
          <Paginated
            perPage={6}
            label='Services'
            gridClassName='grid gap-3 md:grid-cols-2 lg:grid-cols-3'
          >
            {services.map(({ icon: Icon, title, desc }, index) => {
              const style = iconStyles[index % iconStyles.length]

              return (
                <article
                  key={title}
                  style={{ '--card-grad-from': style.gradFrom, '--card-grad-to': style.gradTo }}
                  className='glass-card group relative p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.05] ring-1 ring-inset ring-white/10 transition-[background-color,transform] hover:-translate-y-0.5'
                >
                  <div
                    className={`absolute -top-6 -right-4 w-20 h-20 rounded-full blur-2xl bg-gradient-to-br ${style.halo} pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  ></div>

                  <div className='relative w-8 h-8 rounded-lg grid place-items-center mb-3 bg-white/5 ring-1 ring-white/10 group-hover:ring-white/20 transition-all group-hover:scale-105'>
                    <Icon size={15} style={{ color: style.gradFrom }} aria-hidden='true' />
                  </div>

                  <h3 className='title-1 mb-2'>{title}</h3>
                  <p className='text-zinc-400 text-sm'>{desc}</p>
                </article>
              )
            })}
          </Paginated>
        </div>
      </div>
    </section>
  )
}

export default Service
