import { Reveal } from "../../components/ui/Reveal";
import { Eyebrow } from "../../components/ui/Typography";

export function BTDocumentation() {
  return (
    <section className="border-b border-line bg-ink py-20 text-paper lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Reveal>
              <Eyebrow className="text-slate-light">Documentation</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-5 text-[32px] font-bold leading-[1.1] tracking-[-0.025em] sm:text-[42px]">
                Better records create better documentation.
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <div className="mt-6 max-w-lg space-y-4 text-[15.5px] leading-relaxed text-paper/70">
                <p>
                  BoviTrack can help farmers maintain structured livestock information that can
                  support documentation and certification processes.
                </p>
                <p>
                  Documentation becomes easier when reliable records already exist — rather than
                  being reconstructed from memory at the last minute.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <Reveal delay={120}>
              <div className="rounded-2xl border border-white/15 bg-paper p-7 text-ink sm:p-9">
                <div className="flex items-center justify-between border-b border-line pb-4">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-slate">
                    Livestock Record Summary
                  </p>
                  <span className="h-2 w-2 rounded-full bg-lime" />
                </div>
                <div className="mt-5 space-y-3.5">
                  {[
                    ["Animal ID", "BW-0142"],
                    ["Breed", "Tswana"],
                    ["Owner", "Dithaka Farm"],
                    ["Date Recorded", "02 Feb 2026"],
                    ["Status", "Verified Record"],
                  ].map(([k, v]) => (
                    <div key={k} className="flex items-center justify-between text-[13.5px]">
                      <span className="text-slate">{k}</span>
                      <span className="font-semibold text-ink">{v}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-[11.5px] text-slate-light">
                  Illustrative example — demonstration data only.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
