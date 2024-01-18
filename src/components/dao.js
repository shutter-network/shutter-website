import React from "react";

import { Button } from "./button";

export function DAO() {
  return (
    <section className="bg-white text-white md:py-52 py-10 px-4 md:px-6">
      <div className="md:container mx-auto px-8">
        <p className="text-3xl md:text-6xl leading-tight text-shutter-new">
          Shutter DAO
        </p>
        <p className="text-xl md:text-2xl py-4 text-shutter-new">
          A DAO has always been at the core of the vision of Shutter's value proposition. It is an integral part of how the system is designed to function, especially concerning the Keyper Set Selection Process and the Set Management.
        </p>
        <p className="text-xl md:text-2xl mt-4 text-shutter-new">
          We invite the Shutter Network community to actively participate in shaping a DAO, ensuring that it represents the collective aspirations and needs. This approach fosters a strong sense of ownership and commitment among community members, which is vital for any DAO's success.
        </p>
        <div className="flex flex-col md:flex-row justify-between mt-2 py-12">
          <Button
            label="Learn More"
            href="https://blog.shutter.network/a-proposed-blueprint-for-launching-a-shutter-dao/"
            buttonType="black"
            className="mb-4 md:mb-0 md:mr-4 text-center hover:text-shutter-green"
          />
          <Button
            label="Join the Forum"
            href="https://shutterdao.discourse.group/"
            buttonType="outlined"
            className="md:ml-4 text-center hover:text-shutter-grey"
          />
        </div>
      </div>
    </section>
  );
}
