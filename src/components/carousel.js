import makeCarousel from "react-reveal/makeCarousel"
import PropTypes from "prop-types"
import React from "react"
import Slide from "react-reveal/Slide"

const Carousel = ({ images }) => {
  const CarouselUI = ({ children, handleClick, position, total }) => (
    <div className="c-carousel">
      <figure className="c-carousel__slide">{children}</figure>
      <span className="c-carousel__dots">
        {Array(...Array(total)).map((val, index) => (
          <span
            className={
              index === position
                ? "c-carousel__dots__item c-carousel__dots__item--selected"
                : "c-carousel__dots__item"
            }
            key={index}
            onClick={handleClick}
            data-position={index}
          ></span>
        ))}
      </span>
    </div>
  )

  const CarouselContainer = makeCarousel(CarouselUI)

  function createSlides(slides) {
    return (
      <CarouselContainer defaultWait={3000} maxTurns={0}>
        {slides.map(slide => (
          <Slide right>
            <div className="c-carousel__slide-container">{slide}</div>
          </Slide>
        ))}
      </CarouselContainer>
    )
  }

  return <>{createSlides(images)}</>
}

Carousel.propTypes = {
  images: PropTypes.array,
}

export default Carousel
