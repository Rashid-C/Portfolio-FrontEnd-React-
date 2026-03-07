/**
 * @copyright 2026 RASHID_C
 * @license Apache-2.0
 */

const services = [
  {
    icon: 'language',
    title: 'Web Development',
    desc: 'Scalable web applications with clean architecture, SEO foundations, and production-ready delivery.',
  },
  {
    icon: 'smartphone',
    title: 'Mobile App Development',
    desc: 'Cross-platform mobile experiences focused on performance, usability, and maintainable codebases.',
  },
  {
    icon: 'dns',
    title: 'Backend Development',
    desc: 'Secure REST APIs, authentication systems, role-based access, and reliable server-side logic.',
  },
  {
    icon: 'database',
    title: 'Database Management',
    desc: 'Schema design, query optimization, indexing, migrations, and high-performance data operations.',
  },
  {
    icon: 'cloud',
    title: 'Cloud Integration',
    desc: 'Cloud deployments, storage integrations, environment setup, and scalable infrastructure workflows.',
  },
  {
    icon: 'payments',
    title: 'Payment Gateway Integration',
    desc: 'Stripe/PayPal integrations with secure checkout, subscriptions, and transaction reliability.',
  },
  {
    icon: 'security',
    title: 'Security and Authentication',
    desc: 'JWT/OAuth flows, API hardening, validation layers, and secure access management.',
  },
  {
    icon: 'trending_up',
    title: 'SEO Optimization',
    desc: 'On-page SEO, technical SEO setup, metadata strategy, and search visibility improvements.',
  },
  {
    icon: 'devices',
    title: 'Responsive Design',
    desc: 'Consistent user experience across mobile, tablet, and desktop with modern UI implementation.',
  },
  {
    icon: 'rocket_launch',
    title: 'Performance Optimization',
    desc: 'Faster loading and API response times through caching, tuning, and frontend optimization.',
  },
  {
    icon: 'build',
    title: 'Software Maintenance',
    desc: 'Continuous support, bug fixing, version upgrades, and feature enhancement after launch.',
  },
]

const iconStyles = [
  {
    badge:
      'bg-gradient-to-br from-cyan-300 to-sky-500 text-zinc-950 shadow-[0_12px_24px_rgba(14,165,233,0.45)]',
    halo: 'from-cyan-300/40 to-sky-500/10',
  },
  {
    badge:
      'bg-gradient-to-br from-emerald-300 to-teal-500 text-zinc-950 shadow-[0_12px_24px_rgba(20,184,166,0.45)]',
    halo: 'from-emerald-300/40 to-teal-500/10',
  },
  {
    badge:
      'bg-gradient-to-br from-fuchsia-300 to-violet-500 text-zinc-950 shadow-[0_12px_24px_rgba(168,85,247,0.45)]',
    halo: 'from-fuchsia-300/35 to-violet-500/10',
  },
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

        <div className='grid gap-3 md:grid-cols-2 lg:grid-cols-3'>
          {services.map(({ icon, title, desc }, index) => {
            const style = iconStyles[index % iconStyles.length]

            return (
              <article
                key={index}
                className='reveal-up group relative p-5 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-[background-color,transform] hover:-translate-y-0.5'
              >
                <div
                  className={`absolute -top-6 -right-4 w-24 h-24 rounded-full blur-2xl bg-gradient-to-br ${style.halo} pointer-events-none`}
                ></div>

                <div
                  className={`relative w-14 h-14 rounded-2xl grid place-items-center mb-4 ring-1 ring-white/20 transition-transform group-hover:scale-105 ${style.badge}`}
                >
                  <span
                    className='material-symbols-rounded text-[26px]'
                    aria-hidden='true'
                  >
                    {icon}
                  </span>
                </div>

                <h3 className='title-1 mb-2'>{title}</h3>
                <p className='text-zinc-400 text-sm'>{desc}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Service


