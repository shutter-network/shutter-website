import React from "react";

import { Button } from "./button";

export function About() {
  return (
    <section className="text-shutter-black md:py-36 py-10 px-4 md:px-6">
      <div className="md:container mx-auto px-8">
        <p className="text-3xl md:text-4xl leading-tight">
          Shutter is free, open-source software designed to protect the crypto community from those manipulating the blockchain for their own gain. It uses threshold encryption to ensure base layer neutrality, information symmetry, and accessibility in trading, voting, and gaming.
        </p>
        <div className="flex flex-col md:flex-row justify-between mt-6 py-12">
          <Button
            label="Learn More"
            href="https://blog.shutter.network/shutter-leveling-the-playing-field/"
            buttonType="black"
            className="mb-4 md:mb-0 md:mr-4 text-center hover:text-shutter-green"
          />
          <Button
            label="Shutter on GitHub"
            href="https://github.com/shutter-network"
            buttonType="outlined"
            className="md:ml-4 text-center hover:text-shutter-grey"
          />
        </div>
      </div>
    </section>
  );
}
