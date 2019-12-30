import { graphql } from "gatsby"

export const smallImage = graphql`
  fragment smallImage on File {
    childImageSharp {
      fluid(maxWidth: 512, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
    base
  }
`