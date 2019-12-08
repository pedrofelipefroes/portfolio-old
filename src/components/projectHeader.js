import PropTypes from "prop-types"
import React from "react"

const ProjectHeader = ({ children, projectData }) => {
  return (
    <header>
      <figure className="c-project-header__img-backdrop">
        <div className="l-container__content--S">{children}</div>
      </figure>
      <div className="c-project-header l-container__content--S">
        <h1>{projectData.title}</h1>
        <h3 className="l-container__text--L">{projectData.subtitle}</h3>
        <section className="c-project-header__section">
          <h2>Context</h2>
          <div className="c-project-header__section__content">
            {projectData.context.map(item => (
              <div className="c-project-header__section__content__item">
                <h3 className="highlighted-type">
                  <strong>{item.title}</strong>
                </h3>
                <p>{item.content}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="c-project-header__section">
          <h2>Process</h2>
          <div className="c-project-header__section__content">
            {projectData.process.map(item => (
              <div className="c-project-header__section__content__item">
                <h3 className="highlighted-type">
                  <strong>{item.title}</strong>
                </h3>
                <p>{item.content}</p>
              </div>
            ))}
          </div>
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
