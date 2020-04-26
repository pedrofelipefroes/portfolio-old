import Fade from "react-reveal/Fade"
import PropTypes from "prop-types"
import React from "react"

import "./heading-2.scss"

const Heading2 = ({ children }) => {
  return (
    <div className="c-heading-2 u-content-container--L u-text-container u-text-container--is-header">
      <Fade delay={640}>
        <h2>{children}</h2>
      </Fade>
    </div>
  )
}

Heading2.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Heading2
