import PropTypes from "prop-types"
import React from "react"
import Reveal from "react-reveal/Reveal"

import "./project-header.scss"

const ProjectHeader = ({ cover, details, subtitle, title }) => {
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
          {details.map(item => (
            <div className="c-project-header__details__content">
              <small>
                <strong>{item.title}</strong>
              </small>
              <small className="u-color-type-variant">{item.content}</small>
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
  details: PropTypes.object.isRequired,
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default ProjectHeader
