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
        <section className="md:container mx-auto mb-20 px-4 md:px-6">
          <div className="privacy-policy mx-auto md:container flex flex-col space-y-4 py-10">
            <h1 className="text-4xl mb-2">Imprint</h1>
            <p className="mb-4">
              brainbot gmbh
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
            <p className="mb-4">
              <b>
                Management <br />
                <i>
                  (Geschäftsführer) <br />
                </i>
              </b>
              Heiko Franßen
            </p>
            <p className="mb-4">
              <b>
                Registered seat of the company <br />
                <i>
                  (Sitz des Unternehmens) <br />
                </i>
              </b>
              Mainz, Germany
            </p>
            <p className="mb-4">
              <b>
                District Court <br />
                <i>
                  (Registergericht) <br />
                </i>
              </b>
              Amtsgericht Mainz, HRB 52070
            </p>
            <p className="mb-4">
              <b>
                VAT number <br />
                <i>
                  (Umsatzsteuer-Identifikationsnummer) <br />
                </i>
              </b>
              DE231725642
            </p>
            <p className="mb-4">
              <b>
                Responsible according to § 18 Abs. 2 MStV <br />
                <i>
                  (Verantwortlicher gemäß § 18 Abs. 2 MStV) <br />
                </i>
              </b>
              Heiko Franßen <br />
              brainbot gmbh <br />
              Taunusstraße 61 <br />
              55120 Mainz <br />
              Germany <br />
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default ImprintPage;
