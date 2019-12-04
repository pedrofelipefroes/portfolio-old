import Img from "gatsby-image"
import React from "react"

import FeaturedHeader from "../components/featuredHeader"
import Layout from "../components/layout"
import SEO from "../components/seo"

const RebrandingAvenueCodePage = ({ data }) => {
  let projectData = {
    title: "Rebranding Avenue Code",
    subtitle:
      "As this San Francisco IT consulting company grew and opened offices in Brazil, North America, and Europe, a rebranding was necessary to resonate its identity to a global audience.",
    context: [
      {
        title: "Challenge",
        content:
          "How might we redesign Avenue Code brand to become more scalable yet cohesive to the company’s spirit?",
      },
      {
        title: "Role",
        content:
          "I had an active role throughout the entire project, collaborating with the Heads of Marketing and Design from concept to execution.",
      },
      {
        title: "Timebox",
        content:
          "Conception from January to March, 2019; rollout campaign throughout the rest of the year.",
      },
    ],
    process: [
      {
        title: "Inspiration",
        content:
          "Understanding previous brand strengths and constraints & setting reach and belonging goals for the new one.",
      },
      {
        title: "Ideation",
        content:
          "Creating mood boards & exploring colours, type, and themes within the established goals.",
      },
      {
        title: "Implementation",
        content:
          "Developing style guides, templates, a branding system, and a rollout internal campaign for employees.",
      },
    ],
  }

  return (
    <Layout
      navHasAbout
      navHasShowcase
      className="l-featured l-featured--rebranding-avenue-code"
    >
      <SEO title="Rebranding Avenue Code" />
      <FeaturedHeader projectData={projectData}>
        <Img
          fluid={data.file.childImageSharp.fluid}
          alt="Rebranding Avenue Code project header with Avenue Code logo."
        />
      </FeaturedHeader>
    </Layout>
  )
}

export const query = graphql`
  query {
    file(
      relativePath: { eq: "rebranding-avenue-code/rebranding-avenue-code.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 959, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default RebrandingAvenueCodePage
