import React from "react";

import { GitHub } from "./icons/github";
import { Telegram } from "./icons/telegram";
import { Twitter } from "./icons/twitter";

import { Links } from "../constants/links";

const SOCIAL_ITEMS = [
  {
    label: <GitHub />,
    link: Links.GITHUB,
  },
  {
    label: <Telegram />,
    link: Links.TELEGRAM,
  },
  {
    label: <Twitter />,
    link: Links.TWITTER,
  },
];

export function SocialLinks() {
  return (
    <div className="flex flex-row items-center">
      {SOCIAL_ITEMS.map((item, i) => (
        <a
          className="text-3xl block mt-4 text-white no-underline md:inline-block md:mt-0 mr-3 ml-3 md:ml-6 md:mr-0"
          key={`nav-item-${i}`}
          href={item.link}
          rel="noreferrer"
          target="_blank"
          alt={item.label}
        >
          {item.label}
        </a>
      ))}
    </div>
  );
}
