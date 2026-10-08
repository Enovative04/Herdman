/**
 * ------------------------------------------------------------------
 * BRAND / CONFIG — single source of truth
 * ------------------------------------------------------------------
 * Replace the values below once the final legal business name,
 * contact details and social links are confirmed. Nothing else in
 * the codebase should hard-code the company name — always import
 * BRAND.name from this file.
 * ------------------------------------------------------------------
 */

export const BRAND = {
  /** The one place to change the company name. */
  name: "Herdman and Hire",
  /** Shown occasionally for longer, more formal references. */
  legalSuffix: "", // e.g. "(Pty) Ltd" — leave blank until confirmed
  product: "BoviTrack",
  tagline: "Cultivating a smarter, more sustainable agricultural landscape.",
  shortDescription:
    "Herdman and Hire brings technology and tradition together to help build a more productive, sustainable agricultural future.",
  country: "Botswana",
  foundingYear: 2024,

  contact: {
    phoneNumbers: ["+267 74 667 407", "+267 72 639 276"],
    postalAddress: "P O BOX 182, Somolale, Botswana",
  },

  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
    tiktok: "https://tiktok.com",
  },

  cta: {
    getStarted: "#get-started",
    becomeServiceProvider: "#service-provider",
    contact: "#contact",
  },
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "BoviTrack", href: "/bovitrack" },
  { label: "Ecosystem", href: "/#ecosystem" },
  { label: "Resources", href: "/#resources" },
] as const;

export const FOOTER_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "BoviTrack", href: "/bovitrack" },
  { label: "Ecosystem", href: "/#ecosystem" },
  { label: "Resources", href: "/#resources" },
  { label: "Contact", href: "/#contact" },
] as const;
