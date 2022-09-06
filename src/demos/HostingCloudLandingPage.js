import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithPrimaryBackground.js";
import Features from "components/features/ThreeColWithSideImage.js";
import MainFeature from "components/features/VerticalWithAlternateImageAndText.js";
import FAQ from "components/faqs/SimpleWithSideImage.js";


export default () => {
  return (
    <AnimationRevealPage>
      <Hero />
      <Features />
      <MainFeature/>
      <FAQ />
    </AnimationRevealPage>
  );
}
