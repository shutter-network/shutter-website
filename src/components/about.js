import React from "react";

import { Button } from "./button";

export function About() {
  return (
    <section className="text-shutter-black md:py-52 py-10 px-4 md:px-6">
      <div className="md:container mx-auto px-8">
        <p className="text-3xl md:text-4xl leading-tight">
          Shutter Network is an open-source project that aims to prevent
          front running on Ethereum by using a threshold cryptography-based
          distributed key generation (DKG) protocol.
        </p>
        <div className="flex flex-col md:flex-row justify-between mt-6 py-12">
          <Button
            label="Learn More"
            href="https://blog.shutter.network/introducing-shutter-network-combating-frontrunning-and-malicious-mev-using-threshold-cryptography/"
            buttonType="black"
            className="mb-4 md:mb-0 md:mr-4 text-center"
          />
          <Button
            label="Shutter on GitHub"
            href="https://github.com/brainbot-com/shutter"
            buttonType="outlined"
            className="md:ml-4 text-center"
          />
        </div>
      </div>
    </section>
  );
}
