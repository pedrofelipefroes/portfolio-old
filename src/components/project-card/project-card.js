import Fade from "react-reveal/Fade"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import React from "react"
import Slide from "react-reveal/Slide"

import NavigationLink from "../navigation-link/navigation-link"

import "./project-card.scss"

const ProjectCard = ({
  activity,
  headline,
  highlightColor,
  img,
  index,
  path,
  title,
}) => {
  return (
    <section className="c-project-card">
      <h2 className="c-project-card__title">{title}</h2>
      <p className="c-project-card__headline">
        <strong>{headline}</strong>
      </p>
      <NavigationLink
        className="p-index__navigation-link"
        hasArrow
        label="More"
        to={path}
      />
    </section>
  )
}

ProjectCard.propTypes = {
  activity: PropTypes.string,
  headline: PropTypes.string,
  img: PropTypes.object,
  path: PropTypes.string,
  title: PropTypes.string,
}

export default ProjectCard
