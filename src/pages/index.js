import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { Hero } from "../components/hero";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />
      <Hero />
      <section className="text-shutter-black container mx-auto py-52">
        <p className="text-5xl leading-tight">
          Shutter Network is an open-source project that aims to prevent
          frontrunning on Ethereum by using a threshold cryptography-based
          distributed key generation (DKG) protocol.
        </p>
        <div className="flex flex-row justify-between mt-6">
          <a
            className={`
            rounded-full flex-1 bg-shutter-black py-6 mr-4 text-white text-3xl uppercase
            tracking-wider flex justify-center items-center hover:cursor-pointer
          `}
          >
            Try Shutter
          </a>
          <a
            className={`
            rounded-full flex-1 border-4 border-shutter-black py-6 ml-4 text-3xl uppercase
            tracking-wider flex justify-center items-center hover:cursor-pointer
          `}
          >
            Shutter on GitHub
          </a>
        </div>
      </section>
    </Layout>
  );
}

export default IndexPage;
