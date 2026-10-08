import { ArrowUpRight } from "lucide-react";
import { Reveal } from "../../components/ui/Reveal";
import { Eyebrow } from "../../components/ui/Typography";

const ARTICLES = [
  {
    tag: "Record Keeping",
    title: "Why livestock records matter more than you think",
    copy: "A practical look at what good farm records make possible.",
  },
  {
    tag: "BoviTrack",
    title: "Getting started with digital livestock records",
    copy: "A simple guide to setting up your first farm records.",
  },
  {
    tag: "Ecosystem",
    title: "Working with agricultural service providers",
    copy: "What to look for when choosing services for your farm.",
  },
];

export function Resources() {
  return (
    <section id="resources" className="border-b border-line bg-paper py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Reveal>
              <Eyebrow>Resources</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-5 max-w-xl text-[32px] font-bold leading-[1.1] tracking-[-0.025em] text-ink sm:text-[40px]">
                Practical reading for farmers and agribusiness.
              </h2>
            </Reveal>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 border-t border-line pt-10 sm:grid-cols-3">
          {ARTICLES.map((a, i) => (
            <Reveal key={a.title} delay={i * 90}>
              <a href="#" className="group block">
                <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-lime-deep">{a.tag}</p>
                <div className="mt-3 flex items-start justify-between gap-3">
                  <h3 className="text-[19px] font-bold leading-snug tracking-[-0.01em] text-ink">{a.title}</h3>
                  <ArrowUpRight
                    size={18}
                    className="mt-1 shrink-0 text-ink transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>
                <p className="mt-3 text-[14px] leading-relaxed text-slate">{a.copy}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
