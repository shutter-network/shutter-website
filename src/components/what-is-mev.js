import React from "react";

import { Button } from "./button";

export function WhatIsMEV() {
  return (
    <section className="bg-shutter-new">
      <div className="mx-auto md:container px-8">
        <h1 className="text-4xl md:text-5xl uppercase text-shutter-orange mb-14">
          The $900 Million Problem
        </h1>
        <p className="text-2xl md:text-3xl leading-tight text-white">
          Shutter's approach is crucial in today's Web3 landscape, where hundreds of millions of dollars are stolen yearly on Ethereum through malicious Maximal Extractable Value (MEV) attacks. These attacks, including sandwich attacks, involve manipulating transactions for financial gain, ultimately harming traders and end-users.
        </p>
        <Button
          label="Learn more about MEV"
          href="https://blog.shutter.network/what-the-heck-is-miner-extractable-value-a-series-about-mev-basics/"
          buttonType="white"
          className="mt-20 max-w-xl md:ml-4 text-center hover:text-shutter-grey"
        />
      </div>
    </section>
  );
}
