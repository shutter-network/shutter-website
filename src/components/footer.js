import React from "react";

import { SocialLinks } from "./social-links";

import { Links } from "../constants/links";

const NAV_ITEMS = [
  {
    label: `Imprint`,
    link: Links.IMPRINT,
  },
  {
    label: `Privacy Policy`,
    link: Links.PRIVACY_POLICY,
  },
];

export function Footer() {
  return (
    <footer className="bg-shutter-black">
      <nav className="flex flex-col md:flex-row items-center justify-between mb-52 container mx-auto px-4 lg:px-0">
        <div className="uppercase text-xl text-white">Shutter Network 2021</div>
        <div className="flex flex-col md:flex-row items-center">
          {NAV_ITEMS.map((item, i) => (
            <a
              key={`footer-nav-item-${i}`}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-xl md:ml-6 mt-4 md:mt-0"
            >
              {item.label}
            </a>
          ))}
          <SocialLinks />
        </div>
      </nav>
    </footer>
  );
}
