import Fade from "react-reveal/Fade"
import PropTypes from "prop-types"
import React from "react"

import "./project-summary.scss"

const ProjectSummary = ({ outline, process, results, role }) => {
  return (
    <section className="c-project-summary u-content-container--L">
      <div className="c-project-summary__intro">
        <div className="c-project-summary__role">
          {role.map(item => (
            <Fade delay={640}>
              <small key={item}>{item}</small>
            </Fade>
          ))}
        </div>
        <div className="c-project-summary__outline-and-results">
          <div className="c-project-summary__outline">
            {outline.map((item, index) => (
              <div className="c-project-summary__outline__item" key={item}>
                <Fade delay={640}>
                  <h3>{["Challenge", "Solution", "Results"][index]}</h3>
                  <p>{item}</p>
                </Fade>
              </div>
            ))}
          </div>
          <ul className="c-project-summary__results">
            {results.map(item => (
              <li key={item}>
                <Fade delay={640}>
                  <p>
                    <strong>{item[0]}</strong>
                  </p>
                  <small className="u-font-weight--normal">{item[1]}</small>
                </Fade>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <h2 className="c-project-summary__process__header">
        Solution Process <br />
        &amp; Deliverables
      </h2>
      <div className="c-project-summary__process">
        {process.map((item, index) => (
          <Fade delay={640 + index * 100}>
            <div
              key={item}
              className={
                `c-project-summary__process__item c-project-summary__process__item--` +
                (index + 1)
              }
            >
              <h3 className="c-project-summary__process__item__label">
                {index + 1}
              </h3>
              <div className="c-project-summary__process__item__content">
                <h3>{item[0]}</h3>
                <small className="u-color--dark-grey">
                  Solution Stage {index + 1}
                </small>
                <small className="u-font-weight--normal">{item[1]}</small>
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </section>
  )
}

ProjectSummary.propTypes = {
  outline: PropTypes.array.isRequired,
  process: PropTypes.array.isRequired,
  results: PropTypes.array,
  role: PropTypes.array.isRequired,
}

export default ProjectSummary
