import { Reveal } from "../../components/ui/Reveal";
import { Eyebrow } from "../../components/ui/Typography";
import { Button } from "../../components/ui/Button";
import { BRAND } from "../../content/brand";

const CATEGORIES = [
  "Farm Feed",
  "Veterinary Services",
  "Farm Management",
  "Insurance",
  "Agricultural Equipment",
  "Advisory Services",
  "Agricultural Events",
  "Other Farm Services",
];

export function ServiceProviders() {
  return (
    <section id="service-provider" className="border-b border-line bg-paper py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow>Service Providers</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-5 text-[32px] font-bold leading-[1.1] tracking-[-0.025em] text-ink sm:text-[40px]">
                A better way for agricultural businesses to reach farmers.
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-6 max-w-md text-[15.5px] leading-relaxed text-slate">
                {BRAND.name} creates opportunities for agricultural service providers to become
                part of a growing ecosystem of farmers and agricultural stakeholders.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-8">
                <Button href={BRAND.cta.becomeServiceProvider} variant="secondary">
                  Become a Service Provider →
                </Button>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <div className="grid grid-cols-1 gap-x-8 gap-y-0 border-t border-line sm:grid-cols-2">
              {CATEGORIES.map((c, i) => (
                <Reveal key={c} delay={i * 50}>
                  <div className="border-b border-line py-5 text-[16px] font-semibold tracking-[-0.01em] text-ink">
                    {c}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
