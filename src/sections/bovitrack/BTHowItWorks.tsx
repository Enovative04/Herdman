import { Reveal } from "../../components/ui/Reveal";
import { Eyebrow } from "../../components/ui/Typography";

const STEPS = [
  { n: "01", title: "Register", copy: "Create your farm and livestock records." },
  { n: "02", title: "Record", copy: "Capture important information about individual animals." },
  { n: "03", title: "Track", copy: "Keep records updated as animals grow and change." },
  { n: "04", title: "Use", copy: "Use your records to understand your farm and support better decisions." },
];

export function BTHowItWorks() {
  return (
    <section id="how-it-works" className="border-y border-line bg-paper py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <Reveal>
          <Eyebrow>How it works</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-5 max-w-2xl text-[32px] font-bold leading-[1.1] tracking-[-0.025em] text-ink sm:text-[42px]">
            Four steps to better farm records.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <Reveal key={step.n} delay={i * 90}>
              <div className="border-t border-ink pt-6">
                <p className="text-[42px] font-bold leading-none tracking-[-0.02em] text-ink/15">{step.n}</p>
                <h3 className="mt-4 text-[20px] font-bold tracking-[-0.01em] text-ink">{step.title}</h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-slate">{step.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
