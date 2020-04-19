import Fade from "react-reveal/Fade"
import React, { Component } from "react"

import Layout from "../components/layout/layout"

import "../styles/pages/showcase.scss"

class ShowcasePage extends Component {
  render() {
    return (
      <Layout className="p-showcase" isOnDark>
        <div className="u-content-container--L">
          <h1 className="p-showcase__header">
            <Fade>Showcase</Fade>
            <Fade>to be done soon.</Fade>
          </h1>
        </div>
      </Layout>
    )
  }
}

export default ShowcasePage
