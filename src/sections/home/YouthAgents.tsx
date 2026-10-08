import { Reveal } from "../../components/ui/Reveal";
import { Eyebrow } from "../../components/ui/Typography";
import { IMAGES } from "../../content/images";

export function YouthAgents() {
  return (
    <section className="border-b border-line bg-paper py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center lg:gap-8">
          <div className="relative order-2 lg:order-1 lg:col-span-5">
            <span
              aria-hidden
              className="bg-display-word pointer-events-none absolute -left-4 -top-10 select-none text-[120px] leading-none sm:text-[160px]"
            >
              YOUTH
            </span>
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={IMAGES.youthAgent}
                alt="Young agricultural agent engaging with a local farmer"
                className="h-[420px] w-full object-cover sm:h-[520px]"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2 lg:col-span-6 lg:col-start-7">
            <Reveal>
              <Eyebrow>Youth Agents</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-5 text-[32px] font-bold leading-[1.1] tracking-[-0.025em] text-ink sm:text-[42px]">
                Creating opportunity around agriculture.
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <div className="mt-6 max-w-lg space-y-4 text-[15.5px] leading-relaxed text-slate">
                <p>
                  Herdman and Hire creates opportunities for agricultural workers and helps bring
                  technology and services closer to farmers in villages and communities.
                </p>
                <p>
                  Instead of technology stopping at the screen, we want it to reach the people who
                  actually farm.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
