import { Reveal } from "../../components/ui/Reveal";
import { Button } from "../../components/ui/Button";
import { BRAND } from "../../content/brand";

export function BTFinalCta() {
  return (
    <section className="bg-paper py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="rounded-2xl bg-lime px-6 py-16 text-center sm:px-16 lg:py-24">
          <Reveal>
            <h2 className="mx-auto max-w-3xl text-[34px] font-bold leading-[1.1] tracking-[-0.025em] text-ink sm:text-[52px]">
              Your livestock has a story. Keep the record.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mx-auto mt-6 max-w-lg text-[15.5px] leading-relaxed text-ink/70">
              Start building better livestock records with {BRAND.product}.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button href={BRAND.cta.getStarted} variant="secondary" className="border-ink bg-ink text-paper hover:bg-paper hover:text-ink">
                Get Started
              </Button>
              <Button to="/" variant="secondary" className="border-ink/40">
                Back to {BRAND.name}
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
