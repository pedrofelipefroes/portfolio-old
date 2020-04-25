import Fade from "react-reveal/Fade"
import PropTypes from "prop-types"
import React from "react"

const Heading3 = ({ children }) => {
  return (
    <div className="u-content-container--L u-text-container">
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
