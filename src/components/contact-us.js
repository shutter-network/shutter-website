import React from "react";

import { Button } from "./button";

import { Links } from "../constants/links";

export function ContactUs() {
  return (
    <section className="md:py-32 py-10 bg-shutter-new">
      <div className="mx-auto md:container px-8">
        <div className="">
          <h1 className="text-4xl md:text-6xl leading-tight text-shutter-green py-4">
            Base Layer Neutrality
          </h1>
          <h1 className="text-4xl md:text-6xl leading-tight text-shutter-green py-4">
            Information Symmetry
          </h1>
          <h1 className="text-4xl md:text-6xl leading-tight text-shutter-green py-4">
            Accessibility
          </h1>
          <p className="text-white py-4 text-2xl">
            Shutter is a system that focuses on base layer neutrality, information symmetry, and accessibility by using threshold encryption with a Distributed Key Generation (DKG) mechanism.
          </p>
          <p className="text-white py-4 text-2xl">
            In a Shutterized system, users encrypt their transactions or votes until their inclusion and order are fixed. Only then does a threshold amount of Shutter Keypers collaboratively provide a decryption key that can be used to decrypt and execute the transactions.
          </p>
        </div>
      </div>
    </section>
  );
}
