import Img from "gatsby-image"
import React from "react"

import Carousel from "../components/carousel"
import ImageContainer from "../components/imageContainer"
import Layout from "../components/layout"
import ProjectHeader from "../components/projectHeader"
import SEO from "../components/seo"
import TextContainer from "../components/textContainer"

import "../styles/index.scss"

const RebrandingAvenueCodePage = ({ data }) => {
  let projectData = {
    title: "Rebranding Avenue Code",
    subtitle:
      "As this San Francisco IT consulting company grew and opened offices around the world, a rebranding was necessary to resonate its identity to a global audience.",
    details: [
      {
        title: "Activity",
        content:
          "Brand Design; actively worked on the project from conception to execution",
      },
      { title: "Client", content: "Avenue Code" },
      {
        title: "Timeline",
        content: "January—October 2019",
      },
    ],
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

  let brandShowcase = [
    <Img fluid={data.brandShowcase1.childImageSharp.fluid} />,
    <Img fluid={data.brandShowcase2.childImageSharp.fluid} />,
    <Img fluid={data.brandShowcase3.childImageSharp.fluid} />,
    <Img fluid={data.brandShowcase4.childImageSharp.fluid} />,
    <Img fluid={data.brandShowcase5.childImageSharp.fluid} />,
  ]

  return (
    <Layout
      navHasAbout
      navHasShowcase
      className="l-project l-project--rebranding-avenue-code"
    >
      <SEO title="Rebranding Avenue Code" />
      <ProjectHeader projectData={projectData}>
        <Img
          fluid={data.header.childImageSharp.fluid}
          alt="Rebranding Avenue Code project header with Avenue Code logo."
        />
      </ProjectHeader>
      <article className="l-project__content">
        <TextContainer>
          Avenue Code started off as an IT consultancy company, with much of its
          branding being underdeveloped. As the company grew, its first brand
          guide was designed in 2017 to provide a framework for business
          development personnel and marketers alike.
        </TextContainer>
        <TextContainer>
          Two years later, Avenue Code further expansion led it to a global
          playground, and its brand felt limited in its new market context. A
          rebranding was planned to translate the company's diverse set of
          solutions and consultants, a process which started off by framing the
          challenge:
        </TextContainer>
        <TextContainer>
          <strong>
            How might we redesign Avenue Code brand to become more scalable yet
            cohesive to the company’s spirit?
          </strong>
        </TextContainer>
        <TextContainer>
          A four-stage process followed, keeping scalability and cohesiveness as
          defining factors for the new brand identity.
        </TextContainer>
        <TextContainer isHighlighted header="Process">
          <strong className="c-text-container__subheader">Inspiration</strong>
          Understanding previous brand strengths and constraints &amp; setting
          reach and belonging goals for the new one.
          <strong className="c-text-container__subheader">Ideation</strong>
          Creating mood boards &amp; exploring colours, type, and themes within
          the established goals.
          <strong className="c-text-container__subheader">
            Implementation
          </strong>
          Developing style guides, templates, a branding system, and a rollout
          internal campaign for employees.
          <strong className="c-text-container__subheader">Inspection</strong>
          Designing a market survey to check internal and external brand
          perception and validate goals.
        </TextContainer>
        <TextContainer>
          The solution started-off by mapping Avenue Code current and ideal
          brand identities. Pain points from the previous branding were
          identified, as well as possibilities for expansion: taking the street
          art inspiration further and reflecting the company’s growth were one
          of the defined goals.
        </TextContainer>
        <ImageContainer
          hasMultipleImages
          caption="Previous branding featured a limited amount of colours—each associated with an internal squad—and Lato as its typeface."
        >
          <Img
            fluid={data.previousBranding1.childImageSharp.fluid}
            alt="Avenue Code previous branding wallpaper with San Francisco' Golden Gate Bridge at the background."
          />
          <Img
            fluid={data.previousBranding2.childImageSharp.fluid}
            alt="Avenue Code previous brand guide cards for voice and tone guidelines, logo usage, colors, and typography."
          />
          <Img
            fluid={data.previousBranding3.childImageSharp.fluid}
            alt="Avenue Code previous brand example with colorful gradient splatters."
          />
          <Img
            fluid={data.previousBranding4.childImageSharp.fluid}
            alt="Avenue Code previous brand example of social media post featuring Lato typography and blue-to-purple gradient."
          />
        </ImageContainer>
        <TextContainer>
          Eight new base colours arose—a standout among other monochromatic tech
          companies—and each of them was named and associated with a value
          Avenue Code. This new colourful spectrum is paramount to translate
          Avenue Code new global playground, its growing solution gamut, and how
          diverse its teams have become.
        </TextContainer>
        <ImageContainer caption="Brand colors were increased from 4 to 8 and were associated with the company's values instead of its squads.">
          <Img
            fluid={data.moodBoard.childImageSharp.fluid}
            alt="New Avenue Code brand mood board with four quadrants: playful, organic, professional, and technologic. Colors extracted from the mood board: Mahogany Brown, Viridian Green, Cerulean Blue, Cool Neutral, Deep Violet, Millennial Pink, Coral Red, and Sunshine Yellow."
          />
        </ImageContainer>
        <TextContainer>
          While Avenue Code logo was kept intact due to strategic reasons, the
          brand typeface changed from Lato to match the brand urban thématique.
          The new base font family, Overpass, is inspired by highway signage and
          it’s an open-source typography effort. It’s curved-edge lettering can
          translate our playful and professional voice. The company's logo type,
          Balboa, was elected as a secondary type for select billboards and
          headlines.
        </TextContainer>
        <ImageContainer>
          <svg
            className="l-project--rebranding-avenue-code__typography"
            width="975px"
            height="321px"
            viewBox="0 0 975 321"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                x1="50%"
                y1="0%"
                x2="50%"
                y2="100%"
                id="linearGradient"
              >
                <stop stop-color="#0095F4" offset="0%">
                  <animate
                    attributeName="stop-color"
                    values="#0095F4; #37C18D; #AA8B6F; #F5AA38; #FF5166; #FF61C9; #B170FF; #889395; #0095F4"
                    dur="8s"
                    repeatCount="indefinite"
                  ></animate>
                </stop>
                <stop stop-color="#37C18D" offset="15.0482955%">
                  <animate
                    attributeName="stop-color"
                    values="#37C18D; #AA8B6F; #F5AA38; #FF5166; #FF61C9; #B170FF; #889395; #0095F4; #37C18D"
                    dur="8s"
                    repeatCount="indefinite"
                  ></animate>
                </stop>
                <stop stop-color="#AA8B6F" offset="30.2585227%">
                  <animate
                    attributeName="stop-color"
                    values="#AA8B6F; #F5AA38; #FF5166; #FF61C9; #B170FF; #889395; #0095F4; #37C18D; #AA8B6F"
                    dur="8s"
                    repeatCount="indefinite"
                  ></animate>
                </stop>
                <stop stop-color="#F5AA38" offset="44.3238636%">
                  <animate
                    attributeName="stop-color"
                    values="#F5AA38; #FF5166; #FF61C9; #B170FF; #889395; #0095F4; #37C18D; #AA8B6F; #F5AA38"
                    dur="8s"
                    repeatCount="indefinite"
                  ></animate>
                </stop>
                <stop stop-color="#FF5166" offset="60.6221591%">
                  <animate
                    attributeName="stop-color"
                    values="#FF5166; #FF61C9; #B170FF; #889395; #0095F4; #37C18D; #AA8B6F; #F5AA38; #FF5166"
                    dur="8s"
                    repeatCount="indefinite"
                  ></animate>
                </stop>
                <stop stop-color="#FF61C9" offset="75.1420455%">
                  <animate
                    attributeName="stop-color"
                    values="#FF61C9; #B170FF; #889395; #0095F4; #37C18D; #AA8B6F; #F5AA38; #FF5166; #FF61C9"
                    dur="8s"
                    repeatCount="indefinite"
                  ></animate>
                </stop>
                <stop stop-color="#B170FF" offset="87.7045455%">
                  <animate
                    attributeName="stop-color"
                    values="#B170FF; #889395; #0095F4; #37C18D; #AA8B6F; #F5AA38; #FF5166; #FF61C9; #B170FF"
                    dur="8s"
                    repeatCount="indefinite"
                  ></animate>
                </stop>
                <stop stop-color="#889395" offset="100%">
                  <animate
                    attributeName="stop-color"
                    values="#889395; #0095F4; #37C18D; #AA8B6F; #F5AA38; #FF5166; #FF61C9; #B170FF; #889395"
                    dur="8s"
                    repeatCount="indefinite"
                  ></animate>
                </stop>
              </linearGradient>
            </defs>
            <g
              class="brand-elements__typography"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              <g fill-rule="nonzero">
                <path
                  d="M213.866667,316 L193.066667,261.6 L87.8666667,261.6 L67.0666667,316 L0.666666667,316 L111.066667,36 L169.466667,36 L280.266667,316 L213.866667,316 Z M172.666667,205.6 L148.666667,145.2 C145.866667,138.4 142.266667,128.8 140.266667,121.6 C138.666667,128.8 134.666667,138.4 131.866667,145.2 L107.866667,205.6 L172.666667,205.6 Z M424,316 L424,300.8 C414,311.6 399.6,320.8 373.2,320.8 C330,320.8 296.4,298.4 296.4,253.6 C296.4,208.8 338.8,188 379.2,188 C399.2,188 412.4,190 424,195.2 L424,184 C424,164.8 410.8,155.2 390.8,155.2 C368,155.2 346.8,162.4 325.2,176.8 L307.2,132.4 C328.4,118 358.8,106.8 394.8,106.8 C432.8,106.8 481.6,116.4 481.6,186.8 L481.6,316 L424,316 Z M384.4,272 C402,272 414.4,265.2 424,257.6 L424,239.2 C413.2,236 402,234.4 389.2,234.4 C369.2,234.4 353.2,239.2 353.2,254 C353.2,265.2 364.4,272 384.4,272 Z M634.933333,320 C546.933333,320 516.933333,245.2 516.933333,176 C516.933333,112.4 547.733333,32 634.933333,32 C688.933333,32 724.133333,65.2 737.733333,99.2 L683.333333,123.6 C669.333333,102.4 656.933333,90.4 634.933333,90.4 C593.333333,90.4 580.133333,137.6 580.133333,176 C580.133333,215.6 596.533333,261.6 634.933333,261.6 C655.333333,261.6 669.733333,246.8 682.533333,225.6 L738.133333,246.4 C718.133333,289.6 686.533333,320 634.933333,320 Z M852.666667,320.8 C795.466667,320.8 757.066667,281.2 757.066667,214 C757.066667,148 795.466667,106.8 852.666667,106.8 C896.266667,106.8 928.266667,126.4 942.266667,170.8 L887.066667,188.8 C881.066667,173.2 869.466667,162.4 853.466667,162.4 C831.866667,162.4 815.866667,183.6 815.866667,214 C815.866667,244.8 831.866667,265.2 852.666667,265.2 C869.466667,265.2 881.066667,254.8 887.066667,235.6 L942.666667,251.6 C929.066667,298 899.066667,320.8 852.666667,320.8 Z"
                  id="colored-typography"
                  fill="url(#linearGradient)"
                ></path>
                <path
                  d="M245.866667,284 L225.066667,229.6 L119.866667,229.6 L99.0666667,284 L32.6666667,284 L143.066667,4 L201.466667,4 L312.266667,284 L245.866667,284 Z M204.666667,173.6 L180.666667,113.2 C177.866667,106.4 174.266667,96.8 172.266667,89.6 C170.666667,96.8 166.666667,106.4 163.866667,113.2 L139.866667,173.6 L204.666667,173.6 Z M456,284 L456,268.8 C446,279.6 431.6,288.8 405.2,288.8 C362,288.8 328.4,266.4 328.4,221.6 C328.4,176.8 370.8,156 411.2,156 C431.2,156 444.4,158 456,163.2 L456,152 C456,132.8 442.8,123.2 422.8,123.2 C400,123.2 378.8,130.4 357.2,144.8 L339.2,100.4 C360.4,86 390.8,74.8 426.8,74.8 C464.8,74.8 513.6,84.4 513.6,154.8 L513.6,284 L456,284 Z M416.4,240 C434,240 446.4,233.2 456,225.6 L456,207.2 C445.2,204 434,202.4 421.2,202.4 C401.2,202.4 385.2,207.2 385.2,222 C385.2,233.2 396.4,240 416.4,240 Z M666.933333,288 C578.933333,288 548.933333,213.2 548.933333,144 C548.933333,80.4 579.733333,0 666.933333,0 C720.933333,0 756.133333,33.2 769.733333,67.2 L715.333333,91.6 C701.333333,70.4 688.933333,58.4 666.933333,58.4 C625.333333,58.4 612.133333,105.6 612.133333,144 C612.133333,183.6 628.533333,229.6 666.933333,229.6 C687.333333,229.6 701.733333,214.8 714.533333,193.6 L770.133333,214.4 C750.133333,257.6 718.533333,288 666.933333,288 Z M884.666667,288.8 C827.466667,288.8 789.066667,249.2 789.066667,182 C789.066667,116 827.466667,74.8 884.666667,74.8 C928.266667,74.8 960.266667,94.4 974.266667,138.8 L919.066667,156.8 C913.066667,141.2 901.466667,130.4 885.466667,130.4 C863.866667,130.4 847.866667,151.6 847.866667,182 C847.866667,212.8 863.866667,233.2 884.666667,233.2 C901.466667,233.2 913.066667,222.8 919.066667,203.6 L974.666667,219.6 C961.066667,266 931.066667,288.8 884.666667,288.8 Z"
                  id="front-typography"
                  fill="#232627"
                ></path>
              </g>
            </g>
          </svg>
        </ImageContainer>
        <TextContainer>
          Urban-themed art became an inspiration to create textures and
          patterns, being the motif of our documents, presentations, and
          products. Crosswalk and subway-inspired artworks were designed as the
          first two brand themes, and were further escalated both on digital and
          physical mediums.
        </TextContainer>
        <ImageContainer hasFullWidth hasMultipleImages>
          <Img
            fluid={data.brandTheme1.childImageSharp.fluid}
            alt="Artwork featuring a crosswalks with Avenue Code solutions."
          />
          <Img
            fluid={data.brandTheme2.childImageSharp.fluid}
            alt="Artwork featuring a subway map with the new branding colors and Avenue Code tech specialties as subway stations."
          />
        </ImageContainer>
        <Carousel images={brandShowcase}></Carousel>
        <TextContainer>
          A internal rebranding rollout campaign was planned for employees to
          embrace the company new identity. The campaign featured emails,
          videos, in-brand notepads, and dynamics amongst the Avenue Coders. A
          validation survey, as well as a redesign for the company’s external
          channels, are some of the ongoing tasks to wrap up the project.
        </TextContainer>
        <ImageContainer caption="The rebranding rollout started with Avenue Coders gifting each other with one of the new 8 brand values. Shot and edited by Ingrid Ferraz.">
          <video controls width="100%">
            <source
              src="/rebranding-avenue-code/brand-video.mp4"
              type="video/mp4"
            />
          </video>
        </ImageContainer>
      </article>
    </Layout>
  )
}

export const fullImage = graphql`
  fragment fullImage on File {
    childImageSharp {
      fluid(maxWidth: 1440, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const quarterImage = graphql`
  fragment quarterImage on File {
    childImageSharp {
      fluid(maxWidth: 768, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const query = graphql`
  query {
    header: file(
      relativePath: { eq: "rebranding-avenue-code/rebranding-avenue-code.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 959, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    previousBranding1: file(
      relativePath: { eq: "rebranding-avenue-code/previous-branding-1.jpg" }
    ) {
      ...quarterImage
    }
    previousBranding2: file(
      relativePath: { eq: "rebranding-avenue-code/previous-branding-2.jpg" }
    ) {
      ...quarterImage
    }
    previousBranding3: file(
      relativePath: { eq: "rebranding-avenue-code/previous-branding-3.jpg" }
    ) {
      ...quarterImage
    }
    previousBranding4: file(
      relativePath: { eq: "rebranding-avenue-code/previous-branding-4.jpg" }
    ) {
      ...quarterImage
    }
    moodBoard: file(
      relativePath: { eq: "rebranding-avenue-code/mood-board.jpg" }
    ) {
      ...fullImage
    }
    brandTheme1: file(
      relativePath: { eq: "rebranding-avenue-code/brand-theme-1.jpg" }
    ) {
      ...quarterImage
    }
    brandTheme2: file(
      relativePath: { eq: "rebranding-avenue-code/brand-theme-2.jpg" }
    ) {
      ...quarterImage
    }
    brandShowcase1: file(
      relativePath: { eq: "rebranding-avenue-code/brand-showcase-1.jpg" }
    ) {
      ...fullImage
    }
    brandShowcase2: file(
      relativePath: { eq: "rebranding-avenue-code/brand-showcase-2.jpg" }
    ) {
      ...fullImage
    }
    brandShowcase3: file(
      relativePath: { eq: "rebranding-avenue-code/brand-showcase-3.jpg" }
    ) {
      ...fullImage
    }
    brandShowcase4: file(
      relativePath: { eq: "rebranding-avenue-code/brand-showcase-4.jpg" }
    ) {
      ...fullImage
    }
    brandShowcase5: file(
      relativePath: { eq: "rebranding-avenue-code/brand-showcase-5.jpg" }
    ) {
      ...fullImage
    }
  }
`

export default RebrandingAvenueCodePage
