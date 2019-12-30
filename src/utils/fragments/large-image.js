import { graphql } from "gatsby"

export const largeImage = graphql`
  fragment largeImage on File {
    childImageSharp {
      fluid(maxWidth: 1024, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
    base
  }
`