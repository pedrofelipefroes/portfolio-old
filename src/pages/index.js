import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ArrowedLink from "../components/arrowedLink"

import "../styles/index.scss"

const IndexPage = () => (
  <Layout hasNav={false}>
    <SEO title="Portfolio. " />
    <header className="p-index__header">
      <div className="p-index__header__title">
        <h1>
          <div className="fadeInUp">
            <strong>Designer</strong> +
          </div>
          <div className="fadeInUp--small">
            <strong>Developer</strong> +
          </div>
          <div className="fadeInUp--smaller">
            <strong>Marketer</strong>
          </div>
        </h1>
      </div>
      <div className="p-index__header__headline">
        <h1>
          <div className="fadeInDown">
            I am <strong>Froes</strong>,
          </div>
        </h1>
        <h2>
          <div className="fadeInDown--small">
            and I love to develop cohesive user experiences through
            comprehensive design systems.
          </div>
        </h2>
      </div>
    </header>
  </Layout>
)

export default IndexPage
