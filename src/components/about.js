import React from "react";

import { Button } from "./button";

export function About() {
  return (
    <section className="text-shutter-black container mx-auto py-52">
      <p className="text-5xl leading-tight">
        Shutter Network is an open-source project that aims to prevent
        frontrunning on Ethereum by using a threshold cryptography-based
        distributed key generation (DKG) protocol.
      </p>
      <div className="flex flex-row justify-between mt-6">
        <Button
          label="Try Shutter"
          href=""
          buttonType="black"
          className="mr-4"
        />
        <Button
          label="Shutter on GitHub"
          href=""
          buttonType="outlined"
          className="ml-4"
        />
      </div>
    </section>
  );
}
