import { useStaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { Helmet } from "react-helmet";
import PreviewImage from "../images/shutter_main.png";

function SEO({ lang, meta, keywords, title }) {
  const { site } = useStaticQuery(graphql`
    query DefaultSEOQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const metaTitle = title || site.siteMetadata.title;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      meta={[
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:title`,
          content: metaTitle + ` - Shutter Network`,
        },
        {
          property: `og:image`,
          content: PreviewImage,
        },
        {
          property: `twitter:image`,
          content: PreviewImage,
        },
        {
          property: `title`,
          content: `Shutter Network - Preventing front-running and malicious MEV on Ethereum`,
        },
        {
          name: `author`,
          content: `Shutter Network`,
        },
        {
          property: `og:locale`,
          content: `en_US`,
        },
        {
          name: `description`,
          content: `Shutter Network is an open-source project to prevent front-running on Ethereum by using a threshold cryptography-based distributed key generation protocol`,
        },
        {
          property: `og:description`,
          content: `Shutter Network is an open-source project to prevent front-running on Ethereum by using a threshold cryptography-based distributed key generation protocol`,
        },
        {
          property: `og:url`,
          content: `https://shutter.network/`,
        },
        {
          property: `og:site_name`,
          content: `Shutter Network`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          property: `twitter:title`,
          content: `Shutter Network - Preventing front-running and malicious MEV on Ethereum`,
        },
        {
          name: `twitter:site`,
          content: `@project_shutter`,
        },
        {
          name: `twitter:creator`,
          content: `@project_shutter`,
        },
      ]
        .concat(
          keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.join(`, `),
              }
            : []
        )
        .concat(meta)}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
    />
  );
}

SEO.defaultProps = {
  lang: `en`,
  keywords: [],
  meta: [],
};

SEO.propTypes = {
  keywords: PropTypes.arrayOf(PropTypes.string),
  lang: PropTypes.string,
  meta: PropTypes.array,
  title: PropTypes.string.isRequired,
};

export default SEO;
