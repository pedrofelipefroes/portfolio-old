import { graphql } from "gatsby"
import Fade from "react-reveal/Fade"
import Img from "gatsby-image"
import React, { Component } from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"

import "../styles/pages/about.scss"

class AboutPage extends Component {
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
    this.header.current.style.top = -scrolledToTop * 0.64 + "px"
  }

  render() {
    return (
      <Layout className="p-about" isOnDark>
        <SEO
          title="About"
          description="From ideation to execution, full-stack Design work is something I’ve been passionately doing since 2016."
          pathname={"/about"}
        />
        <div className="u-content-container--L">
          <h1
            className="p-about__header"
            ref={this.header}
            onScroll={this.handleScroll}
          >
            <Fade>From Design</Fade>
            <Fade>to Development</Fade>
            <Fade>to Marketing</Fade>
            <Fade>to powerful, integrated user experiences.</Fade>
          </h1>
          <section
            className="p-about__info"
            style={{ paddingTop: this.state.headerHeight + "px" }}
          >
            <Img
              className="p-about__info__img"
              fluid={this.props.data.file.childImageSharp.fluid}
              alt="A portrait picture of me."
            />
            <div className="p-about__info__description">
              <h2>Hey there, I am Froes.</h2>
              <h3>
                From ideation to execution, full-stack Design work is something
                I’ve been passionately doing since 2016.
              </h3>
            </div>
          </section>
          <section className="p-about__details-1">
            <Fade delay={1000}>
              <div>
                <h3>Designer at core.</h3>
                <p>
                  Crafting the path to creative problem-solving, whether by
                  research or bold visuals, always comes first.
                </p>
              </div>
            </Fade>
            <Fade delay={1250}>
              <div>
                <h3>Systems developer.</h3>
                <p>
                  As a Computer Engineer, I believe design and code create
                  wonders when crafted off together.
                </p>
              </div>
            </Fade>
            <Fade delay={1500}>
              <div>
                <h3>Strategic storyteller.</h3>
                <p>
                  The story we tell—and branding we wrap it with—has the power
                  to inspire people around us.
                </p>
              </div>
            </Fade>
          </section>
          <section className="p-about__details-2">
            <Fade delay={1000}>
              <p>
                Froes is short for Pedro Felipe Froes. I am currently spending
                my days in São Paulo, Brazil working at Avenue Code &amp;
                collaborating with gifted individuals.
              </p>
            </Fade>
            <Fade delay={1250}>
              <p>
                Typography, drawing, and listening to{" "}
                <a
                  href="https://www.youtube.com/watch?v=1uFv9Ts7Sdw"
                  rel="nofollow"
                >
                  sad songs
                </a>{" "}
                are some of the things I’m really into. I’d love to connect and
                learn more about you, too!
              </p>
            </Fade>
          </section>
        </div>
      </Layout>
    )
  }
}

export const query = graphql`
  query {
    file(relativePath: { eq: "about/froes-profile.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 512, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default AboutPage
