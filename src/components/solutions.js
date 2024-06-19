import React from "react";

import { Button } from "./button";

import { Links } from "../constants/links";

export function Solutions() {
  return (
    <section className="md:py-24 py-8 bg-shutter-grey-darkest">
      <div className="mx-auto md:container px-8">
        <div className="">
          <h1 className="text-5xl md:text-7xl leading-tight text-white">
            Solutions based on Shutter
          </h1>
          <p className="text-xl py-4 text-white">
          Shutter utilizes a distributed key generation (DKG) protocol based on threshold cryptography to safeguard chains from threats.
          </p>
        </div>
      </div>
    </section>
  );
}
