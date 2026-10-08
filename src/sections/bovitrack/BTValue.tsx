import { Reveal } from "../../components/ui/Reveal";

const POINTS = [
  { n: "01", title: "Know the history", copy: "Understand an animal's background, growth and records over time." },
  { n: "02", title: "Demonstrate management", copy: "Show how livestock has been raised, tracked and maintained." },
  { n: "03", title: "Support informed transactions", copy: "Give buyers, lenders and partners more information to work with." },
];

export function BTValue() {
  return (
    <section className="border-b border-line bg-paper py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <Reveal>
          <h2 className="max-w-2xl text-[32px] font-bold leading-[1.1] tracking-[-0.025em] text-ink sm:text-[42px]">
            Records can protect value.
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="mt-6 max-w-xl text-[15.5px] leading-relaxed text-slate">
            When livestock has a documented history, farmers have more information to work with
            when evaluating, managing or selling animals. Better documentation can strengthen a
            farmer&apos;s ability to demonstrate value — it does not guarantee a particular price.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-10 border-t border-line pt-10 sm:grid-cols-3">
          {POINTS.map((p, i) => (
            <Reveal key={p.n} delay={i * 90}>
              <p className="text-[12px] font-semibold text-lime-deep">{p.n}</p>
              <h3 className="mt-3 text-[19px] font-bold tracking-[-0.01em] text-ink">{p.title}</h3>
              <p className="mt-2.5 text-[14.5px] leading-relaxed text-slate">{p.copy}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
