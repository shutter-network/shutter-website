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
          name: `title`,
          content: metaTitle,
        },
        {
          name: `description`,
          content: `Shutter Network is a project to prevent front-running and malicious MEV on Ethereum by using threshold encryption`,
        },
        {
          name: `author`,
          content: `Shutter Network`,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content: `https://shutter.network/`,
        },
        {
          property: `og:title`,
          content: `Shutter Network - Home`,
        },
        {
          property: `og:description`,
          content: `Preventing front-running and malicious MEV on Ethereum`,
        },
        {
          property: `og:locale`,
          content: `en_US`,
        },
        {
          property: `og:site_name`,
          content: `Shutter Network`,
        },
        {
          property: `og:image`,
          content: 'https://shutter.network' + PreviewImage,
        },
        {
          property: `og:image:height`,
          content: `630`,
        },
        {
          property: `og:image:width`,
          content: `1200`,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:title`,
          content: `Shutter Network - Home`,
        },
        {
          name: `twitter:description`,
          content: `Preventing front-running and malicious MEV on Ethereum`,
        },
        {
          property: `twitter:image`,
          content: 'https://shutter.network' + PreviewImage,
        },
        {
          name: `twitter:site`,
          content: `@project_shutter`,
        },
        {
          name: `twitter:creator`,
          content: `@project_shutter`,
        },
        {
          name: `google-site-verification`,
          content: `vniF73ij92Xco4_iHggmpNOrSP0bEbJfxonBETjemrQ`,
        },
        {
          name: `msvalidate.01`,
          content: `461226232A0CE4B34E124EE5F4510557`,
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
