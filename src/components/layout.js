import PropTypes from "prop-types";
import React from "react";
import "@fontsource/dm-sans";

import Header from "./header";
import { Footer } from "./footer";

function Layout({ children, className = "" }) {
  return (
    <div className={`flex flex-col min-h-screen ${className}`}>
      <Header />

      <main>{children}</main>

      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Layout;
