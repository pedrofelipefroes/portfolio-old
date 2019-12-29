import Fade from "react-reveal/Fade"
import PropTypes from "prop-types"
import React from "react"

import "./project-outro.scss"

const ProjectOutro = ({ text }) => {
  return (
    <div className="l-container__content--S c-project-outro">
      <Fade bottom>
        <small className="u-color-type-variant">
          <hr className="c-project-outro__divider" />
          {text}
        </small>
      </Fade>
    </div>
  )
}

ProjectOutro.propTypes = {
  text: PropTypes.node.isRequired,
}

export default ProjectOutro
