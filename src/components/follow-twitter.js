import React from "react";

import { Button } from "./button";
import gradesBg from "./../images/grades-background.svg";

export function FollowTwitter() {
  return (
    <section className="h-96 flex flex-col justify-center bg-shutter-black" style={{backgroundImage: `url(${gradesBg})`, backgroundSize: "contain"}}>
      <div className="md:container mx-auto px-8">
        <Button
          label="Follow us on twitter"
          buttonType="white"
          href="https://twitter.com/project_shutter"
          className="mt-20 max-w-xl md:ml-4 text-center"
        />
      </div>
    </section>
  );
}
