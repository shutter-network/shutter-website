import React from "react";

import { Button } from "./button";

export function WhatIsMEV() {
  return (
    <section className="bg-shutter-new">
      <div className="mx-auto md:container px-8">
        <h1 className="text-3xl md:text-4xl uppercase text-white mb-14">
          What Is MEV?
        </h1>
        <p className="text-3xl md:text-4xl leading-tight text-white">
          Maximal Extractable Value or MEV is the revenue the block producer
          (e.g. validator, miner, sequencer) can extract via front running,
          injecting, reordering or censoring transactions. The MEV extracted in
          2020 alone was worth more than $314M — and that is only a lower bound.
        </p>
        <Button
          label="Learn more about MEV"
          href="https://www.paradigm.xyz/2020/08/ethereum-is-a-dark-forest"
          buttonType="white"
          className="mt-20 max-w-xl md:ml-4 text-center hover:text-shutter-grey"
        />
      </div>
    </section>
  );
}
