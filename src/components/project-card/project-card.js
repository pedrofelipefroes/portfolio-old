import Fade from "react-reveal/Fade"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import React from "react"
import Slide from "react-reveal/Slide"

import NavigationLink from "../navigation-link/navigation-link"

import "./project-card.scss"

const ProjectCard = ({ activity, highlightColor, img, index, path, title }) => {
  return (
    <section className="c-project-card">
      <Fade delay={1000} duration={2000}>
        <span
          className="c-project-card__highlight--S"
          style={{ backgroundColor: highlightColor }}
        >
          <Fade delay={1000} duration={2000} top>
            <div className="c-project-card__highlight__text">{index}</div>
          </Fade>
        </span>
      </Fade>
      <div className="c-project-card__img-and-content3">
        <Fade>
          <Img className="c-project-card__img" fluid={img} />
        </Fade>
        <Slide left>
          <span
            className="c-project-card__highlight--XS"
            style={{ backgroundColor: highlightColor }}
          >
            <h4 className="c-project-card__highlight__text">{index}</h4>
          </span>
        </Slide>
        <Fade>
          <h4 className="c-project-card__activity u-color-type-variant">
            {activity}
          </h4>
          <div className="c-project-card__title">
            <h2>{title}</h2>
            <NavigationLink
              className="p-index__navigation-link"
              hasArrow
              label="More"
              to={path}
            />
          </div>
        </Fade>
      </div>
    </section>
  )
}

ProjectCard.propTypes = {
  activity: PropTypes.string,
  img: PropTypes.object,
  path: PropTypes.string,
  title: PropTypes.string,
}

export default ProjectCard

// const ProjectCard = ({ id, title, subtitle, img, url }) => {
//   return (
//     <section id={"work-" + id} className="c-project-card">
//       <LazyLoad offset={100}>
//         <Fade duration={2000}>
//           <Link className="c-project-card__img" to={url}>
//             <img src={img} alt={"Featured Project: " + title} />
//           </Link>
//         </Fade>
//       </LazyLoad>
//       <Fade cascade>
//         <div className="c-project-card__info">
//           <h2 className="l-container__text--S">{title}</h2>
//           <p className="l-container__text--S">{subtitle}</p>
//           <NavigationLink label="More" to={url} />
//         </div>
//       </Fade>
//     </section>
//   )
// }
