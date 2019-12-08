import PropTypes from "prop-types"
import React from "react"

const ImageContainer = ({ imageQuantity, children }) => {
  return (
    <figure
      className={
        imageQuantity
          ? "l-container__content--L c-image-container c-image-container--" +
            imageQuantity
          : "l-container__content--L c-image-container"
      }
    >
      {children}
    </figure>
  )
}

ImageContainer.propTypes = {
  children: PropTypes.node.isRequired,
  imageQuantity: PropTypes.string,
}

export default ImageContainer
