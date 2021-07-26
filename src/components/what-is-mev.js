import React from "react";

import { Button } from "./button";

export function WhatIsMEV() {
  return (
    <section className="bg-shutter-black">
      <div className="mx-auto container px-4 lg:px-0">
        <h1 className="text-3xl md:text-5xl uppercase text-white mb-14">
          What Is MEV?
        </h1>
        <p className="text-3xl md:text-5xl leading-tight text-white">
          Maximally Extractable Value or MEV is the revenue the block producer
          (e.g. validator, miner, sequencer) can extract via frontrunning,
          injecting, reordering or censoring transactions. The MEV extracted in
          2020 alone was worth more than $314M — and that is only a lower bound.
        </p>
        <Button
          label="Learn more about MEV"
          href="https://research.paradigm.xyz/MEV"
          buttonType="white"
          className="mt-20 max-w-xl"
        />
      </div>
    </section>
  );
}
