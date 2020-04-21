import Fade from "react-reveal/Fade"
import PropTypes from "prop-types"
import React from "react"

import "./paragraph.scss"

const Paragraph = ({ children }) => {
  return (
    <div className="c-paragraph u-content-container--L u-text-container">
      <Fade delay={500}>
        <p>{children}</p>
      </Fade>
    </div>
  )
}

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Paragraph
