import { Reveal } from "../../components/ui/Reveal";
import { Eyebrow } from "../../components/ui/Typography";
import { Button } from "../../components/ui/Button";
import { PhoneMockup, HerdOverviewScreen } from "../../components/PhoneMockup";
import { BRAND } from "../../content/brand";

const BENEFITS = [
  { title: "Better Records", copy: "Know the history of your livestock." },
  { title: "Better Decisions", copy: "See patterns and make informed choices." },
  {
    title: "Better Value",
    copy: "Reliable documentation can help demonstrate the quality, history and management of livestock when it matters.",
  },
];

export function BovitrackFeature() {
  return (
    <section className="border-b border-line bg-ink py-20 text-paper lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Reveal>
              <Eyebrow className="text-slate-light">{`${BRAND.name} / Product`}</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-5 text-[34px] font-bold leading-[1.08] tracking-[-0.025em] sm:text-[46px]">
                Know your animals. Know your farm.
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-6 max-w-lg text-[15.5px] leading-relaxed text-paper/70">
                {BRAND.product} is {BRAND.name}&apos;s livestock record-keeping platform designed to
                help farmers build reliable digital records of their animals, track growth and
                maintain better documentation over time.
              </p>
            </Reveal>

            <div className="mt-10 space-y-0 border-t border-white/15">
              {BENEFITS.map((b, i) => (
                <Reveal key={b.title} delay={180 + i * 80}>
                  <div className="flex flex-col gap-1 border-b border-white/15 py-5 sm:flex-row sm:gap-10">
                    <h3 className="w-40 shrink-0 text-[15px] font-semibold text-lime">{b.title}</h3>
                    <p className="text-[14.5px] leading-relaxed text-paper/70">{b.copy}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={420}>
              <div className="mt-10">
                <Button to="/bovitrack" variant="primary">
                  Explore BoviTrack →
                </Button>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <Reveal delay={120}>
              <PhoneMockup>
                <HerdOverviewScreen />
              </PhoneMockup>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
