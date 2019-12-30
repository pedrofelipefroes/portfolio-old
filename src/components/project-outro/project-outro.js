import Fade from "react-reveal/Fade"
import PropTypes from "prop-types"
import React from "react"

import "./project-outro.scss"

const ProjectOutro = ({ text }) => {
  return (
    <div className="u-content-container--L c-project-outro">
      <Fade bottom>
        <div className="c-project-outro__text-container u-color-type-variant">
          <hr className="c-project-outro__divider" />
          {text}
        </div>
      </Fade>
    </div>
  )
}

ProjectOutro.propTypes = {
  text: PropTypes.node.isRequired,
}

export default ProjectOutro
