import { graphql } from "gatsby"
import Fade from "react-reveal/Fade"
import Img from "gatsby-image"
import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"

import "../styles/pages/about.scss"

const AboutPage = ({ data }) => {
  var tools = [
    [
      "Product Design",
      "Color Psychology",
      "Typography",
      "Design Sprint",
      "Designer-to-Developer Handoff",
      "User-centered Design",
      "Wireframing",
      "User Research",
      "Competitive Analysis",
      "Mobile Guidelines",
      "Design Thinking",
      "UX Design",
      "Mobile Design",
      "Design Systems",
      "UI Design",
      "Branding Identities",
      "Graphic Design",
      "Responsive Design",
      "Branding Extension",
    ],
    [
      "Behavior-driven Development",
      "Sass",
      "Angular",
      "CSS",
      "Vue.JS",
      "JavaScript",
      "BEM",
      "React.Js",
      "CSS Architetures",
      "Server-side Rendering",
      "HTML",
      "Java",
      "Semantic HTML",
      "Test-driven Development",
      "Front-end Development",
      "Style Guides",
      "Microinteractions",
      "SQL",
      "Accessibility Standards",
      "CSS Preprocessors",
      "Email Design",
      "Programming Logic",
      "Component Architeture",
    ],
    [
      "Customer Relationship Management",
      "Template Creation and Maintenance",
      "Scrum",
      "Search Engine Optimization",
      "UX Writing",
      "Brand Awareness",
      "Kanban",
      "Campaign Conceptualization and Management",
      "Search Engine Marketing",
      "Content Personalization",
      "Landing Page Design",
      "Agile Methodologies",
      "Branding Guide Lines",
      "Email Marketing",
      "Lead Capture",
    ],
  ]

  function createMarquee(items) {
    let marquee = []

    for (let i = 0; i < 3; i++) {
      let marqueeClass = `marquee-container marquee-container--${i + 1}`
      marquee.push(
        <div className={marqueeClass}>
          <h2>
            {items[i].map(item => (
              <>{item} </>
            ))}
          </h2>
        </div>
      )
    }

    return marquee
  }

  return (
    <Layout navHasAbout={false} className="p-about">
      <SEO title="About " />
      <div className="u-content-container--L">
        <h1 className="p-about__header">
          Adding up <span className="u-color-type-variant">Design</span> +{" "}
          <span className="u-color-type-variant">Development</span> +{" "}
          <span className="u-color-type-variant">Marketing</span> leads to
          powerful user experiences.
        </h1>
        <section className="p-about__info">
          <figure className="p-about__info__picture">
            <div className="p-about__info__picture__marquee">
              <Fade top cascade duration={3000}>
                <div>{createMarquee(tools)}</div>
              </Fade>
            </div>
            <Img
              className="p-about__info__picture__img"
              fluid={data.file.childImageSharp.fluid}
              alt="Portrait picture of Froes."
            />
          </figure>
          <div className="p-about__info__text">
            <h2>
              I am <span className="u-color-type-variant">Froes</span>—a liaison
              between all three—and connecting them from conception to execution
              is something I love to work with.
            </h2>
            <p>
              Froes is short for Pedro Felipe Froes. I currently spend my work
              hours in São Paulo, Brazil at Avenue Code collaborating with
              gifted individuals.
            </p>
            <p>
              Typography, drawing, and listening to sad songs are some of the
              things I’m really into. I’d love to connect and learn more about
              you too, reader! Contact me:
            </p>
            <ul>
              {/* <li>
                <strong>Resumé</strong>
              </li> */}
              <li>
                <a href="https://www.linkedin.com/in/froesdesign">
                  linkedin.com/froesdesign
                </a>
              </li>
              <li>
                <a href="mailto:hello@froes.design">hello@froes.design</a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </Layout>
  )
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
