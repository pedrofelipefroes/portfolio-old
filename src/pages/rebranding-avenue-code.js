import { graphql } from "gatsby"
import Fade from "react-reveal/Fade"
import Img from "gatsby-image"
import React from "react"

import ImageCarousel from "../components/image-carousel/image-carousel"
import ImageContainer from "../components/image-container/image-container"
import Layout from "../components/layout/layout"
import ProjectHeader from "../components/project-header/project-header"
import ProjectOutro from "../components/project-outro/project-outro"
import SEO from "../components/seo/seo"
import TextContainer from "../components/text-container/text-container"

import brandIntroduction from "../images/rebranding-avenue-code/brand-introduction.mp4"
import brandIntroductionPoster from "../images/rebranding-avenue-code/brand-introduction-poster.jpg"
import brandSystem from "../images/rebranding-avenue-code/brand-system.mp4"
import brandSystemPoster from "../images/rebranding-avenue-code/brand-system-poster.jpg"
import brandOpeningActivity from "../images/rebranding-avenue-code/brand-opening-activity.mp4"
import brandOpeningActivityPoster from "../images/rebranding-avenue-code/brand-opening-activity-poster.jpg"
import brandTypographySample from "../images/rebranding-avenue-code/brand-typography-sample.svg"

import "../styles/index.scss"
import "../styles/pages/rebranding-avenue-code.scss"

