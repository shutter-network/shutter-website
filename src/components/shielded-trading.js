import React from "react";

import { Button } from "./button";

import { Links } from "../constants/links";

export function Trading() {
  return (
    <section className="md:py-22 py-8 bg-shutter-grey-darker">
      <div className="mx-auto md:container px-8">
        <div className="">
          <h1 className="text-4xl md:text-6xl leading-tight text-white">
            <span className="text-shutter-green">Shielded</span> Trading
          </h1>
          <p className="text-xl py-4 text-white">
          The malicious form of Maximal Extractable Value (MEV) refers to practices such as front running and sandwich attacks, which enable bad actors to profit at the expense of crypto traders by placing transactions before and/or after a trader's transaction. Censorship can also interfere with crypto traders' transactions. Shielded Trading aims to tackle malicious MEV and censorship by encrypting traders' transactions as they are being sequenced for inclusion in a block.
          </p>
        </div>
      </div>
    </section>
  );
}
