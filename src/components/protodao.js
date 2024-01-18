import React from "react";

import { Button } from "./button";

import { Links } from "../constants/links";

export function ProtoDAO() {
  return (
    <section className="md:py-20 py-8 bg-white">
      <div className="mx-auto md:container px-8">
        <div className="">
          <h1 className="text-4xl md:text-6xl leading-tight text-shutter-new">
            Shutter protoDAO
          </h1>
          <p className="text-xl py-4 text-shutter-new">
          The Shutter protoDAO embarked on its initial phase, outlining access and objectives. It adopts a one-person/address, one-vote system, promoting a straightforward democratic process. The membership list is fixed and hand-picked for now. Snapshot is the voting platform, offering dynamic proposal organization and shielded voting.
          </p>
          <p className="text-xl py-4 text-shutter-new">
          The Shutter protoDAO is a pragmatic, step-by-step approach towards decentralization, prioritizing community involvement and learning from each phase while maintaining operational reliability and security. Initial members of the protoDAO include early contributors and key members of partner organizations.
          </p>
          <Button
            label="Learn More"
            href={Links.protoDAO}
            buttonType="black"
            className="mt-10 max-w-xl text-center hover:text-shutter-green"
          />
          <h1 className="text-4xl md:text-6xl leading-tight text-shutter-new pt-20">
            SPT Token
          </h1>
          <p className="text-xl py-4 text-shutter-new">
          <a href="https://twitter.com/project_shutter/status/1673339562838335491" target="_blank" className="underline">SPT holders are early supporters</a> with faith and contributions to the project. <a href="https://etherscan.io/token/0xcbe3aef2fa9899d713ca592737b6aeb33668ba4e" target="_blank" className="underline">SPT is a non-liquid, privately sold currency token</a> intended for users and integrators to pay Keypers.
          </p>
        </div>
      </div>
    </section>
  );
}
