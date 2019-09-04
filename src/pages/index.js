import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import ArrowedLink from "../components/arrowed-link/arrowedLink"

import "../styles/index.scss"

const IndexPage = () => (
  <Layout hasNav={false} >
    <SEO title="Portfolio. " />
    <header className="p-home__header l-container">
      <div className="p-home__header__title">
        <h1>
          Design, Development, and Marketing should intertwine to create
          powerful product experiences.
        </h1>
      </div>
      <div className="p-home__header__headline">
        <h2>
          <strong>I am Froes</strong>, and I love to work in this intersection
          developing cohesive brands through comprehensive design systems.
        </h2>
        <ArrowedLink to="/about/" label="More About Me" />
      </div>
    </header>
  </Layout>
)

export default IndexPage
