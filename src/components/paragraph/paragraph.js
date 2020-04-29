import Fade from "react-reveal/Fade"
import PropTypes from "prop-types"
import React from "react"

const Paragraph = ({ children }) => {
  return (
    <div className="u-content-container--L u-text-container">
      <Fade delay={640}>
        <p>{children}</p>
      </Fade>
    </div>
  )
}

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Paragraph
