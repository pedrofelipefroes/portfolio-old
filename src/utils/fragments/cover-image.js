import { graphql } from "gatsby"

export const coverImage = graphql`
  fragment coverImage on File {
    childImageSharp {
      fluid(maxWidth: 1184, quality: 100) {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
    base
  }
`
