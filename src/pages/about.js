import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query {
      aboutImage1: file(relativePath: { eq: "about-1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 523) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      aboutImage2: file(relativePath: { eq: "about-2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 523) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout navHasAboutLink={false}>
      <SEO title="About " />
      <div className="p-about l-container">
        <h2 className="p-about__header">
          <strong>
            Powerful product experiences spring from creative+technical
            collaboration.
          </strong>{" "}
          By successfully integrating Design, Development, and Marketing
          expertise, comprehensive design systems are built, and powerful,
          innovative products are created.
        </h2>
        <Img
          fluid={data.aboutImage2.childImageSharp.fluid}
          className="p-about__figure"
        />
        <Img
          fluid={data.aboutImage1.childImageSharp.fluid}
          className="p-about__figure"
        />
        <section className="p-about__body">
          <p>
            <strong>I am Froes</strong>⸺short for Pedro Felipe Froes, someone
            who’ve always been passionate about mixing creativity and systematic
            thinking together. As someone who put a lot of effort into big
            ideas, playing a role in Design, Development, and Marketing teams
            over the years helped me blend their strengths and needs in order to
            turn these ideas into realities.
          </p>
          <p>
            After graduating in Computer Engineering and working for some time
            in Belo Horizonte, Brazil, I'm currently filling my days in São
            Paulo as a liaison between Avenue Code Design and Marketing teams.
            At Avenue Code, I have the chance to collaborate with gifted
            individuals who inspire me to become a better professional.
          </p>
        </section>
      </div>
    </Layout>
  )
}

export default AboutPage
