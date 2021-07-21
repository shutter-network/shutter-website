import { Link } from "gatsby";
import React, { useState } from "react";

import { Logo } from "./logo";
import { GitHub } from "./icons/github";
import { Telegram } from "./icons/telegram";
import { Twitter } from "./icons/twitter";

import { Links } from "../constants/links";

const NAV_ITEMS = [
  {
    label: `blog`,
    link: Links.BLOG,
  },
  {
    label: `contact`,
    link: Links.CONTACT,
  },
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

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <header className="bg-shutter-black z-20">
      <div className="flex flex-wrap items-center justify-between container p-4 mx-auto md:py-8 lg:px-0">
        <Link to="/">
          <Logo />
        </Link>

        <button
          className="items-center block px-3 py-2 text-white border border-white rounded md:hidden"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <nav
          className={`${
            isExpanded ? `flex flex-col` : `hidden`
          } md:flex md:items-center w-full md:w-auto`}
        >
          {NAV_ITEMS.map((item, i) => (
            <a
              className="text-3xl block mt-4 text-white no-underline md:inline-block md:mt-0 md:ml-6"
              key={`nav-item-${i}`}
              href={item.link}
              rel="noreferrer"
              target="_blank"
              alt={item.label}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
