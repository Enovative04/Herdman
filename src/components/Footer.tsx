import { BRAND, FOOTER_LINKS } from "../content/brand";
import { Logo } from "./Logo";

function Facebook({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V8c0-.9.25-1.5 1.56-1.5H16.7V3.7c-.28-.04-1.25-.12-2.37-.12-2.35 0-3.95 1.43-3.95 4.06V9.9H7.6V13h2.78v8h3.12Z" />
    </svg>
  );
}

function Instagram({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function Linkedin({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3.25a1.97 1.97 0 1 0 0 3.94 1.97 1.97 0 0 0 0-3.94ZM20.44 20h-3.37v-5.6c0-1.34-.03-3.06-1.86-3.06-1.87 0-2.16 1.46-2.16 2.97V20H9.68V8.5h3.24v1.57h.05c.45-.85 1.56-1.75 3.21-1.75 3.43 0 4.26 2.26 4.26 5.19V20Z" />
    </svg>
  );
}

function TikTokIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 1 1-2.59-2.59c.28 0 .54.04.8.11V9.74a5.8 5.8 0 0 0-.8-.06 5.75 5.75 0 1 0 5.75 5.75V8.4a7.27 7.27 0 0 0 4.25 1.36V6.69a4.27 4.27 0 0 1-2.76-.87Z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer id="contact" className="border-t border-line bg-paper">
      <div className="mx-auto max-w-[1440px] px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo />
            <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-slate">{BRAND.tagline}</p>
            <div className="mt-7 flex items-center gap-4">
              <a
                href={BRAND.social.facebook}
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-ink"
              >
                <Facebook size={16} />
              </a>
              <a
                href={BRAND.social.instagram}
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-ink"
              >
                <Instagram size={16} />
              </a>
              <a
                href={BRAND.social.linkedin}
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-ink"
              >
                <Linkedin size={16} />
              </a>
              <a
                href={BRAND.social.tiktok}
                aria-label="TikTok"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-ink"
              >
                <TikTokIcon size={15} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-3 lg:col-start-7">
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-slate">Navigate</p>
            <ul className="mt-5 space-y-3">
              {FOOTER_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-[14.5px] text-ink/85 transition-colors hover:text-ink">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-slate">Contact</p>
            <ul className="mt-5 space-y-3 text-[14.5px] text-ink/85">
              {BRAND.contact.phoneNumbers.map((phone) => (
                <li key={phone}>
                  <a href={`tel:${phone.replaceAll(" ", "")}`} className="transition-colors hover:text-ink">
                    {phone}
                  </a>
                </li>
              ))}
              <li>{BRAND.contact.postalAddress}</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-line pt-8 text-[13px] text-slate md:flex-row md:items-center md:justify-between">
          <p>
            © {BRAND.foundingYear} {BRAND.name}. All rights reserved.
          </p>
          <p>{BRAND.country}</p>
        </div>
      </div>
    </footer>
  );
}
