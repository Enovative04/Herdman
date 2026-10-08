import { Hero } from "../sections/home/Hero";
import { EcosystemStrip } from "../sections/home/EcosystemStrip";
import { About } from "../sections/home/About";
import { CoreAreas } from "../sections/home/CoreAreas";
import { BovitrackFeature } from "../sections/home/BovitrackFeature";
import { WhyItMatters } from "../sections/home/WhyItMatters";
import { EcosystemDiagram } from "../sections/home/EcosystemDiagram";
import { YouthAgents } from "../sections/home/YouthAgents";
import { ServiceProviders } from "../sections/home/ServiceProviders";
import { BotswanaSection } from "../sections/home/BotswanaSection";
import { Resources } from "../sections/home/Resources";
import { FinalCta } from "../sections/home/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <EcosystemStrip />
      <About />
      <CoreAreas />
      <BovitrackFeature />
      <WhyItMatters />
      <EcosystemDiagram />
      <YouthAgents />
      <ServiceProviders />
      <BotswanaSection />
      <Resources />
      <FinalCta />
    </>
  );
}
