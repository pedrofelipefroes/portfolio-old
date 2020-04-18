import { graphql } from "gatsby"
import Fade from "react-reveal/Fade"
import React, { Component } from "react"

import Layout from "../components/layout/layout"
import NavigationLink from "../components/navigation-link/navigation-link"
import ProjectList from "../components/project-list/project-list"

import "../styles/pages/index.scss"

class IndexPage extends Component {
  constructor() {
    super()

    this.state = {
      headerHeight: 0,
    }

    this.headerHeight = React.createRef()
  }

  componentDidMount() {
    this.setState({
      headerHeight: this.headerHeight.current.clientHeight,
    })
  }

  render() {
    return (
      <Layout isOnDark className="p-index">
        <div className="u-content-container--XL">
          <header className="p-index__header" ref={this.headerHeight}>
            <h1>
              <Fade>
                Froes develops cohesive user experiences from Design to finish.
              </Fade>
            </h1>
            <Fade bottom>
              <NavigationLink to="/about" label="More Info" />
            </Fade>
          </header>
          <ProjectList
            items={this.props.data.allMdx.edges}
            distanceFromHeader={this.state.headerHeight}
          />
        </div>
      </Layout>
    )
  }
}

export const IndexPageQuery = graphql`
  query IndexPageQuery {
    allMdx(
      filter: { frontmatter: { order: { gt: 0 } } }
      sort: { order: DESC, fields: [frontmatter___order] }
    ) {
      edges {
        node {
          frontmatter {
            activity
            coverImage {
              ...coverImage
              base
            }
            id
            path
            title
          }
        }
      }
    }
  }
`

export default IndexPage
