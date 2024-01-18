import React from "react";

import { Button } from "./button";

import { Links } from "../constants/links";

export function StayInTouch() {
  return (
    <section className="bg-shutter-black py-28">
      <div className="md:container px-8 mx-auto flex flex-col lg:flex-row items-center">
        <div className="flex flex-row items-center">
          <div className="text-2xl md:text-4xl text-white mr-4">
            stay in touch
          </div>
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M35.84 23.2399C35.7448 22.9944 35.6021 22.7701 35.42 22.5799L25.42 12.5799C25.2335 12.3934 25.0121 12.2455 24.7685 12.1446C24.5249 12.0436 24.2637 11.9917 24 11.9917C23.4674 11.9917 22.9566 12.2033 22.58 12.5799C22.3935 12.7664 22.2456 12.9877 22.1447 13.2314C22.0438 13.475 21.9918 13.7362 21.9918 13.9999C21.9918 14.5325 22.2034 15.0433 22.58 15.4199L29.18 21.9999H14C13.4696 21.9999 12.9609 22.2106 12.5858 22.5857C12.2107 22.9607 12 23.4694 12 23.9999C12 24.5303 12.2107 25.039 12.5858 25.4141C12.9609 25.7892 13.4696 25.9999 14 25.9999H29.18L22.58 32.5799C22.3925 32.7658 22.2438 32.987 22.1422 33.2307C22.0407 33.4744 21.9884 33.7359 21.9884 33.9999C21.9884 34.2639 22.0407 34.5253 22.1422 34.769C22.2438 35.0128 22.3925 35.234 22.58 35.4199C22.7659 35.6073 22.9871 35.7561 23.2308 35.8577C23.4746 35.9592 23.736 36.0115 24 36.0115C24.264 36.0115 24.5254 35.9592 24.7692 35.8577C25.0129 35.7561 25.2341 35.6073 25.42 35.4199L35.42 25.4199C35.6021 25.2297 35.7448 25.0054 35.84 24.7599C36.04 24.273 36.04 23.7268 35.84 23.2399Z"
              fill="white"
            />
          </svg>
        </div>
        {/* <input
          placeholder="your e-mail"
          className="rounded-full bg-shutter-grey-dark text-white px-8 py-6 flex-1 w-full max-w-sm md:max-w-xl text-xl md:text-3xl"
        /> */}
        <Button
          label="subscribe"
          href={Links.BLOGSUB}
          buttonType="white"
          className="mt-4 lg:mt-0 w-full max-w-sm lg:ml-4 hover:text-shutter-grey"
        />
      </div>
    </section>
  );
}
