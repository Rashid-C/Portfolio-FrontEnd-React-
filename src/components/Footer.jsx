/**
 * @copyright 2024 RASHID_C
 * @license Apache-2.0
 */

/**
 * Components
 */

import { ButtonPrimary } from "./Button";
import logo from '../images/logo-rc.svg'
import { contact } from '../data/contact'

const sitemap = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Services",
    href: "#services",
  },
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "Experience",
    href: "#experience",
  },
  {
    label: "Contact me",
    href: "#contact",
  },
];

const socials = [
  {
    label: "LinkedIn",
    href: contact.linkedin,
  },
  {
    label: "GitHub",
    href: contact.github,
  },
  {
    label: "X (Twitter)",
    href: contact.x,
  },
  {
    label: "Instagram",
    href: contact.instagram,
  },
  {
    label: "WhatsApp",
    href: contact.whatsappHref,
  },
];

const Footer = () => {
  return (
    <footer className="section">
      <div className="container">
        <div className="lg:grid lg:grid-cols-2">
          <div className="mb-10">
            <h2 className="headline-1 mb-8 lg:max-w-[12ch] reveal-up">
              Let&apos;s work together today!
            </h2>
            <ButtonPrimary
              href={`mailto:${contact.email}`}
              target="_self"
              label="Start project"
              icon="chevron_right"
              classes="reveal-up"
            />
            <p className="text-sm text-zinc-400 mt-6 reveal-up">
              <a
                href={contact.phoneUae.href}
                className="text-zinc-200 transition-colors hover:text-sky-300"
              >
                {contact.phoneUae.display}
              </a>{" "}
              (UAE) &middot;{" "}
              <a
                href={`mailto:${contact.email}`}
                className="text-zinc-200 transition-colors hover:text-sky-300"
              >
                {contact.email}
              </a>
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 lg:pl-20">
            <div>
              <p className="mb-2 reveal-up">Sitemap</p>
              <ul>
                {sitemap.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-2 reveal-up">Socials</p>
              <ul>
                {socials.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-10 mb-8">
          <a href="/" className="logo reveal-up">
            <img
              src={logo}
              width={40}
              height={40}
              alt="Logo"
              className=""
            />
          </a>

          <p className="text-zinc-500 text-sm reveal-up">
            &copy; 2026 <span className="text-zinc-200">RASHID_C</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
