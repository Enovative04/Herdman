import { ArrowUpRight } from "lucide-react";
import { Reveal } from "../../components/ui/Reveal";
import { IMAGES } from "../../content/images";

const AREAS = [
  {
    n: "01",
    title: "Precision Farming",
    copy: "Use data analytics and smart mechanization to make informed decisions and optimize farm resources.",
    image: IMAGES.recordsFarmer,
  },
  {
    n: "02",
    title: "Livestock Management",
    copy: "Combine modern livestock management systems with skilled, tech-enabled livestock care.",
    image: IMAGES.servicesVet,
  },
  {
    n: "03",
    title: "Agricultural Consultancy",
    copy: "Support farmers, ranchers, investors and government stakeholders with practical agricultural expertise.",
    image: IMAGES.decisionsHerder,
  },
  {
    n: "04",
    title: "Training Programs",
    copy: "Equip professional herdsmen and agricultural workers with modern skills and career opportunities.",
    image: IMAGES.youthAgent,
  },
];

export function CoreAreas() {
  return (
    <section className="border-b border-line bg-paper py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <Reveal>
          <h2 className="max-w-2xl text-[32px] font-bold leading-[1.1] tracking-[-0.025em] text-ink sm:text-[42px]">
            Technology and expertise for a stronger agricultural value chain.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {AREAS.map((area, i) => (
            <Reveal key={area.n} delay={i * 100}>
              <article className="group">
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={area.image}
                    alt={area.title}
                    className="h-[280px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="mt-6 flex items-start justify-between border-t border-line pt-5">
                  <div>
                    <p className="text-[12px] font-semibold text-lime-deep">{area.n}</p>
                    <h3 className="mt-2 text-[20px] font-bold tracking-[-0.01em] text-ink">{area.title}</h3>
                    <p className="mt-3 max-w-xs text-[14.5px] leading-relaxed text-slate">{area.copy}</p>
                  </div>
                  <ArrowUpRight
                    size={20}
                    className="mt-1 shrink-0 text-ink transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
