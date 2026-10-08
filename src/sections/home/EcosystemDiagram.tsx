import { Reveal } from "../../components/ui/Reveal";
import { Eyebrow } from "../../components/ui/Typography";
import { BRAND } from "../../content/brand";

const NODES = [
  "Farm Management",
  "Feed",
  "Veterinary",
  "Insurance",
  "Finance",
  "Markets",
  "Technology",
  "Agricultural Events",
  "Advisory Services",
  "Equipment",
];

export function EcosystemDiagram() {
  return (
    <section id="ecosystem" className="border-y border-line bg-paper py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow>Ecosystem</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-5 text-[32px] font-bold leading-[1.12] tracking-[-0.025em] text-ink sm:text-[40px]">
                Agriculture works better when the ecosystem works together.
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <div className="mt-6 space-y-4 text-[15.5px] leading-relaxed text-slate">
                <p>
                  Farmers do not operate alone. They rely on feed suppliers, veterinary services,
                  farm managers, insurance providers, agricultural experts, markets and other
                  service providers.
                </p>
                <p>
                  {BRAND.name} is building an ecosystem that connects these needs and makes it
                  easier for agricultural stakeholders to find, access and deliver useful services.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={120}>
              <div className="mb-6 flex flex-wrap gap-2.5 lg:hidden">
                {NODES.map((node) => (
                  <span
                    key={node}
                    className="rounded-full border border-line bg-paper px-3.5 py-1.5 text-[12px] font-semibold text-ink"
                  >
                    {node}
                  </span>
                ))}
              </div>
              <div className="relative mx-auto hidden aspect-square max-w-[560px] items-center justify-center lg:flex">
                <div className="absolute h-full w-full rounded-full border border-line" />
                <div className="absolute h-[72%] w-[72%] rounded-full border border-line" />

                <div className="relative z-10 flex h-28 w-28 items-center justify-center rounded-full bg-ink text-center sm:h-32 sm:w-32">
                  <span className="text-[13px] font-bold tracking-[0.02em] text-lime">FARMER</span>
                </div>

                {NODES.map((node, i) => {
                  const angle = (i / NODES.length) * 2 * Math.PI - Math.PI / 2;
                  const radius = 46; // percent
                  const x = 50 + radius * Math.cos(angle);
                  const y = 50 + radius * Math.sin(angle);
                  return (
                    <span
                      key={node}
                      style={{ left: `${x}%`, top: `${y}%` }}
                      className="absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border border-line bg-paper px-3 py-1.5 text-[11px] font-semibold text-ink shadow-[0_2px_10px_rgba(17,17,17,0.04)] sm:px-3.5 sm:text-[12px]"
                    >
                      {node}
                    </span>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
