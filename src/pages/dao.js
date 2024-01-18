import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { Hero } from "../components/hero";
import { DAOPaged } from "../components/dao-paged";
import { ClaimPaged } from "../components/claim-paged";
import { ProtoDAO } from "../components/protodao";
import { FollowTwitter } from "../components/follow-twitter";
import { StayInTouch } from "../components/stay-in-touch";

function DAOPage() {
  return (
    <Layout>
      <SEO
        keywords={["shutter", "network", "shutter network", "shutter ethereum", "mev", "ethereum", "dkg", "front-running", "preventing front-running", "blockchain", "crypto", "mev l2", "mev layer2", "mev dkg", "mev threshold encryption", "fair ordering threshold encryption", "threshold encryption ethereum", "threshold cryptography-based distributed key generation", "distributed key generation protocol", "maximal extractable value", "miner extractable value", "arbitrage attack", "sandwich attack", "time-bandit attack", "ethereum dark forest"]}
        title="Shutter DAO"
      />
      <Hero />
      <DAOPaged />
      <ClaimPaged />
      <ProtoDAO />
      <FollowTwitter />
      <StayInTouch />
    </Layout>
  );
}

export default DAOPage;
