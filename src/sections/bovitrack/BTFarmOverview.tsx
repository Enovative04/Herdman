import { Reveal } from "../../components/ui/Reveal";
import { Eyebrow } from "../../components/ui/Typography";
import { PhoneMockup, FarmOverviewScreen } from "../../components/PhoneMockup";

const METRICS = [
  { label: "Total Livestock", copy: "A running count of the animals recorded on your farm." },
  { label: "Active Records", copy: "Records currently maintained and up to date." },
  { label: "Recent Updates", copy: "Changes and additions made across your farm records." },
  { label: "Animals Added", copy: "New animals registered within a given period." },
];

export function BTFarmOverview() {
  return (
    <section className="border-b border-line bg-paper-dim py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Reveal>
              <Eyebrow>Farm Overview</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-5 text-[32px] font-bold leading-[1.1] tracking-[-0.025em] text-ink sm:text-[42px]">
                See the bigger picture.
              </h2>
            </Reveal>

            <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2">
              {METRICS.map((m, i) => (
                <Reveal key={m.label} delay={120 + i * 80}>
                  <div className="border-t border-ink/20 pt-4">
                    <p className="text-[16px] font-bold tracking-[-0.01em] text-ink">{m.label}</p>
                    <p className="mt-2 text-[14px] leading-relaxed text-slate">{m.copy}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <Reveal delay={120}>
              <PhoneMockup>
                <FarmOverviewScreen />
              </PhoneMockup>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
