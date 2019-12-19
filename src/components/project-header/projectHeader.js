import PropTypes from "prop-types"
import React from "react"

import "./project-header.scss"

const ProjectHeader = ({ children, projectData }) => {
  return (
    <header className="c-project-header">
      <section className="c-project-header__title l-container__content--S">
        <h1 className="l-container__text--M">{projectData.title}</h1>
        <h3 className="l-container__text--M u-color-type-variant">
          {projectData.subtitle}
        </h3>
      </section>
      <figure className="c-project-header__cover">
        <div className="c-project-header__cover__content">{children}</div>
      </figure>
      <div className="l-container__content--S">
        <section className="c-project-header__details">
          {projectData.details.map(item => (
            <div className="c-project-header__details__content">
              <small>
                <em>
                  <strong className="u-color-type-variant">
                    {item.title}:{" "}
                  </strong>
                  {item.content}
                </em>
              </small>
            </div>
          ))}
        </section>
      </div>
    </header>
  )
}

ProjectHeader.propTypes = {
  children: PropTypes.node.isRequired,
  projectData: PropTypes.object,
}

export default ProjectHeader
