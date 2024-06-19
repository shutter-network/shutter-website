import React from "react";
import conduitLogo from "../images/partners/conduit.svg";
import gelatoLogo from "../images/partners/gelato.svg";
import zeeveLogo from "../images/partners/zeeve.svg";
import gatewayLogo from "../images/partners/gateway.svg";
import altlayerLogo from "../images/partners/altlayer.png";
import calderaLogo from "../images/partners/caldera.png";
import gnosischainLogo from "../images/partners/gnosischain.svg";
import snapshotLogo from "../images/partners/snapshot.png";
import klerosLogo from "../images/partners/kleros.svg";
import nethermindLogo from "../images/partners/nethermind.svg";
import hoprLogo from "../images/partners/hopr.svg";

export function Partners() {
  return (
    <section className="text-white md:py-24 py-10 px-4 md:px-6 bg-shutter-new">
      <div className="md:container mx-auto px-8">
        <p className="text-6xl md:text-6xl leading-tight flex flex-col md:flex-col justify-between">
          Partners
        </p>
        <div className="flex flex-row md:flex-row">
          <h1 className="text-3xl md:text-4xl uppercase text-white mt-4 sm:mt-4 md:mt-6 xl:mt-8 xl:ml-16 text-shutter-green">
            Rollup as a Service
          </h1>
        </div>
        <div className="flex flex-row md:flex-row lg:mt-4 mt-4 sm:mr-2 xl:ml-16 xl:mr-96 xl:pr-64 text-lg">
          Rollups can now integrate Shutter's Shielded Trading, an encrypted mempool using threshold encryption to protect against malicious MEV and real-time censorship resistance.
        </div>
        <div className="flex flex-col md:flex-col">
          <div className="flex flex-col xl:flex-row xl:basis-1/2 xl:mt-2 xl:py-2 xl:px-8 w-full justify-between">
            <div className="flex flex-col xl:flex-col text-2xl xl:text-2xl leading-tight sm:w-1/2 my-2 xl:w-1/4 xl:h-2/5 justify-self-center xl:mx-8 p-4 partnercard m-auto">
              <a
                href="https://conduit.xyz/integrations"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  src={conduitLogo}
                  alt="Conduit"
                  className="p-2 h-32 w-64 m-auto"
                />
              </a>
            </div>
            <div className="flex flex-col xl:flex-col text-2xl xl:text-2xl leading-tight sm:w-1/2 my-2 xl:w-1/4 xl:h-2/5 justify-self-center xl:mx-8 p-4 partnercard m-auto">
              <a
                href="https://www.gelato.network/"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  src={gelatoLogo}
                  alt="Gelato"
                  className="p-2 h-32 w-64 m-auto"
                />
              </a>
            </div>
            <div className="flex flex-col xl:flex-col text-2xl xl:text-2xl leading-tight sm:w-1/2 my-2 xl:w-1/4 xl:h-2/5 justify-self-center xl:mx-8 p-4 partnercard m-auto">
              <a
                href="https://www.zeeve.io/integrations/"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  src={zeeveLogo}
                  alt="Zeeve"
                  className="p-2 h-32 w-28 m-auto"
                />
              </a>
            </div>
          </div>
          <div className="flex flex-col xl:flex-row xl:basis-1/2 xl:mt-2 xl:py-2 xl:px-8 w-full justify-between">
            <div className="flex flex-col xl:flex-col text-2xl xl:text-2xl leading-tight sm:w-1/2 my-2 xl:w-1/4 xl:h-2/5 justify-self-center xl:mx-8 p-4 partnercard m-auto">
              <a href="https://gateway.fm/" rel="noreferrer" target="_blank">
                <img
                  src={gatewayLogo}
                  alt="Gateway"
                  className="p-0 h-32 w-64 m-auto"
                />
              </a>
            </div>
            <div className="flex flex-col xl:flex-col text-2xl xl:text-2xl leading-tight sm:w-1/2 my-2 xl:w-1/4 xl:h-2/5 justify-self-center xl:mx-8 p-4 partnercard m-auto">
              <a
                href="https://altlayer.io/raas"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  src={altlayerLogo}
                  alt="AltLayer"
                  className="p-2 h-16 w-64 mt-8 mb-8 m-auto"
                />
              </a>
            </div>
            <div className="flex flex-col xl:flex-col text-2xl xl:text-2xl leading-tight sm:w-1/2 my-2 xl:w-1/4 xl:h-2/5 justify-self-center xl:mx-8 p-4 partnercard m-auto">
              <a
                href="https://caldera.xyz/integrations/"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  src={calderaLogo}
                  alt="Caldera"
                  className="p-2 h-14 w-72 mt-8 mb-8 m-auto"
                />
              </a>
            </div>
          </div>
          <div className="flex flex-row md:flex-row">
            <h1 className="text-3xl md:text-4xl uppercase text-white mt-4 sm:mt-4 md:mt-6 xl:mt-8 xl:ml-16 text-shutter-green">
              Chains
            </h1>
          </div>
          <div className="flex flex-row md:flex-row lg:mt-4 mt-4 sm:mr-2 xl:ml-16 xl:mr-96 xl:pr-64 text-lg">
            Accessibility, base layer neutrality, and censorship resistance are the core components of public blockchains' value propositions, such as Gnosis Chain and Ethereum. We believe an encrypted mempool is essential for safeguarding these fundamental properties and represents a significant milestone in achieving this goal.
          </div>
          <div className="flex flex-col md:flex-col">
            <div className="flex flex-col xl:flex-row xl:basis-1/2 xl:mt-2 xl:py-2 xl:px-8 w-full justify-between">
              <div className="flex flex-col xl:flex-col text-2xl xl:text-2xl leading-tight sm:w-1/2 my-2 xl:w-1/4 xl:h-2/5 justify-self-center xl:mx-8 p-4 partnercard m-auto">
                <p className="h-44 p-2 text-base xl:text-lg">
                Gnosis Chain is a community-owned network operated by a diverse set of 200k+ validators around the world.
                </p>
                <a
                  href="https://www.gnosis.io/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <img
                    src={gnosischainLogo}
                    alt="Gnosis Chain"
                    className="p-2 h-20 w-40 mt-6 mb-6 m-auto"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-row md:flex-row">
            <h1 className="text-3xl md:text-4xl uppercase text-white mt-4 sm:mt-4 md:mt-6 xl:mt-8 xl:ml-16 text-shutter-green">
              Voting
            </h1>
          </div>
          <div className="flex flex-row md:flex-row lg:mt-4 mt-4 sm:mr-2 xl:ml-16 xl:mr-96 xl:pr-64 text-lg">
            Shielded Voting offers governance platforms a way to implement partially private voting for users using threshold encryption. It aims to address issues such as misbehavior, voter apathy, and flaws in voting incentive systems.
          </div>
          <div className="flex flex-col md:flex-col">
            <div className="flex flex-col xl:flex-row xl:basis-1/2 xl:mt-2 xl:py-2 xl:px-8 w-full justify-between">
              <div className="flex flex-col xl:flex-col text-2xl xl:text-2xl leading-tight sm:w-1/2 my-2 xl:w-1/4 xl:h-2/5 justify-self-center xl:mx-8 p-4 partnercard m-auto">
                <p className="h-44 p-2 text-base xl:text-lg">
                  Snapshot is a voting platform that allows DAOs, DeFi
                  protocols, or NFT communities to vote easily and without gas
                  fees.
                </p>
                <a
                  href="https://snapshot.org/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <img
                    src={snapshotLogo}
                    alt="Snapshot"
                    className="p-4 h-32 w-32 m-auto"
                  />
                </a>
              </div>
              <div className="flex flex-col xl:flex-col text-2xl xl:text-2xl leading-tight sm:w-1/2 my-2 xl:w-1/4 xl:h-2/5 justify-self-center xl:mx-8 p-4 partnercard m-auto hidden">
                <p className="h-44 p-2 text-base xl:text-lg">
                  Kleros is a decentralized arbitration service for the disputes
                  of the new economy.
                </p>
                <a href="https://kleros.io/" rel="noreferrer" target="_blank">
                  <img
                    src={klerosLogo}
                    alt="Kleros"
                    className="p-2 h-32 w-64 m-auto"
                  />
                </a>
              </div>
            </div>
            <div className="flex flex-row md:flex-row">
              <h1 className="text-3xl md:text-4xl uppercase text-white mt-4 sm:mt-4 md:mt-6 xl:mt-8 xl:ml-16 text-shutter-green">
                Infrastructure
              </h1>
            </div>
            <div className="flex flex-col md:flex-col">
              <div className="flex flex-col xl:flex-row xl:basis-1/2 xl:mt-2 xl:py-2 xl:px-8 w-full justify-between">
                <div className="flex flex-col xl:flex-col text-2xl xl:text-2xl leading-tight sm:w-1/2 my-2 xl:w-1/4 xl:h-2/5 justify-self-center xl:mx-8 p-4 partnercard m-auto">
                  <p className="h-44 p-2 text-base xl:text-lg">
                    Tooling for the Ethereum & Starknet ecosystems
                  </p>
                  <a
                    href="https://www.nethermind.io/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <img
                      src={nethermindLogo}
                      alt="NetherMind"
                      className="p-2 h-32 w-64 m-auto"
                    />
                  </a>
                </div>
              </div>
              <div className="flex flex-row md:flex-row">
                <h1 className="text-3xl md:text-4xl uppercase text-white mt-4 sm:mt-4 md:mt-6 xl:mt-8 xl:ml-16 text-shutter-green">
                  Ecosystem Partners
                </h1>
              </div>
              <div className="flex flex-col md:flex-col">
                <div className="flex flex-col xl:flex-row xl:basis-1/2 xl:mt-2 xl:py-2 xl:px-8 w-full justify-between">
                  <div className="flex flex-col xl:flex-col text-2xl xl:text-2xl leading-tight sm:w-1/2 my-2 xl:w-1/4 xl:h-2/5 justify-self-center xl:mx-8 p-4 partnercard m-auto">
                    <p className="h-44 p-2 text-base xl:text-lg">
                      The HOPR protocol provides full control over privacy, data and metadata.
                    </p>
                    <a
                      href="https://hoprnet.org/"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <img
                        src={hoprLogo}
                        alt="HOPR"
                        className="p-2 h-32 w-64 m-auto"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
