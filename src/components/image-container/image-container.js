import Fade from "react-reveal/Fade"
import PropTypes from "prop-types"
import React from "react"

import "./image-container.scss"

const ImageContainer = ({ caption, image, hasSize, isSplitIn, title }) => {
  return (
    <>
      {title ? (
        <Fade bottom>
          <div className="c-image-container__title u-content-container--L">
            <p>
              <strong>{title}</strong>
            </p>
          </div>
        </Fade>
      ) : null}
      <figure
        className={
          "c-image-container" +
          (isSplitIn ? " c-image-container--" + `${isSplitIn}` : "") +
          (hasSize ? " u-content-container--" + `${hasSize}` : "")
        }
      >
        <div className="c-image-container__image">{image}</div>
      </figure>
      {caption ? (
        <Fade bottom>
          <figcaption className="c-image-container__caption u-content-container--L">
            <small className="u-color-type-variant">{caption}</small>
          </figcaption>
        </Fade>
      ) : null}
    </>
  )
}

ImageContainer.propTypes = {
  caption: PropTypes.string,
  image: PropTypes.node.isRequired,
  hasSize: PropTypes.string,
  isSplitIn: PropTypes.number,
  title: PropTypes.string,
}

ImageContainer.defaultProps = {
  hasSize: "L",
}

export default ImageContainer
