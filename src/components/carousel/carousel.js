import { Carousel as ResponsiveCarousel } from "react-responsive-carousel"
import classnames from "classnames"
import Fade from "react-reveal/Fade"
import PropTypes from "prop-types"
import React from "react"

import "react-responsive-carousel/lib/styles/carousel.min.css"
import "./carousel.scss"

const Carousel = ({ caption, children, size }) => {
  console.log(children)
  return (
    <div
      className={classnames("c-carousel", {
        "c-carousel--has-caption": caption,
        [`c-carousel--${size}`]: size,
      })}
    >
      <ResponsiveCarousel
        emulateTouch
        infiniteLoop
        interval={5000}
        showArrows
        showStatus={false}
        showThumbs={false}
      >
        {children}
      </ResponsiveCarousel>
      {caption ? (
        <Fade delay={640}>
          <small className="caption-2 c-carousel__caption">{caption}</small>
        </Fade>
      ) : null}
    </div>
  )
}

Carousel.propTypes = {
  caption: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  size: PropTypes.string,
}

Carousel.defaultProps = {
  size: "L",
}

export default Carousel

// const ImgCarousel = ({ caption, hasSize, images, title }) => {
//   return (
//     <>
//       {title ? (
//         <Fade bottom>
//           <div className="c-img-carousel__title u-content-container--L">
//             <p>
//               <strong>{title}</strong>
//             </p>
//           </div>
//         </Fade>
//       ) : null}
//       <section
//         className={
//           "c-img-carousel" +
//           (hasSize === "XL"
//             ? " u-content-container--XL"
//             : " u-content-container--L")
//         }
//       >
//         <Carousel
//           className={
//             hasSize === "M"
//               ? "c-img-carousel__container u-content-container--M"
//               : "c-img-carousel__container"
//           }
//           emulateTouch={true}
//           interval={5000}
//           showArrows={false}
//           showStatus={false}
//           showThumbs={false}
//         >
//           {images.map(item => item)}
//         </Carousel>
//       </section>
//       {caption ? (
//         <Fade bottom>
//           <div className="c-img-carousel__caption u-content-container--L">
//             <small className="u-color-type-variant">{caption}</small>
//           </div>
//         </Fade>
//       ) : null}
//     </>
//   )
// }
