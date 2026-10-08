import { Reveal } from "../../components/ui/Reveal";
import { AccordionBand } from "../../components/AccordionBand";

const ITEMS = [
  { title: "Know What You Have", copy: "Maintain a clearer record of the livestock on your farm." },
  { title: "Track Growth", copy: "Follow changes in your animals over time and maintain their history." },
  { title: "Keep Better Records", copy: "Replace fragmented records with structured digital information." },
  {
    title: "Document Your Livestock",
    copy: "Build reliable documentation around individual animals and your farm.",
  },
  {
    title: "Make Better Decisions",
    copy: "Better information gives farmers a stronger foundation for managing their operations.",
  },
  {
    title: "Build Farm Value",
    copy: "Consistent records can help demonstrate livestock history and management when selling, accessing services or evaluating farm performance.",
  },
];

export function BTBenefits() {
  return (
    <section className="bg-paper py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <Reveal>
          <h2 className="max-w-2xl text-[32px] font-bold leading-[1.1] tracking-[-0.025em] text-ink sm:text-[42px]">
            What BoviTrack gives you.
          </h2>
        </Reveal>
      </div>
      <Reveal delay={100}>
        <div className="mt-12">
          <AccordionBand items={ITEMS} startOpen={5} />
        </div>
      </Reveal>
    </section>
  );
}
