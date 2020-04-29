import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Img from "gatsby-image"
import React from "react"

import Fade from "react-reveal/Fade"
import Layout from "../components/layout/layout"
import ProjectHeader from "../components/project-header/project-header"
import SEO from "../components/seo/seo"

import Heading2 from "../components/heading-2/heading-2"
import Heading3 from "../components/heading-3/heading-3"
import Carousel from "../components/carousel/carousel"
import Media from "../components/media/media"
import Paragraph from "../components/paragraph/paragraph"

function ProjectPageTemplate({ data: { project, media } }) {
  let details = [
    project.frontmatter.activity,
    project.frontmatter.client,
    project.frontmatter.duration,
  ]

  let shortcodes = { Carousel, Fade, Img, Media }

  let components = {
    ...shortcodes,
    h2: Heading2,
    h3: Heading3,
    p: Paragraph,
  }

  const getMediaDesc = index => {
    return media.edges[index].node.base
      .split(" - ")[1]
      .split(".")[0]
      .concat(".")
  }

  const getMediaSrc = index => {
    if (
      media.edges[index].node.extension === "svg" ||
      media.edges[index].node.extension === "mp4" ||
      media.edges[index].node.base.includes(".poster")
    ) {
      return media.edges[index].node.publicURL
    } else {
      return media.edges[index].node.childImageSharp.fluid
    }
  }

  return (
    <MDXProvider components={components}>
      <Layout className={`p-${project.frontmatter.id}`}>
        <SEO title={project.frontmatter.title} />
        <ProjectHeader
          coverImg={media.edges[0].node.publicURL}
          coverVideo={media.edges[1].node.publicURL}
          details={details}
          subtitle={project.frontmatter.subtitle}
          title={project.frontmatter.title}
        />
        <article>
          <MDXRenderer media={{ desc: getMediaDesc, src: getMediaSrc }}>
            {project.body}
          </MDXRenderer>
        </article>
      </Layout>
    </MDXProvider>
  )
}

export const projectPageTemplateQuery = graphql`
  query projectPageTemplateQuery($id: String) {
    project: mdx(frontmatter: { id: { eq: $id } }) {
      body
      frontmatter {
        id
        title
        subtitle
        activity
        client
        duration
      }
    }
    media: allFile(
      filter: {
        extension: { in: ["jpg", "mp4", "png", "svg"] }
        relativeDirectory: { eq: $id }
      }
      sort: { fields: name }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 1440, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
          base
          extension
          publicURL
        }
      }
    }
  }
`

export default ProjectPageTemplate