import { Link, animateScroll as scroll } from "react-scroll"
import Fade from "react-reveal/Fade"
import React from "react"
import SEO from "../components/seo"

import FeaturedCard from "../components/featuredCard"
import Layout from "../components/layout"
import NavigationLink from "../components/navigationLink"

import "../styles/index.scss"

const IndexPage = () => {
  let featuredProjects = [
    {
      title: "Rebranding Avenue Code",
      subtitle: "A new identify for the global technology consulting agency.",
      img: "/featured-work/rebranding-ac.jpg",
      url: "/rebranding-avenue-code",
    },
    {
      title: "Responsive Design Insights",
      subtitle:
        "Why an international large-scale e-commerce should invest in responsiveness across it’s product.",
      img: "/featured-work/rebranding-ac.jpg",
      url: "/responsive-design-insights",
    },
  ]

  return (
    <Layout hasNav={false} className="p-index">
      <SEO title="Portfolio. " />
      <header className="p-index__header">
        <section className="p-index__header__title">
          <Fade cascade>
            <h1>
              Designer<span className="highlighted-type">+</span>
            </h1>
            <h1>
              Developer<span className="highlighted-type">+</span>
            </h1>
            <h1>Marketer</h1>
          </Fade>
        </section>
        <section className="p-index__header__headline">
          <Fade top delay={1500} duration={2000} distance={"24px"}>
            <h1>
              <span className="highlighted-type">I am </span>Froes
            </h1>
          </Fade>
          <Fade top delay={2000} duration={2400} distance={"24px"}>
            <h3>
              and I love to develop cohesive user experiences through
              comprehensive design systems.
            </h3>
          </Fade>
        </section>
        <section className="p-index__header__links">
          <Fade delay={2500} duration={2000}>
            <NavigationLink label="About" to="/about" />
          </Fade>
          <Fade delay={2750} duration={2000}>
            <NavigationLink label="Showcase" to="/showcase" />
          </Fade>
          <Fade delay={3000} duration={2000}>
            <Link
              to="work-0"
              smooth={true}
              className="p-index__header__links__featured c-navigation-link highlighted-type"
            >
              <strong className="c-navigation-link__label">
                Featured Work
              </strong>
              <svg
                className="p-index__header__links__featured__arrow"
                width="24px"
                height="48px "
                viewBox="0 0 24 48"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect id="line" width="2" height="16" x="11.5" y="4" />
                <g id="beak">
                  <rect
                    width="8"
                    height="2"
                    x="0"
                    y="0"
                    transform="translate(12.5, 18) rotate(135) translate(-12.5, -13) translate(7.5, 10)"
                  />
                  <rect
                    width="2"
                    height="8"
                    x="6"
                    y="0"
                    transform="translate(12.5, 18) rotate(135) translate(-12.5, -13) translate(7.5, 10)"
                  />
                </g>
              </svg>
            </Link>
          </Fade>
        </section>
      </header>
      <div className="p-index__featured l-container__content--L">
        {featuredProjects.map((project, index) => (
          <FeaturedCard
            id={index}
            title={project.title}
            subtitle={project.subtitle}
            img={project.img}
            url={project.url}
          />
        ))}
      </div>
    </Layout>
  )
}

export default IndexPage
