import Fade from "react-reveal/Fade"
import PropTypes from "prop-types"
import React from "react"

import "./img-container.scss"

const ImgContainer = ({ caption, image, hasSize, isSplitIn, title }) => {
  return (
    <>
      {title ? (
        <Fade bottom>
          <div className="c-img-container__title u-content-container--L">
            <p>
              <strong>{title}</strong>
            </p>
          </div>
        </Fade>
      ) : null}
      <figure
        className={
          "c-img-container" +
          (isSplitIn ? ` c-img-container--${isSplitIn}` : "") +
          (hasSize ? ` u-content-container--${hasSize}` : "")
        }
      >
        <div className="c-img-container__image">{image}</div>
      </figure>
      {caption ? (
        <Fade bottom>
          <figcaption className="c-img-container__caption u-content-container--L">
            <small className="u-color-type-variant">{caption}</small>
          </figcaption>
        </Fade>
      ) : null}
    </>
  )
}

ImgContainer.propTypes = {
  caption: PropTypes.string,
  image: PropTypes.node.isRequired,
  hasSize: PropTypes.string,
  isSplitIn: PropTypes.number,
  title: PropTypes.string,
}

ImgContainer.defaultProps = {
  hasSize: "L",
}

export default ImgContainer
