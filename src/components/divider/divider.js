import PropTypes from "prop-types"
import React from "react"

import "./divider.scss"

const Divider = ({ label, number }) => {
  return (
    <div className="c-divider">
      <div className="u-content-container--L">
        <h4 className="highlight">{label}</h4>
        <hr className="c-divider" />
        <span className="highlight">{number}</span>
      </div>
    </div>
  )
}

Divider.propTypes = {
  label: PropTypes.string,
  number: PropTypes.string,
}

export default Divider
