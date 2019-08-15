import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ArrowedLink from "../components/arrowed-link/arrowedLink"

import "../styles/index.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Portfolio" />
    <header className="c-home-header l-container">
      <div className="c-home-header__title">
        <h1>
          Design, Development, and Marketing should intertwine to create
          powerful product experiences.
        </h1>
      </div>
      <div className="c-home-header__headline">
        <h2>
          <strong>I am Froes</strong>, and I love to work in this intersection
          developing cohesive brands through comprehensive design systems.
        </h2>
        <ArrowedLink to="/page-2/" label="More About Me" />
      </div>
    </header>
  </Layout>
)

export default IndexPage
