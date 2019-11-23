import { graphql } from "gatsby"
import Img from "gatsby-image"
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = ({ data }) => {
  var tools = [
    [
      "Designer",
      "Designer",
      "Designer",
      "Designer",
      "Designer",
      "Designer",
      "Designer",
      "Designer",
      "Designer",
      "Designer",
      "Designer",
      "Designer",
      "Designer",
      "Designer",
      "Designer",
      "Designer",
      "Designer",
      "Designer",
      "Designer",
      "Designer",
      "Designer",
    ],
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
      "Developer",
      "Developer",
      "Developer",
      "Developer",
      "Developer",
      "Developer",
      "Developer",
      "Developer",
      "Developer",
      "Developer",
      "Developer",
      "Developer",
      "Developer",
      "Developer",
      "Developer",
      "Developer",
      "Developer",
      "Developer",
      "Developer",
      "Developer",
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
      "Marketer",
      "Marketer",
      "Marketer",
      "Marketer",
      "Marketer",
      "Marketer",
      "Marketer",
      "Marketer",
      "Marketer",
      "Marketer",
      "Marketer",
      "Marketer",
      "Marketer",
      "Marketer",
      "Marketer",
      "Marketer",
      "Marketer",
      "Marketer",
      "Marketer",
      "Marketer",
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

    for (let i = 0; i < 6; i++) {
      let marqueeClass =
        "p-about__picture__marquee-container p-about__picture__marquee-container--" +
        `${i + 1}`
      marquee.push(
        <p className={marqueeClass}>
          <strong>
            {items[i].map(item => (
              <>{item} </>
            ))}
          </strong>
        </p>
      )
    }

    return marquee
  }

  return (
    <Layout navHasAbout={false} className="p-about">
      <SEO title="About " />
      <div className="l-container__content">
        <section className="p-about__header">
          <h1 className="l-container__text--large">
            Adding up <strong>Design</strong> + <strong>Development</strong> +{" "}
            <strong>Marketing</strong> leads to powerful user experiences.
          </h1>
          <h2 className="l-container__text--small">
            <strong>I am Froes</strong>—a liaison between all three—and
            connecting them from conception to execution is something I love to
            work with.
          </h2>
        </section>
        <section className="p-about__picture">
          <Img
            className="p-about__picture__img"
            fluid={data.file.childImageSharp.fluid}
            alt="Portrait picture of Froes."
          />
          {createMarquee(tools)}
        </section>
        <section className="p-about__info l-container__text--medium">
          <p>
            Froes is short for Pedro Felipe Froes. I currently spend my work
            hours at Avenue Code collaborating with gifted individuals.
            Typography, drawing, and listening to sad songs are some of the
            things I’m really into. I’d love to connect and learn more about you
            too, reader! Check my contact info below.
          </p>
          <ul>
            <li>
              <strong>Currently living on São Paulo, Brazil.</strong>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/froesdesign">
                linkedin.com/froesdesign
              </a>
            </li>
            <li>
              <a href="mailto:hello@froes.design">hello@froes.design</a>
            </li>
          </ul>
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
