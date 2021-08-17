import React from "react";

import { graphql, useStaticQuery } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

export default function PrivacyPolicy() {
  const data = useStaticQuery(graphql`
    query PrivacyPolicy {
      markdownRemark(
        fileAbsolutePath: { glob: "**/privacy-policy/privacy-policy.md" }
      ) {
        html
      }
    }
  `);

  return (
    <Layout className="bg-shutter-black">
      <SEO
        keywords={["shutter", "network", "mev", "ethereum", "dkg", "privacy"]}
        title="Privacy Policy"
      />
      <div className="bg-shutter-black text-white">
        <section className="container mx-auto mb-20 px-4 md:px-6">
          <div
            className="privacy-policy mx-auto container flex flex-col space-y-4 py-10"
            dangerouslySetInnerHTML={{
              __html: data.markdownRemark.html,
            }}
          />
        </section>
      </div>
    </Layout>
  );
}
