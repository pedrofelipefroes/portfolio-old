import PropTypes from "prop-types"
import React from "react"

const TextContainer = ({ children, header, isHighlighted }) => {
  return (
    <div
      className={
        isHighlighted
          ? "l-container__content--S c-text-container c-text-container--highlighted"
          : "l-container__content--S c-text-container"
      }
    >
      <h2 className="highlighted-type c-text-container__header">{header}</h2>
      <p className="l-container__text--M">{children}</p>
    </div>
  )
}

TextContainer.propTypes = {
  children: PropTypes.node.isRequired,
  header: PropTypes.string,
  isHighlighted: PropTypes.bool,
}

export default TextContainer
