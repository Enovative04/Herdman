import { Button } from "../../components/ui/Button";
import { Eyebrow } from "../../components/ui/Typography";
import { Reveal } from "../../components/ui/Reveal";
import { IMAGES } from "../../content/images";

const STATS = [
  { n: "01", label: "Connected Agriculture" },
  { n: "02", label: "Better Records" },
  { n: "03", label: "Trusted Ecosystem" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line bg-paper pt-16 lg:pt-24">
      <span
        aria-hidden
        className="bg-display-word pointer-events-none absolute -top-6 left-0 w-full text-center text-[22vw] leading-none lg:-top-10"
      >
        AGRICULTURE
      </span>

      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
        <Reveal>
          <Eyebrow>Agriculture × Technology</Eyebrow>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mt-5 max-w-4xl text-[42px] font-bold leading-[1.03] tracking-[-0.03em] text-ink sm:text-[58px] lg:text-[76px]">
            Building a smarter agricultural future for Botswana
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <div className="mt-8 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <p className="max-w-md text-[16px] leading-relaxed text-slate">
              Herdman and Hire brings technology and tradition together through precision farming,
              livestock management, agricultural consultancy and training.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Button href="#about" variant="primary">
                Explore Herdman and Hire
              </Button>
              <Button to="/bovitrack" variant="secondary">
                Discover BoviTrack →
              </Button>
            </div>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="relative mt-14 overflow-hidden rounded-2xl">
            <img
              src={IMAGES.heroLandscape}
              srcSet={`${IMAGES.heroLandscapeMobile} 640w, ${IMAGES.heroLandscape} 1440w`}
              sizes="(max-width: 640px) calc(100vw - 3rem), (max-width: 1440px) calc(100vw - 5rem), 1360px"
              alt="Herdsman operating a drone while monitoring cattle on a farm"
              className="h-[320px] w-full object-cover sm:h-[420px] lg:h-[560px]"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 grid grid-cols-3 divide-x divide-white/25 border-t border-white/25 bg-ink/40 backdrop-blur-sm">
              {STATS.map((s) => (
                <div key={s.n} className="px-4 py-4 sm:px-8 sm:py-6">
                  <p className="text-[12px] font-semibold text-lime">{s.n}</p>
                  <p className="mt-1 text-[12px] font-medium text-paper sm:text-[14px]">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
