import React from "react";

import { Button } from "./button";

import { Links } from "../constants/links";

export function ContactUs() {
  return (
    <section className="md:py-32 py-10 bg-shutter-new">
      <div className="mx-auto md:container px-8">
        <div className="">
          <h1 className="text-4xl md:text-6xl leading-tight text-shutter-green">
            fair markets
            <br />
            censorship resistance
            <br />
            no protocol change
          </h1>
          <p className="text-white py-4 text-2xl">
          Shutter is a project to address the challenge of malicious MEV on Ethereum as well as other information asymmetries in distributed systems. Shutter aims to protect users from such exploitation by employing a distributed key generation mechanism, ensuring fair and secure transactions on Ethereum and Layer 2 solutions like rollups and sidechains.
          </p>
          <Button
            label="contact us"
            href={Links.CONTACT}
            buttonType="white"
            className="mt-20 max-w-xl text-center hover:text-shutter-grey"
          />
        </div>
      </div>
    </section>
  );
}
