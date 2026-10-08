import { Reveal } from "../../components/ui/Reveal";
import { Button } from "../../components/ui/Button";
import { BRAND } from "../../content/brand";

export function FinalCta() {
  return (
    <section className="bg-paper py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="rounded-2xl bg-ink px-6 py-16 text-center sm:px-16 lg:py-24">
          <Reveal>
            <h2 className="mx-auto max-w-3xl text-[34px] font-bold leading-[1.1] tracking-[-0.025em] text-paper sm:text-[52px]">
              Let&apos;s build better agriculture.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mx-auto mt-6 max-w-xl text-[15.5px] leading-relaxed text-paper/70">
              Whether you&apos;re a farmer, agricultural business, service provider or organisation
              working to strengthen agriculture, there is a place for you in the {BRAND.name}{" "}
              ecosystem.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button href={BRAND.cta.getStarted} variant="primary">
                Get Started
              </Button>
              <Button to="/bovitrack" variant="secondary" className="border-paper/40 text-paper hover:bg-paper hover:text-ink">
                Explore BoviTrack
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
