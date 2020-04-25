import Fade from "react-reveal/Fade"
import PropTypes from "prop-types"
import React from "react"

import "./heading-3.scss"

const Heading3 = ({ children }) => {
  return (
    <div className="c-heading-3 u-content-container--L u-text-container">
      <Fade delay={640}>
        <h3>{children}</h3>
      </Fade>
    </div>
  )
}

Heading3.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Heading3