const RebrandingAvenueCodePage = ({ data }) => {
  const { cover, largeImages, mediumImages, smallImages } = data

  return (
    <Layout navHasAbout navHasShowcase className="p-rebranding-avenue-code">
      <SEO title="Rebranding Avenue Code" />
      <ProjectHeader
        cover={
          <Img
            alt={cover.base.split(".cover.jpg")[0]}
            fluid={cover.childImageSharp.fluid}
          />
        }
        details={[
          {
            title: "Activity",
            content:
              "Branding & Visual Design; actively contributed throughout the whole project.",
          },
          {
            title: "Design Process",
            content:
              "4-stage process, from Inspiration to Ideation, Implementation, and Inspection.",
          },
          { title: "Client", content: "Avenue Code." },
          {
            title: "Timeline",
            content: "January—October 2019.",
          },
        ]}
        title="Rebranding Avenue Code"
        subtitle="As this San Francisco IT consulting company grew and opened offices around the world, a rebranding was necessary to resonate its identity to a global audience."
      />
      <article>
        <TextContainer
          text={
            <p>
              Avenue Code started off as an IT consultancy company, with much of
              its branding being underdeveloped. As the company grew, its first
              brand guide was designed in 2017 to provide a framework for
              business development personnel and marketers alike.
            </p>
          }
        />
        <TextContainer
          text={
            <p>
              Two years later, Avenue Code further expansion led it to a global
              playground, and its brand felt limited in its new market context.
              A rebranding was planned to translate the company's diverse set of
              solutions and consultants, a process which started off by framing
              the challenge:
            </p>
          }
        />
        <TextContainer
          text={
            <h3>
              <span className="u-color-type-variant">How Might We</span>{" "}
              redesign Avenue Code brand to become more scalable yet cohesive to
              the company’s spirit?
            </h3>
          }
        />
        <TextContainer
          text={
            <p>
              A four-stage process ensued, keeping scalability and cohesiveness
              as defining factors for the new brand identity.
            </p>
          }
        />
        <TextContainer
          isHeader
          text={
            <>
              <h4 className="u-color-type-variant">Design Process—Stage 1</h4>
              <h2>Inspiration</h2>
            </>
          }
        />
        <TextContainer
          text={
            <p>
              The solution started-off by mapping Avenue Code current and ideal
              brand identities. Pain points from the previous branding were
              identified, as well as possibilities for expansion: taking the
              street art inspiration further and reflecting the company’s growth
              were one of the defined goals for the new branding.
            </p>
          }
        />
        <ImageContainer
          caption="Previous branding featured a limited amount of colours—each associated with an internal squad—and Lato as its typeface."
          hasSize="XL"
          image={
            <>
              <Img
                alt={
                  smallImages.edges[0].node.base
                    .split(" - ")[1]
                    .split("small.jpg")[0]
                }
                fluid={smallImages.edges[0].node.childImageSharp.fluid}
              />
              <Img
                alt={
                  smallImages.edges[1].node.base
                    .split(" - ")[1]
                    .split("small.jpg")[0]
                }
                fluid={smallImages.edges[1].node.childImageSharp.fluid}
              />
              <Img
                alt={
                  smallImages.edges[2].node.base
                    .split(" - ")[1]
                    .split("small.jpg")[0]
                }
                fluid={smallImages.edges[2].node.childImageSharp.fluid}
              />
            </>
          }
          isSplitIn={3}
          title="Excerpt from previous brand"
        />
        <TextContainer
          isHeader
          text={
            <>
              <h4 className="u-color-type-variant">Design Process—Stage 2</h4>
              <h2>Ideation</h2>
            </>
          }
        />
        <TextContainer
          text={
            <p>
              Creating mood boards &amp; exploring colours, type, and themes
              within the established goals were the main action points in the
              second stage. Eight new base colours arose—a standout among other
              monochromatic tech companies—and each of them was named and
              associated with a value.
            </p>
          }
        />
        <TextContainer
          text={
            <p>
              Having as many as 8 base colors was paramount to translate the
              company's growth over the years: Avenue Code' solutions gamut
              increased from 6 to 12, and the company hit the 500 employees mark
              in 2019 with 5 offices around the globe. This new colourful
              spectrum reflects how diverse its teams have become.
            </p>
          }
        />
        <ImageContainer
          caption="Brand colors were increased from 4 to 8 and were associated with the company's values instead of its squads."
          hasSize="M"
          image={
            <>
              <Img
                alt={
                  mediumImages.edges[0].node.base
                    .split(" - ")[1]
                    .split("medium.jpg")[0]
                }
                fluid={mediumImages.edges[0].node.childImageSharp.fluid}
              />
              <Fade bottom>
                <Img
                  alt={
                    mediumImages.edges[1].node.base
                      .split(" - ")[1]
                      .split("medium.jpg")[0]
                  }
                  className="p-rebranding-avenue-code__mood-board-overlay"
                  fluid={mediumImages.edges[1].node.childImageSharp.fluid}
                />
              </Fade>
            </>
          }
        />
        <TextContainer
          text={
            <p>
              While the Avenue Code logo was kept intact due to strategic
              reasons, the brand typeface changed to Overpass. Inspired by
              highway signage, this open-source typography effort possesses a
              curved-edge lettering, which can translate our playful and
              professional voice.
            </p>
          }
        />
        <TextContainer
          text={
            <p>
              Urban-themed art became an inspiration to create textures and
              patterns, being the motif of our documents, presentations, and
              products. Crosswalk and subway-inspired artworks were designed as
              the first two brand themes to be further escalated on.
            </p>
          }
        />

        <ImageContainer
          image={
            <img
              alt="Typography sample with Overpass lettering and a colorful gradient shadow."
              className="p-rebranding-avenue-code__typography"
              src={brandTypographySample}
            />
          }
        />
        <ImageContainer
          caption="Avenue Code solutions and teams were incorporated in the artwork for the first two brand themes."
          isSplitIn={2}
          image={
            <>
              <Img
                fluid={mediumImages.edges[2].node.childImageSharp.fluid}
                alt={
                  mediumImages.edges[2].node.base
                    .split(" - ")[1]
                    .split("medium.jpg")[0]
                }
              />
              <Img
                fluid={mediumImages.edges[3].node.childImageSharp.fluid}
                alt={
                  mediumImages.edges[3].node.base
                    .split(" - ")[1]
                    .split("medium.jpg")[0]
                }
              />
            </>
          }
        />
        <TextContainer
          isHeader
          text={
            <>
              <h4 className="u-color-type-variant">Design Process—Stage 3</h4>
              <h2>Implementation</h2>
            </>
          }
        />
        <TextContainer
          text={
            <p>
              The next stage of the rebranding consisted in documenting the
              newly-defined colors, typography, and primary themes. After
              developing a throughout Sketch library, slide deck guidelines were
              designed, with a new brand guide presentation built upon them.
            </p>
          }
        />
        <ImageCarousel
          caption="Documentation for color shades, typography hierarchy, logo usage, and the company's values are some of the things available in the Sketch library and the brand guide."
          hasSize="M"
          images={[
            <Img
              fluid={mediumImages.edges[4].node.childImageSharp.fluid}
              alt={
                mediumImages.edges[4].node.base
                  .split(" - ")[1]
                  .split("medium.jpg")[0]
              }
            />,
            <Img
              fluid={mediumImages.edges[5].node.childImageSharp.fluid}
              alt={
                mediumImages.edges[4].node.base
                  .split(" - ")[1]
                  .split("medium.jpg")[0]
              }
            />,
            <Img
              fluid={mediumImages.edges[6].node.childImageSharp.fluid}
              alt={
                mediumImages.edges[4].node.base
                  .split(" - ")[1]
                  .split("medium.jpg")[0]
              }
            />,
          ]}
        />
        <TextContainer
          text={
            <p>
              In lieu of the scalability goal, the brand themes were further
              escalated to the physical medium in the form of notepads,
              lanyards, promotional items, and even office artwork. It was
              important that the Avenue Code brand was well-perceived not just
              online, but in person as well.
            </p>
          }
        />
        <ImageCarousel
          title="Brand themes were escalated from the digital to the physical medium"
          hasSize="XL"
          images={[
            <Img
              fluid={largeImages.edges[0].node.childImageSharp.fluid}
              alt={
                largeImages.edges[2].node.base
                  .split(" - ")[1]
                  .split("large.jpg")[0]
              }
            />,
            <Img
              fluid={largeImages.edges[1].node.childImageSharp.fluid}
              alt={
                largeImages.edges[3].node.base
                  .split(" - ")[1]
                  .split("large.jpg")[0]
              }
            />,
            <Img
              fluid={largeImages.edges[2].node.childImageSharp.fluid}
              alt={
                largeImages.edges[3].node.base
                  .split(" - ")[1]
                  .split("large.jpg")[0]
              }
            />,
            <Img
              fluid={largeImages.edges[3].node.childImageSharp.fluid}
              alt={
                largeImages.edges[3].node.base
                  .split(" - ")[1]
                  .split("large.jpg")[0]
              }
            />,
          ]}
        />
        <TextContainer
          text={
            <p>
              A rebranding campaign was developed to present the new brand to
              Avenue Code employees. Videos and activities about each value were
              released through the course of 8 weeks, each featuring a value and
              it's associated color.
            </p>
          }
        />
        <ImageContainer
          caption="Branding video featured Bernardo Matos, Avenue Code Head of Design, while the design systems one featured myself."
          isSplitIn={2}
          image={
            <>
              <video controls poster={brandIntroductionPoster} width="100%">
                <source src={brandIntroduction} type="video/mp4" />
              </video>
              <video controls poster={brandSystemPoster} width="100%">
                <source src={brandSystem} type="video/mp4" />
              </video>
            </>
          }
          title="Why branding and design systems matter"
        />
        <TextContainer
          text={
            <p>
              One of the campaign's highlights was it's opening activity, where
              employees were encouraged to gift each other with cards featuring
              all eight brand values. It happened simultaneously around all 5
              Avenue Code offices, with the possibility of sending each other
              online cards as well.
            </p>
          }
        />
        <ImageContainer
          image={
            <video controls poster={brandOpeningActivityPoster} width="100%">
              <source src={brandOpeningActivity} type="video/mp4" />
            </video>
          }
          title="Rebranding opening activity"
        />
        <TextContainer
          text={
            <p>
              A redesign of the company's external channel started in late 2019,
              with its completion planned to mid 2020.
            </p>
          }
        />
        <TextContainer
          isHeader
          text={
            <>
              <h4 className="u-color-type-variant">Design Process—Stage 4</h4>
              <h2>Inspection</h2>
            </>
          }
        />
        <TextContainer
          text={
            <p>
              A brand identity survey is planned to validate how the new Avenue
              Code brand resonates both internally and externally. The survey's
              goal is to improve brand awareness and understand its strengths in
              order to better plan the next branding efforts. The survey is
              planned to go live in 2020.
            </p>
          }
        />
        <ProjectOutro
          text={
            <>
              <small>
                In this project, I collaborated with{" "}
                <a
                  href="https://www.linkedin.com/in/bernardolmatos/"
                  rel="no-follow"
                >
                  Bernardo Matos
                </a>{" "}
                and{" "}
                <a href="https://www.linkedin.com/in/hollyvw/" rel="no-follow">
                  Holly Camponez
                </a>{" "}
                during the Inspection and Ideation phases. Brand themes were
                designed by myself, while the deck guidelines were designed by
                Bernardo and myself.
              </small>
              <small>
                The Implementation stage was a product of teamwork by{" "}
                <a
                  href="https://www.linkedin.com/in/pollyannasousa/"
                  rel="no-follow"
                >
                  Pollyanna Souza
                </a>{" "}
                (planning and communication strategy) and myself (design system
                assets). Videos were were shot and edited by{" "}
                <a
                  href="https://www.linkedin.com/in/ingrid-ferraz-0b78a1168/"
                  rel="no-follow"
                >
                  Ingrid Ferraz
                </a>
                .
              </small>
            </>
          }
        />
      </article>
    </Layout>
  )
}

export const query = graphql`
  query rebrandingAvenueCodePageQuery {
    cover: file(
      name: { regex: "/.cover/" }
      relativeDirectory: { eq: "rebranding-avenue-code" }
    ) {
      ...coverImage
    }
    smallImages: allFile(
      filter: {
        name: { regex: "/.small/" }
        relativeDirectory: { eq: "rebranding-avenue-code" }
      }
      sort: { fields: name }
    ) {
      edges {
        node {
          ...smallImage
        }
      }
    }
    mediumImages: allFile(
      filter: {
        name: { regex: "/.medium/" }
        relativeDirectory: { eq: "rebranding-avenue-code" }
      }
      sort: { fields: name }
    ) {
      edges {
        node {
          ...mediumImage
        }
      }
    }
    largeImages: allFile(
      filter: {
        name: { regex: "/.large/" }
        relativeDirectory: { eq: "rebranding-avenue-code" }
      }
      sort: { fields: name }
    ) {
      edges {
        node {
          ...largeImage
        }
      }
    }
  }
`

export default RebrandingAvenueCodePage
