import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { Hero } from "../components/hero";
import { About } from "../components/about";
import { ContactUs } from "../components/contact-us";
import { WhatIsMEV } from "../components/what-is-mev";
import { HowItWorks } from "../components/how-it-works";
import { FollowTwitter } from "../components/follow-twitter";
import { StayInTouch } from "../components/stay-in-touch";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={["shutter", "network", "mev", "ethereum", "dkg"]}
        title="Home"
      />
      <Hero />
      <About />
      <ContactUs />
      <WhatIsMEV />
      <HowItWorks />
      <FollowTwitter />
      <StayInTouch />
    </Layout>
  );
}

export default IndexPage;
