import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { Hero } from "../components/hero";
import { About } from "../components/about";
import { ContactUs } from "../components/contact-us";
import { WhatIsMEV } from "../components/what-is-mev";
import { HowItWorks } from "../components/how-it-works";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />
      <Hero />
      <About />
      <ContactUs />
      <WhatIsMEV />
      <HowItWorks />
    </Layout>
  );
}

export default IndexPage;
