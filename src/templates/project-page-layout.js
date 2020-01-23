import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Img from "gatsby-image"
import React from "react"

import Heading2 from "../components/heading-2/heading-2"
import Heading3 from "../components/heading-3/heading-3"
import Heading4 from "../components/heading-4/heading-4"
import ImgCarousel from "../components/img-carousel/img-carousel"
import ImgContainer from "../components/img-container/img-container"
import Layout from "../components/layout/layout"
import Paragraph from "../components/paragraph/paragraph"
import ProjectHeader from "../components/project-header/project-header"
import ProjectOutro from "../components/project-outro/project-outro"
import SEO from "../components/seo/seo"

export default function ProjectPageLayout({
  data: { project, cover, smallImages, mediumImages, largeImages },
}) {
  const images = cover.edges
    .concat(smallImages.edges)
    .concat(mediumImages.edges)
    .concat(largeImages.edges)
  const shortcodes = { Img, ImgCarousel, ImgContainer, ProjectOutro }
  const components = {
    ...shortcodes,
    h2: Heading2,
    h3: Heading3,
    h4: Heading4,
    p: Paragraph,
  }

  const getImgAlt = index => {
    const imgAlt =
      images[index] === undefined
        ? ""
        : images[index].node.base
            .split(" - ")[1]
            .split(".")[0]
            .concat(".")

    return imgAlt
  }

  const getImgSrc = index => {
    const imgSrc =
      images[index] === undefined
        ? ""
        : images[index].node.childImageSharp.fluid

    return imgSrc
  }

  return (
    <MDXProvider components={components}>
      <Layout className={`p-${project.frontmatter.id}`}>
        <SEO title={project.frontmatter.title} />
        <ProjectHeader
          title={project.frontmatter.title}
          subtitle={project.frontmatter.subtitle}
          details={[
            project.frontmatter.activity,
            project.frontmatter.designProcess,
            project.frontmatter.client,
            project.frontmatter.timeline,
          ]}
          cover={<Img alt={getImgAlt(0)} fluid={getImgSrc(0)} />}
        />
        <article>
          <MDXRenderer img={{ alt: getImgAlt, src: getImgSrc }}>
            {project.body}
          </MDXRenderer>
        </article>
      </Layout>
    </MDXProvider>
  )
}

export const projectPageQuery = graphql`
  query projectPageQuery($id: String) {
    project: mdx(frontmatter: { id: { eq: $id } }) {
      body
      frontmatter {
        id
        title
        subtitle
        activity
        designProcess
        client
        timeline
      }
    }
    cover: allFile(
      filter: { name: { regex: "/.cover/" }, relativeDirectory: { eq: $id } }
    ) {
      edges {
        node {
          ...coverImage
        }
      }
    }
    smallImages: allFile(
      filter: { name: { regex: "/.small/" }, relativeDirectory: { eq: $id } }
      sort: { fields: name }
    ) {
      edges {
        node {
          ...smallImage
        }
      }
    }
    mediumImages: allFile(
      filter: { name: { regex: "/.medium/" }, relativeDirectory: { eq: $id } }
      sort: { fields: name }
    ) {
      edges {
        node {
          ...mediumImage
        }
      }
    }
    largeImages: allFile(
      filter: { name: { regex: "/.large/" }, relativeDirectory: { eq: $id } }
      sort: { fields: name }
    ) {
      edges {
        node {
          ...largeImage
        }
      }
    }
  }
`
