import { Reveal } from "../../components/ui/Reveal";

const CATEGORIES = [
  "Farmers",
  "Ranchers",
  "Youth Agents",
  "Service Providers",
  "Agribusiness",
  "Government",
  "Investors",
];

export function EcosystemStrip() {
  return (
    <section className="border-b border-line bg-paper py-10 lg:py-14">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <Reveal>
          <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-slate">
            Building an agricultural ecosystem
          </p>
        </Reveal>
        <Reveal delay={80}>
          <div className="mt-6 flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-line pt-6">
            {CATEGORIES.map((c) => (
              <span
                key={c}
                className="text-[15px] font-semibold tracking-[-0.01em] text-ink/40 transition-colors hover:text-ink"
              >
                {c}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
