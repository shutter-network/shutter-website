import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { Hero } from "../components/hero";
import { About } from "../components/about";
import { SGC } from "../components/shutterized_gnosis_chain";
import { Solutions } from "../components/solutions";
import { Trading } from "../components/shielded-trading";
import { Voting } from "../components/shielded-voting";
import { Gaming } from "../components/shielded-gaming";
import { DAO } from "../components/dao";
import { DAO0x36 } from "../components/dao0x36";
import { Claim } from "../components/claim";
import { ContactUs } from "../components/contact-us";
import { WhatIsMEV } from "../components/what-is-mev";
import { HowItWorks } from "../components/how-it-works";
import { Partners } from "../components/partners";
import { FollowTwitter } from "../components/follow-twitter";
import { StayInTouch } from "../components/stay-in-touch";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={["shutter", "network", "shutter network", "shutter ethereum", "mev", "ethereum", "dkg", "front-running", "preventing front-running", "blockchain", "crypto", "mev l2", "mev layer2", "mev dkg", "mev threshold encryption", "fair ordering threshold encryption", "threshold encryption ethereum", "threshold cryptography-based distributed key generation", "distributed key generation protocol", "maximal extractable value", "miner extractable value", "arbitrage attack", "sandwich attack", "time-bandit attack", "ethereum dark forest"]}
        title="Shutter Network - Preventing malicious MEV on Ethereum"
      />
      <Hero />
      <About />
      <SGC />
      <ContactUs />
      <WhatIsMEV />
      <HowItWorks />
      <Solutions />
      <Trading />
      <Voting />
      <Gaming />
      <DAO />
      <DAO0x36 />
      <Claim />
      <Partners />
      <FollowTwitter />
      <StayInTouch />
    </Layout>
  );
}

export default IndexPage;
