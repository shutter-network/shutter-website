import React from "react";

import { Button } from "./button";
import gradesBg from "./../images/grades-background.svg";

export function FollowTwitter() {
  return (
    <section className="py-32 bg-shutter-new" style={{backgroundImage: `url(${gradesBg})`, backgroundSize: "contain"}}>
      <div className="md:container mx-auto px-8">
        <Button
          label="Follow us on X"
          buttonType="white"
          href="https://twitter.com/ShutterNetwork"
          className="mt-20 max-w-xl md:ml-4 text-center hover:text-shutter-grey"
        />
      </div>
    </section>
  );
}
