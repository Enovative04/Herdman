import { Reveal } from "../../components/ui/Reveal";
import { Eyebrow } from "../../components/ui/Typography";
import { PhoneMockup, AnimalProfileScreen } from "../../components/PhoneMockup";

const FIELDS = [
  "Animal ID",
  "Name / Tag",
  "Species",
  "Breed",
  "Sex",
  "Date of Birth",
  "Parentage (where applicable)",
  "Health Records",
  "Growth Information",
  "Ownership",
  "Notes",
  "Status",
];

export function BTAnimalProfile() {
  return (
    <section className="border-b border-line bg-paper py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12">
          <div className="order-2 lg:order-1 lg:col-span-5">
            <Reveal>
              <PhoneMockup>
                <AnimalProfileScreen />
              </PhoneMockup>
            </Reveal>
          </div>

          <div className="order-1 lg:order-2 lg:col-span-6 lg:col-start-7">
            <Reveal>
              <Eyebrow>Individual Livestock Records</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-5 text-[32px] font-bold leading-[1.1] tracking-[-0.025em] text-ink sm:text-[42px]">
                Every animal has a history.
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-6 max-w-lg text-[15.5px] leading-relaxed text-slate">
                BoviTrack allows farmers to maintain structured information about individual
                livestock rather than relying entirely on memory or scattered paperwork.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-0 border-t border-line sm:grid-cols-2">
                {FIELDS.map((field) => (
                  <div key={field} className="border-b border-line py-3.5 text-[14px] font-medium text-ink/80">
                    {field}
                  </div>
                ))}
              </div>
              <p className="mt-4 text-[12.5px] text-slate-light">
                Example fields shown for illustration — demonstration data only.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
