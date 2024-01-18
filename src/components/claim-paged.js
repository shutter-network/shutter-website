import React from "react";

import { Button } from "./button";

import { Links } from "../constants/links";

export function ClaimPaged() {
  return (
    <section className="md:py-20 py-8 bg-shutter-new">
      <div className="mx-auto md:container px-8">
        <div className="">
          <h1 className="text-4xl md:text-6xl leading-tight text-white">
            Introducing the Shutter Network Genesis Allocations
          </h1>
          <p className="text-xl py-4 text-white">
          Phase 1 of a Shutter DAO focuses on laying a solid groundwork and establishing effective governance. During this initial phase, a comprehensive governance framework is created, ensuring a fair distribution of the initial token allocation and introducing non-transferable tokens.
          </p>
          <p className="text-xl py-4 text-white">
          The Genesis Allocations are smart contracts deployed on the Ethereum blockchain. An allocation contains a list of addresses as they have been deployed in  the and the amount of claimable Shutter Tokens (e.g., SHU) per address in the form of a Merkle root.
          </p>
          <Button
            label="go to claim page"
            href={Links.CLAIM}
            buttonType="white"
            className="mt-10 max-w-xl text-center hover:text-shutter-grey"
          />
        </div>
      </div>
    </section>
  );
}
