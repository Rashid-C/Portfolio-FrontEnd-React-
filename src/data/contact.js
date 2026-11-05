/**
 * @copyright 2026 RASHID_C
 * @license Apache-2.0
 */

/**
 * Single source of truth for contact details.
 * UAE number is primary (calls + WhatsApp); India number is secondary.
 */

const WHATSAPP_MESSAGE = 'Hi Rashid, I found your portfolio and would like to talk.'

export const contact = {
  email: 'anurashid105@gmail.com',
  location: 'Dubai, UAE',
  phoneUae: {
    display: '+971 55 680 1022',
    href: 'tel:+971556801022',
  },
  phoneIndia: {
    display: '+91 80789 67913',
    href: 'tel:+918078967913',
  },
  whatsappHref: `https://wa.me/971556801022?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`,
  github: 'https://github.com/Rashid-C',
  linkedin: 'https://www.linkedin.com/in/rashid-c/',
  x: 'https://x.com/rashidc_in',
  instagram: 'https://www.instagram.com/rashidc.in/',
}
