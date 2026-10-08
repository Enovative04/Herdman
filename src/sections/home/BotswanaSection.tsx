import { Reveal } from "../../components/ui/Reveal";
import { IMAGES } from "../../content/images";

export function BotswanaSection() {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <img
        src={IMAGES.botswanaLandscape}
        alt="Cattle standing in the open grassland of rural Botswana"
        className="h-[480px] w-full object-cover sm:h-[560px] lg:h-[640px]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />

      <div className="absolute inset-0 flex items-end">
        <div className="mx-auto w-full max-w-[1440px] px-6 pb-16 lg:px-10 lg:pb-20">
          <Reveal>
            <h2 className="max-w-2xl text-[32px] font-bold leading-[1.1] tracking-[-0.025em] text-paper sm:text-[46px]">
              Built in Botswana. Built for African agriculture.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-6 max-w-lg text-[15.5px] leading-relaxed text-paper/80">
              Agriculture is different from one place to another. Our technology is being built
              with the realities of Botswana and African agriculture in mind.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
