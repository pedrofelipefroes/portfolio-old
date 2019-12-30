import { graphql } from "gatsby"

export const extraLargeImage = graphql`
  fragment extraLargeImage on File {
    childImageSharp {
      fluid(maxWidth: 1440, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
    base
  }
`
