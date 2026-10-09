import { Reveal } from "../../components/ui/Reveal";
import { Eyebrow } from "../../components/ui/Typography";
import { IMAGES } from "../../content/images";

export function About() {
  return (
    <section id="about" className="border-b border-line bg-paper py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow>Who we are</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-5 text-[34px] font-bold leading-[1.08] tracking-[-0.025em] text-ink sm:text-[44px] lg:text-[48px]">
                Bridging traditional agriculture and modern technology.
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <div className="mt-7 space-y-5 text-[15.5px] leading-relaxed text-slate">
                <p>
                  Established in 2024, Herdman and Hire is a Botswana-based agritech company
                  committed to integrating technology into agriculture.
                </p>
                <p>
                  We empower farmers, ranchers, investors and government stakeholders with
                  innovative solutions that strengthen productivity, sustainability and food
                  security. By bringing data analytics and smart mechanization into the agricultural
                  value chain, we work to address climate change, food insecurity and the need to
                  make better use of resources.
                </p>
                <p className="italic text-ink/80">
                  We believe the future of agriculture lies in the seamless integration of
                  technology and tradition—cultivating a smarter, more sustainable agricultural
                  landscape.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={100}>
              <div className="h-[340px] overflow-hidden rounded-2xl sm:h-[440px]">
                <img
                  src={IMAGES.aboutFarmer}
                  alt="Two herdsmen reviewing cattle information on a tablet beside their herd"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 border-t border-line pt-10 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          <Reveal>
            <div>
              <Eyebrow>Our mission</Eyebrow>
              <p className="mt-4 text-[14.5px] leading-relaxed text-slate">
                Revolutionize livestock management by training professional herdsmen, integrating
                modern farming technology and providing farmers with skilled, tech-enabled
                livestock caretakers.
              </p>
            </div>
          </Reveal>
          <Reveal delay={60}>
            <div>
              <Eyebrow>Our vision</Eyebrow>
              <p className="mt-4 text-[14.5px] leading-relaxed text-slate">
                Be the leading provider of smart livestock solutions, bridging traditional herding
                expertise with innovation for sustainable, efficient farm operations across
                Botswana and beyond.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div>
              <Eyebrow>Our values</Eyebrow>
              <ul className="mt-4 space-y-3 text-[14.5px] leading-relaxed text-slate">
                <li><strong className="text-ink">Innovation:</strong> Embracing new technology and development.</li>
                <li><strong className="text-ink">Empowerment:</strong> Providing herdsmen with education, skills and career opportunities.</li>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={180}>
            <div>
              <Eyebrow>Our values</Eyebrow>
              <ul className="mt-4 space-y-3 text-[14.5px] leading-relaxed text-slate">
                <li><strong className="text-ink">Sustainability:</strong> Promoting ethical, eco-friendly farming practices for long-term success.</li>
                <li><strong className="text-ink">Integrity:</strong> Ensuring trust, transparency and professionalism in every business dealing.</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
