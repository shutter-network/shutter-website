import React from "react";
import { Link } from "gatsby";

import { SocialLinks } from "./social-links";

const NAV_ITEMS = [
  {
    label: `Imprint`,
    path: "/imprint",
  },
  {
    label: `Privacy Policy`,
    path: "/privacy-policy",
  },
];

export function Footer() {
  return (
    <footer className="bg-shutter-black">
      <nav className="flex flex-col md:flex-row items-center justify-between mb-52 md:container px-8 mx-auto">
        <div className="uppercase text-xl text-white">Shutter Network 2021</div>
        <div className="flex flex-col md:flex-row items-center">
          {NAV_ITEMS.map((item, i) => (
            <Link
              key={`footer-nav-item-${i}`}
              to={item.path}
              className="text-white text-xl md:ml-6 mt-4 md:mt-0"
            >
              {item.label}
            </Link>
          ))}
          <SocialLinks />
        </div>
      </nav>
    </footer>
  );
}
