import React from "react";

import { Button } from "./button";
import { DAOButton } from "./dao-button";

export function DAOPaged() {
  return (
    <section className="bg-shutter-new text-white md:py-32 py-8 px-4 md:px-6">
      <div className="md:container mx-auto px-8">
        <h1 className="text-3xl md:text-6xl leading-tight text-shutter-green">
          Shutter DAO
        </h1>
        <p className="text-xl md:text-2xl py-4 text-white">
          A DAO has always been central to Shutter's value proposition. It is an integral part of the system's design, especially concerning the Keyper set selection process and set management.
        </p>
        <p className="text-xl md:text-2xl mt-4 text-white">
          We invite the Shutter Network community to actively participate in shaping a DAO, ensuring that it represents the collective aspirations and needs. This approach fosters a strong sense of ownership and commitment among community members, which is vital for the success of any DAO.
        </p>
        <div className="flex flex-col md:flex-row justify-between mt-2 py-12">
          <DAOButton
            label="Learn More"
            href="https://blog.shutter.network/a-proposed-blueprint-for-launching-a-shutter-dao/"
            buttonType="black"
            className="mb-4 md:mb-0 md:mr-4 text-center hover:text-shutter-grey-lighter"
          />
          <Button
            label="Join Shutter Discord"
            href="https://discord.gg/Fx7m5cUcua"
            buttonType="black"
            className="md:ml-4 text-center hover:text-shutter-green"
          />
        </div>
        <h2 className="py-10 mt-4 text-2xl md:text-5xl leading-tight text-shutter-green-mid">
          Shutter DAO 0x36
        </h2>
        <p className="text-xl md:text-2xl py-4 text-white">
          Shutter DAO 0x36 is a specific community initiative aimed at implementing Shutter. It was formed by community members who aligned with the vision proposed by brainbot. The DAO has distributed a token to encourage community participation while maintaining its autonomy.
        </p>
        <p className="text-xl md:text-2xl mt-4 text-white">
          Shutter DAO 0x36 uses <a href="https://snapshot.org/#/shutterdao0x36.eth" className="underline">Snapshot</a> and <a href="https://app.dev.decentdao.org/home?dao=eth:0x36bD3044ab68f600f6d3e081056F34f2a58432c4" className="underline">Decent</a> voting for its decision-making processes, ensuring a decentralized and democratic approach.
        </p>
        <div className="flex flex-col md:flex-row justify-between mt-2 py-12">
        <Button
          label="Learn More"
          href="https://blog.shutter.network/shutter-dao-0x36-deployed/"
          buttonType="outlined"
          className="mb-4 md:mb-0 md:mr-4 text-center hover:text-shutter-green-mid"
        />
        <Button
          label="Join Shutter Forum"
          href="https://shutternetwork.discourse.group/"
          buttonType="black"
          className="md:ml-4 text-center hover:text-shutter-green"
        />
        </div>
      </div>
    </section>
  );
}
