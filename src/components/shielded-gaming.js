import React from "react";

import { Button } from "./button";

import { Links } from "../constants/links";

export function Gaming() {
  return (
    <section className="md:py-22 py-8 bg-shutter-grey-light">
      <div className="mx-auto md:container px-8">
        <div className="">
          <h1 className="text-4xl md:text-6xl leading-tight text-white">
            <span className="text-shutter-green">Shielded</span> Gaming
          </h1>
          <p className="text-xl py-4 text-white">
          Shutter allows for new on-chain gaming possibilities and ensures fair play by preventing players from gaining information about other players' moves before it is permitted by the game rules and benefiting from that knowledge.
          </p>
        </div>
      </div>
    </section>
  );
}
