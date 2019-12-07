import PropTypes from "prop-types"
import React from "react"

const FeaturedSectionImage = ({ imageQuantity, children }) => {
  return (
    <figure
      className={
        imageQuantity
          ? "l-container__content--L c-featured-section-image c-featured-section-image--" +
            imageQuantity
          : "l-container__content--L c-featured-section-image"
      }
    >
      {children}
    </figure>
  )
}

FeaturedSectionImage.propTypes = {
  children: PropTypes.node.isRequired,
  imageQuantity: PropTypes.string,
}

export default FeaturedSectionImage
