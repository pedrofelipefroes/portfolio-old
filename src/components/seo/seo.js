import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, image, meta, pathname, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            defaultTitle: title
            titleTemplate
            defaultDescription: description
            siteUrl: url
            defaultImage: image
          }
        }
      }
    `
  )

  const seo = {
    title: title || site.siteMetadata.defaultTitle,
    description: description || site.siteMetadata.defaultDescription,
    image: `${site.siteMetadata.siteUrl}${image || site.siteMetadata.defaultImage}`,
    url: `${site.siteMetadata.siteUrl}${pathname || "/"}`,
  }

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={seo.title}
      titleTemplate={site.siteMetadata.titleTemplate}
      meta={[
        {
          name: `description`,
          content: seo.description,
        },
        {
          property: `og:title`,
          content: seo.title,
        },
        {
          property: `og:description`,
          content: seo.description,
        },
        {
          name: "og:image",
          content: seo.image,
        },
        {
          property: "og:image:width",
          content: "1200",
        },
        {
          property: "og:image:height",
          content: "628",
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content: seo.url,
        },
        {
          name: `twitter:title`,
          content: seo.title,
        },
        {
          name: `twitter:description`,
          content: seo.description,
        },
        {
          name: "twitter:image",
          content: seo.image,
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        }
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  description: null,
  lang: `en`,
  image: null,
  meta: [],
  pathname: null,
  title: null,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  image: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  pathname: PropTypes.string,
  title: PropTypes.string.isRequired,
}

export default SEO
