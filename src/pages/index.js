import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { Hero } from "../components/hero";
import { About } from "../components/about";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />
      <Hero />
      <About />
    </Layout>
  );
}

export default IndexPage;
