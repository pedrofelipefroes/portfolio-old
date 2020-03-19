import Fade from "react-reveal/Fade"
import React from "react"

import Layout from "../components/layout/layout"
import NavigationLink from "../components/navigation-link/navigation-link"
import ProjectCard from "../components/project-card/project-card"

import "../styles/pages/index.scss"

export default function IndexPage({
  data: {
    allMdx: { edges },
  },
}) {
  const projects = edges.map((edge, index) => (
    <ProjectCard
      key={edge.node.frontmatter.id}
      activity={edge.node.frontmatter.activity.split(".")[0]}
      headline={edge.node.frontmatter.headline}
      img={edge.node.frontmatter.featuredImage.childImageSharp.fluid}
      index={"0" + (index + 1)}
      highlightColor={"#" + edge.node.frontmatter.highlightColor}
      path={edge.node.frontmatter.path}
      title={edge.node.frontmatter.title}
    />
  ))

  return (
    <Layout navHasCompactFooter navIsOnDark className="p-index">
      <div className="u-content-container--L">
        <header className="p-index__header">
          <Fade>
            <h1>
              Froes, from <br />
              Design to finish.
            </h1>
          </Fade>
        </header>
        <section className="p-index__section p-index__section--about">
          <h4 className="u-color-type-variant p-index__section__title">
            About
            <span className="p-index__section__divider"></span>
            01
          </h4>
          <h3>
            Hello! I am Froes,
            <br />a Designer skilled in Coding and Marketing who strives for
            cohesive user experiences.
          </h3>
          <p>
            <NavigationLink
              className="p-index__navigation-link"
              hasArrow
              label="Read full bio"
              to="/about"
            />
          </p>
          <p className="u-color-type-variant">
            <strong>Check featured cases:</strong>
          </p>
        </section>
        <section className="p-index__section">{projects}</section>
        {/* <section className="p-index__section p-index__section--showcase">
          <h4 className="u-color-type-variant p-index__section__title">
            Showcase
            <span className="p-index__section__divider"></span>
            02
          </h4>
          <h3>Here are some minor projects I have been working on.</h3>
        </section> */}
        <section className="p-index__section p-index__section--contact">
          <h4 className="u-color-type-variant p-index__section__title">
            Contact
            <span className="p-index__section__divider"></span>
            02
          </h4>
          <h3>
            Like to get in touch? I would love to connect and learn more about
            you, too. Message me at{" "}
            <a
              className="p-index__navigation-link"
              href="mailto:hello@froes.design"
            >
              hello@froes.design
            </a>
          </h3>
          <h3>
            Or reach me on
            <br />
            <a
              className="p-index__navigation-link"
              href="https://www.linkedin.com/in/froesdesign"
            >
              linkedin.com/in/froesdesign
            </a>
          </h3>
        </section>
      </div>
    </Layout>
  )
}

export const IndexPageQuery = graphql`
  query IndexPageQuery {
    allMdx(sort: { order: DESC, fields: [frontmatter___order] }) {
      edges {
        node {
          frontmatter {
            path
            id
            featuredImage {
              ...coverImage
            }
            headline
            highlightColor
            title
            activity
          }
        }
      }
    }
  }
`
