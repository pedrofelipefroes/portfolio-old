import PropTypes from "prop-types"
import React from "react"

const FeaturedSectionText = ({ alignTo, children }) => {
  return (
    <div
      className={
        "l-container__content--S c-featured-section-text c-featured-section-text--" +
        alignTo
      }
    >
      <p className="l-container__text--M">{children}</p>
    </div>
  )
}

FeaturedSectionText.propTypes = {
  alignTo: PropTypes.string,
  children: PropTypes.node.isRequired,
}

FeaturedSectionText.defaultProps = {
  alignTo: "center",
}

export default FeaturedSectionText
