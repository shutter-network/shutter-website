import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function ImprintPage() {
  return (
    <Layout className="bg-shutter-black">
      <SEO
        keywords={["shutter", "network", "mev", "ethereum", "dkg", "imprint"]}
        title="Imprint"
      />
      <div className="bg-shutter-black text-white">
        <section className="container mx-auto mb-20">
          <h1 className="text-4xl mb-8">Imprint</h1>
          <h2 className="text-2xl font-bold">
            Imprint (information according to § 5 TMG):
          </h2>
          <p className="mb-4">
            Brainbot Technologies AG
            <br />
            represented by the board members Heiko Hees and Heiko Franßen
            <br />
            Taunusstrasse 61
            <br />
            55120 Mainz
            <br />
            Germany
          </p>
          <p className="mb-4">
            Phone: +49 (0) 6131 2116391 <br />
            Fax: +49 (0) 6131 2116392 <br />
            Email:{" "}
            <a
              href="mailto:contact@brainbot.com"
              target="_blank"
              rel="noreferrer"
            >
              contact@brainbot.com
            </a>
          </p>
        </section>
      </div>
    </Layout>
  );
}

export default ImprintPage;
