import { Reveal } from "../../components/ui/Reveal";

const USERS = [
  { title: "Farmers", copy: "Keep better records and understand your livestock." },
  { title: "Ranchers", copy: "Maintain structured information across larger livestock operations." },
  { title: "Agricultural Service Providers", copy: "Work with farmers who have better organised information." },
  { title: "Organisations", copy: "Support better agricultural record keeping and farmer engagement." },
];

export function BTUsers() {
  return (
    <section className="border-b border-line bg-paper-dim py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <Reveal>
          <h2 className="max-w-2xl text-[32px] font-bold leading-[1.1] tracking-[-0.025em] text-ink sm:text-[42px]">
            Built for everyone around the farm.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-10 border-t border-ink/15 pt-10 sm:grid-cols-2 lg:grid-cols-4">
          {USERS.map((u, i) => (
            <Reveal key={u.title} delay={i * 80}>
              <h3 className="text-[18px] font-bold leading-snug tracking-[-0.01em] text-ink">{u.title}</h3>
              <p className="mt-3 text-[14.5px] leading-relaxed text-slate">{u.copy}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
