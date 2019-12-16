import PropTypes from "prop-types"
import React from "react"

const ImageContainer = ({
  caption,
  children,
  hasFullWidth,
  hasMultipleImages,
}) => {
  return (
    <figure
      className={
        (hasFullWidth
          ? "l-container__content--L "
          : "l-container__content--S ") +
        (hasMultipleImages
          ? "c-image-container c-image-container--multiple"
          : "c-image-container")
      }
    >
      {children}
      {caption ? (
        <figcaption className="c-image-container__caption">
          <small className="l-container__text--S">{caption}</small>
        </figcaption>
      ) : (
        <></>
      )}
    </figure>
  )
}

ImageContainer.propTypes = {
  caption: PropTypes.string,
  children: PropTypes.node.isRequired,
  hasFullWidth: PropTypes.bool,
  hasMultipleImages: PropTypes.string,
}

ImageContainer.defaultProps = {
  hasFullWidth: false,
  hasMultipleImages: false,
}

export default ImageContainer
