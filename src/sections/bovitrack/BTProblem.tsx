import { ArrowRight } from "lucide-react";
import { Reveal } from "../../components/ui/Reveal";

export function BTProblem() {
  return (
    <section className="border-b border-line bg-paper py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <Reveal>
          <h2 className="max-w-2xl text-[32px] font-bold leading-[1.12] tracking-[-0.025em] text-ink sm:text-[44px]">
            Farming generates information. <br className="hidden sm:block" />
            The problem is keeping it.
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <div className="mt-7 max-w-xl space-y-4 text-[15.5px] leading-relaxed text-slate">
            <p>
              Livestock records are often spread across notebooks, papers, WhatsApp messages,
              memory and disconnected files.
            </p>
            <p>
              That makes it harder to know exactly what you own, track changes over time, prove an
              animal&apos;s history or make confident decisions.
            </p>
          </div>
        </Reveal>

        <Reveal delay={180}>
          <div className="mt-16 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:gap-6">
            <div className="flex-1 rounded-2xl border border-line bg-paper-dim px-7 py-8">
              <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-slate">Before</p>
              <p className="mt-3 text-[20px] font-bold tracking-[-0.01em] text-ink">Scattered Records</p>
              <p className="mt-2 text-[13.5px] text-slate">Notebooks · Memory · WhatsApp · Loose Paper</p>
            </div>

            <ArrowRight size={22} className="mx-auto shrink-0 text-ink/40 sm:mx-0 sm:rotate-0 rotate-90" />

            <div className="flex-1 rounded-2xl bg-ink px-7 py-8 text-paper">
              <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-lime">Platform</p>
              <p className="mt-3 text-[20px] font-bold tracking-[-0.01em]">BoviTrack</p>
              <p className="mt-2 text-[13.5px] text-paper/60">One place for your livestock records</p>
            </div>

            <ArrowRight size={22} className="mx-auto shrink-0 text-ink/40 sm:mx-0 sm:rotate-0 rotate-90" />

            <div className="flex-1 rounded-2xl border border-line bg-lime px-7 py-8">
              <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-ink/60">After</p>
              <p className="mt-3 text-[20px] font-bold tracking-[-0.01em] text-ink">
                Organised Farm Information
              </p>
              <p className="mt-2 text-[13.5px] text-ink/70">Structured · Searchable · Reliable</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
