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

    this.header = React.createRef()
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)

    this.setState({
      headerHeight: this.header.current.clientHeight,
    })
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }

  handleScroll() {
    let scrolledToTop = window.pageYOffset
    this.header.current.style.top = -scrolledToTop * 0.32 + "px"
  }

  render() {
    return (
      <Layout isOnDark className="p-index">
        <div className="u-content-container--XL">
          <header
            className="p-index__header"
            ref={this.header}
            onScroll={this.handleScroll}
          >
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
          <Fade bottom delay={640}>
            <h3 className="p-index__warning">
              More select cases
              <br />
              coming soon.
            </h3>
          </Fade>
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
              childImageSharp {
                fluid(maxWidth: 1184, quality: 100) {
                  ...GatsbyImageSharpFluid_noBase64
                }
              }
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
