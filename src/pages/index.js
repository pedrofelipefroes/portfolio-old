import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import NavigationLink from "../components/navigationLink"

import "../styles/index.scss"

const IndexPage = () => (
  <Layout hasNav={false}>
    <SEO title="Portfolio. " />
    <header className="p-index__header">
      <section className="p-index__header__title">
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
      </section>
      <section className="p-index__header__headline">
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
        <div className="fadeIn">
          <NavigationLink label="About" to="/about" />
        </div>
        <div className="fadeIn">
          <NavigationLink label="Showcase" to="/showcase" />
        </div>
        <div className="p-index__header__headline__featured fadeIn">
          <strong className="label">Featured Work</strong>
          <svg
            className="arrow"
            width="24px"
            height="24px "
            viewBox="0 0 24 24"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect id="line" width="16" height="2" x="2" y="11.5" />
            <g id="beak">
              <rect
                width="8"
                height="2"
                x="0"
                y="0"
                transform="translate(13, 12.5) rotate(45) translate(-13, -12.5) translate(10, 7.5)"
              />
              <rect
                width="2"
                height="8"
                x="6"
                y="0"
                transform="translate(13, 12.5) rotate(45) translate(-13, -12.5) translate(10, 7.5)"
              />
            </g>
          </svg>
        </div>
      </section>
    </header>
  </Layout>
)

export default IndexPage
