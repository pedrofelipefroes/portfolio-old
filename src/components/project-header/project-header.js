import PropTypes from "prop-types"
import React from "react"
import Reveal from "react-reveal/Reveal"

import "./project-header.scss"

const ProjectHeader = ({ cover, details, subtitle, title }) => {
  const detailsTitles = ["Activity", "Design Process", "Client", "Timeline"]

  return (
    <header className="c-project-header">
      <figure className="c-project-header__cover u-content-container--XL">
        <Reveal>{cover}</Reveal>
      </figure>
      <section className="c-project-header__title u-content-container--L">
        <h1>{title}</h1>
      </section>
      <div className="c-project-header__details-and-subtitle u-content-container--L">
        <section className="c-project-header__details">
          {details.map((item, index) => (
            <div className="c-project-header__details__content">
              <small>
                <strong>{detailsTitles[index]}</strong>
              </small>
              <small className="u-color-type-variant">{item}</small>
            </div>
          ))}
        </section>
        <section className="c-project-header__subtitle">
          <h3>{subtitle}</h3>
        </section>
      </div>
    </header>
  )
}

ProjectHeader.propTypes = {
  cover: PropTypes.node.isRequired,
  details: PropTypes.array.isRequired,
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default ProjectHeader
