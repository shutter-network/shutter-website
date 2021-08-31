import React from "react";

import { Button } from "./button";

import { Links } from "../constants/links";

export function ContactUs() {
  return (
    <section className="py-32 bg-shutter-black">
      <div className="mx-auto container px-4 md:px-6">
        <h1 className="text-4xl md:text-6xl leading-tight text-shutter-green">
          fair markets
          <br />
          censorship resistance
          <br />
          no protocol change
        </h1>
        <Button
          label="contact us"
          href={Links.CONTACT}
          buttonType="white"
          className="mt-20 max-w-xl text-center"
        />
      </div>
    </section>
  );
}
