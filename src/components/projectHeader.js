import PropTypes from "prop-types"
import React from "react"

const ProjectHeader = ({ children, projectData }) => {
  return (
    <header className="c-project-header">
      <figure className="c-project-header__img-backdrop">
        <div className="l-container__content--S">{children}</div>
      </figure>
      <section className="c-project-header__title">
        <div className="l-container__content--S">
          <h1 className="l-container__text--M">{projectData.title}</h1>
          <h3 className="l-container__text--M">{projectData.subtitle}</h3>
        </div>
      </section>

      <div className="l-container__content--S">
        <section className="c-project-header__details">
          {projectData.details.map(item => (
            <div className="c-project-header__details__content">
              <small>
                <strong>{item.title}</strong>
              </small>
              <small>{item.content}</small>
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
