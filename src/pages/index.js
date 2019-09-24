import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import ArrowedLink from "../components/arrowed-link/arrowedLink"

import "../styles/index.scss"

const IndexPage = () => (
  <Layout hasNav={false}>
    <SEO title="Portfolio. " />
    <header className="p-index__header l-container__content">
      <h1 className="l-container__text--small">
        Design, Development, and Marketing should intertwine to create powerful
        product experiences.
      </h1>
      <div className="p-index__header__headline">
        <h2 className="l-container__text--small">
          <strong>I am Froes</strong>, and I love to work in this intersection
          developing cohesive brands through comprehensive design systems.
        </h2>
        <ArrowedLink to="/about/" label="More About Me" />
      </div>
    </header>
  </Layout>
)

export default IndexPage
