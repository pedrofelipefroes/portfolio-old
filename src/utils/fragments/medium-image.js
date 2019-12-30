import { graphql } from "gatsby"

export const mediumImage = graphql`
  fragment mediumImage on File {
    childImageSharp {
      fluid(maxWidth: 640, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
    base
  }
`