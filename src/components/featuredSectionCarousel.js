import makeCarousel from "react-reveal/makeCarousel"
import PropTypes from "prop-types"
import React from "react"
import Slide from "react-reveal/Slide"

const FeaturedSectionCarousel = ({ images }) => {
  const CarouselUI = ({ children, handleClick, position, total }) => (
    <div className="c-featured-section-carousel">
      <figure className="c-featured-section-carousel__slide">{children}</figure>
      <span className="c-featured-section-carousel__dots">
        {Array(...Array(total)).map((val, index) => (
          <span
            className={
              index === position
                ? "c-featured-section-carousel__dots__item c-featured-section-carousel__dots__item--selected"
                : "c-featured-section-carousel__dots__item"
            }
            key={index}
            onClick={handleClick}
            data-position={index}
          ></span>
        ))}
      </span>
    </div>
  )

  const Carousel = makeCarousel(CarouselUI)

  function createSlides(slides) {
    return (
      <Carousel defaultWait={3000} maxTurns={0}>
        {slides.map(slide => (
          <Slide right>
            <div className="c-featured-section-carousel__slide-container">
              {slide}
            </div>
          </Slide>
        ))}
      </Carousel>
    )
  }

  return <>{createSlides(images)}</>
}

FeaturedSectionCarousel.propTypes = {
  images: PropTypes.array,
}

export default FeaturedSectionCarousel
