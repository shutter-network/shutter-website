import React from "react";

import { Button } from "./button";


export function SGC() {
  return (
    <section className="bg-shutter-grey-darkest text-white md:py-24 py-10 px-4 md:px-6">
      <div className="md:container mx-auto px-8">
        <h1 className="text-3xl md:text-6xl leading-tight text-shutter-green">
          Shutterized Gnosis Chain
        </h1>
        <p className="text-xl md:text-2xl py-4 text-shutter-grey-lightest">
          <b>The <a href="https://www.gnosis.io/" target="_blank" className="underline hover:text-shutter-green">Gnosis</a>, <a href="https://www.nethermind.io/" target="_blank" className="underline hover:text-shutter-green">Nethermind</a>, and Shutter teams are thrilled to announce that encrypted transactions are live on the Gnosis Chain</b>, marking the first mainnet implementation of Shutter's threshold encryption for transactions.
        </p>
        <p className="text-xl md:text-2xl mt-4 text-shutter-grey-lighter">
          It's the second major Shutter use case to go live after <a href="https://blog.shutter.network/shutter-brings-shielded-voting-to-snapshot/" target="_blank" className="underline hover:text-shutter-green">Shielded Voting for Snapshot</a>. This beta launch brings an encrypted mempool to the Gnosis Chain, protecting users from malicious Maximal Extractable Value (MEV) attacks and enhancing the security and neutrality of blockchain transactions.
        </p>
        <div className="flex flex-col md:flex-row justify-between mt-2 py-12">
          <Button
            label="Learn More"
            href="https://blog.shutter.network/shutterized-gnosis-chain-is-now-live/"
            buttonType="black"
            className="mb-4 md:mb-0 md:mr-4 text-center hover:text-shutter-green"
          />
        </div>
      </div>
    </section>
  );
}
