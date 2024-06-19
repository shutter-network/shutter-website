import React from "react";

import { Button } from "./button";

import { Links } from "../constants/links";

export function Voting() {
  return (
    <section className="md:py-22 py-8 bg-shutter-grey-dark">
      <div className="mx-auto md:container px-8">
        <div className="">
          <h1 className="text-4xl md:text-6xl leading-tight text-white">
            <span className="text-shutter-green">Shielded</span> Voting
          </h1>
          <p className="text-xl py-4 text-white">
          Shielded Voting prevents voting manipulation that can reduce participation and/or sway the outcome of community voting. Shutter encrypts all votes when cast and then reveals all votes after the end of the voting period. Shielded Voting is live on Snapshot and soon other voting platforms.
          </p>
        </div>
      </div>
    </section>
  );
}
