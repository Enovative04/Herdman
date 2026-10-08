import { Button } from "../../components/ui/Button";
import { Eyebrow } from "../../components/ui/Typography";
import { Reveal } from "../../components/ui/Reveal";
import { PhoneMockup, FarmOverviewScreen } from "../../components/PhoneMockup";
import { IMAGES } from "../../content/images";
import { BRAND } from "../../content/brand";

export function BTHero() {
  return (
    <section className="relative overflow-hidden border-b border-line bg-paper pt-16 lg:pt-20">
      <span
        aria-hidden
        className="bg-display-word pointer-events-none absolute -top-4 left-0 w-full text-center text-[16vw] leading-none lg:-top-8"
      >
        BOVITRACK
      </span>

      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <Reveal>
              <Eyebrow>{`A ${BRAND.name} Product`}</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-5 text-[40px] font-bold leading-[1.04] tracking-[-0.03em] text-ink sm:text-[54px] lg:text-[64px]">
                Better records. <span className="italic font-medium">Better decisions.</span>{" "}
                Better farming.
              </h1>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-7 max-w-md text-[16px] leading-relaxed text-slate">
                {BRAND.product} is a digital livestock record-keeping platform designed to help
                farmers build reliable records, track their animals and get a clearer picture of
                their farm.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Button href={BRAND.cta.getStarted} variant="primary">
                  Get Started
                </Button>
                <Button href="#how-it-works" variant="secondary">
                  See How It Works ↓
                </Button>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <Reveal delay={120}>
              <div className="relative flex items-center justify-center">
                <div className="absolute -z-10 hidden h-[460px] w-[340px] overflow-hidden rounded-2xl sm:block lg:-right-6">
                  <img
                    src={IMAGES.bovitrackHeroCompanion}
                    alt="Farmers tending cattle at a water trough"
                    className="h-full w-full object-cover opacity-90"
                  />
                </div>
                <PhoneMockup className="relative z-10">
                  <FarmOverviewScreen />
                </PhoneMockup>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 border-t border-line" />
      </div>
    </section>
  );
}
