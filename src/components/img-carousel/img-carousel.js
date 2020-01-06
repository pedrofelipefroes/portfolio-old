import { Carousel } from "react-responsive-carousel"
import Fade from "react-reveal/Fade"
import PropTypes from "prop-types"
import React from "react"

import "react-responsive-carousel/lib/styles/carousel.min.css"
import "./img-carousel.scss"

const ImgCarousel = ({ caption, hasSize, images, title }) => {
  return (
    <>
      {title ? (
        <Fade bottom>
          <div className="c-img-carousel__title u-content-container--L">
            <p>
              <strong>{title}</strong>
            </p>
          </div>
        </Fade>
      ) : null}
      <section
        className={
          "c-img-carousel" +
          (hasSize === "XL"
            ? " u-content-container--XL"
            : " u-content-container--L")
        }
      >
        <Carousel
          className={
            hasSize === "M"
              ? "c-img-carousel__container u-content-container--M"
              : "c-img-carousel__container"
          }
          emulateTouch={true}
          interval={5000}
          showArrows={false}
          showStatus={false}
          showThumbs={false}
        >
          {images.map(item => item)}
        </Carousel>
      </section>
      {caption ? (
        <Fade bottom>
          <div className="c-img-carousel__caption u-content-container--L">
            <small className="u-color-type-variant">{caption}</small>
          </div>
        </Fade>
      ) : null}
    </>
  )
}

ImgCarousel.propTypes = {
  caption: PropTypes.string,
  hasSize: PropTypes.string,
  images: PropTypes.array.isRequired,
}

export default ImgCarousel
