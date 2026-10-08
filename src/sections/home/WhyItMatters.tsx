import { Reveal } from "../../components/ui/Reveal";
import { AccordionBand } from "../../components/AccordionBand";

const ITEMS = [
  {
    title: "Better Farm Visibility",
    copy: "Know what you have, what has changed and where your livestock stands.",
  },
  {
    title: "Stronger Records",
    copy: "Replace scattered notebooks and disconnected information with structured digital records.",
  },
  {
    title: "Better Livestock Documentation",
    copy: "Maintain a reliable history of individual animals and farm records.",
  },
  {
    title: "Greater Market Confidence",
    copy: "Better documentation can help farmers demonstrate the history, management and value of their livestock.",
  },
  {
    title: "Smarter Growth",
    copy: "Use better information as the foundation for better farm management and future decisions.",
  },
];

export function WhyItMatters() {
  return (
    <section className="bg-paper py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <Reveal>
          <h2 className="max-w-2xl text-[32px] font-bold leading-[1.1] tracking-[-0.025em] text-ink sm:text-[42px]">
            Why it matters.
          </h2>
        </Reveal>
      </div>
      <Reveal delay={100}>
        <div className="mt-12">
          <AccordionBand items={ITEMS} startOpen={1} />
        </div>
      </Reveal>
    </section>
  );
}
