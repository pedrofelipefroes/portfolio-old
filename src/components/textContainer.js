import PropTypes from "prop-types"
import React from "react"

const TextContainer = ({ alignTo, children }) => {
  return (
    <div
      className={
        "l-container__content--S c-text-container c-text-container--" + alignTo
      }
    >
      <p className="l-container__text--M">{children}</p>
    </div>
  )
}

TextContainer.propTypes = {
  alignTo: PropTypes.string,
  children: PropTypes.node.isRequired,
}

TextContainer.defaultProps = {
  alignTo: "center",
}

export default TextContainer
