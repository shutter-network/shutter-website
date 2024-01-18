import React from "react";

import { Button } from "./button";
import { DAOButton } from "./dao-button";

export function DAOPaged() {
  return (
    <section className="bg-shutter-new text-white md:py-32 py-8 px-4 md:px-6">
      <div className="md:container mx-auto px-8">
        <p className="text-3xl md:text-6xl leading-tight text-shutter-green">
          Shutter DAO
        </p>
        <p className="text-xl md:text-2xl py-4 text-white">
          A DAO has always been at the core of the vision of Shutter's value proposition. It is an integral part of how the system is designed to function, especially concerning the Keyper Set Selection Process and the Set Management.
        </p>
        <p className="text-xl md:text-2xl mt-4 text-white">
          We invite the Shutter Network community to actively participate in shaping a DAO, ensuring that it represents the collective aspirations and needs. This approach fosters a strong sense of ownership and commitment among community members, which is vital for any DAO's success.
        </p>
        <div className="flex flex-col md:flex-row justify-between mt-2 py-12">
          <DAOButton
            label="Learn More"
            href="https://blog.shutter.network/a-proposed-blueprint-for-launching-a-shutter-dao/"
            buttonType="black"
            className="mb-4 md:mb-0 md:mr-4 text-center hover:text-shutter-grey"
          />
          <DAOButton
            label="Join the Forum"
            href="https://shutterprotodao.discourse.group/"
            buttonType="outlined"
            className="md:ml-4 text-center hover:text-shutter-grey"
          />
        </div>
        <div className="flex flex-col md:flex-row justify-between mt-2 py-12">
          <Button
            label="Shutter DAO 0x36 at Fractal"
            href="https://app.fractalframework.xyz/daos/0x36bD3044ab68f600f6d3e081056F34f2a58432c4"
            buttonType="black"
            className="mb-4 md:mb-0 md:mr-4 text-center hover:text-shutter-green"
          />
        </div>
      </div>
    </section>
  );
}
