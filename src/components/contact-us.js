import React from "react";

import { Button } from "./button";

export function ContactUs() {
  return (
    <section className="py-52 bg-shutter-black">
      <div className="mx-auto container">
        <h1 className="text-7xl leading-tight text-shutter-green">
          fair markets
          <br />
          censorship resistance
          <br />
          no protocol change
        </h1>
        <Button
          label="contact us"
          href=""
          buttonType="white"
          className="mt-20 max-w-xl"
        />
      </div>
    </section>
  );
}
