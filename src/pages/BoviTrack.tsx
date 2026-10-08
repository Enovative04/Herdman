import { BTHero } from "../sections/bovitrack/BTHero";
import { BTProblem } from "../sections/bovitrack/BTProblem";
import { BTBenefits } from "../sections/bovitrack/BTBenefits";
import { BTHowItWorks } from "../sections/bovitrack/BTHowItWorks";
import { BTAnimalProfile } from "../sections/bovitrack/BTAnimalProfile";
import { BTFarmOverview } from "../sections/bovitrack/BTFarmOverview";
import { BTDocumentation } from "../sections/bovitrack/BTDocumentation";
import { BTValue } from "../sections/bovitrack/BTValue";
import { BTUsers } from "../sections/bovitrack/BTUsers";
import { BTFinalCta } from "../sections/bovitrack/BTFinalCta";

export default function BoviTrack() {
  return (
    <>
      <BTHero />
      <BTProblem />
      <BTBenefits />
      <BTHowItWorks />
      <BTAnimalProfile />
      <BTFarmOverview />
      <BTDocumentation />
      <BTValue />
      <BTUsers />
      <BTFinalCta />
    </>
  );
}
