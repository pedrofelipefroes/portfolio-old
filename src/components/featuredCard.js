import { Link } from "gatsby"
import Fade from "react-reveal/Fade"
import LazyLoad from "react-lazyload"
import React from "react"

import NavigationLink from "./navigationLink"

const FeaturedCard = ({ id, title, subtitle, img, url }) => {
  return (
    <section id={"work-" + id} className="c-featured-card">
      <LazyLoad offset={100}>
        <Fade duration={2000}>
          <Link className="c-featured-card__img" to={url}>
            <img src={img} alt={"Featured Project: " + title} />
          </Link>
        </Fade>
      </LazyLoad>
      <Fade cascade>
        <div className="c-featured-card__info">
          <h2 className="l-container__text--S">{title}</h2>
          <p className="l-container__text--S">{subtitle}</p>
          <NavigationLink label="More" to={url} />
        </div>
      </Fade>
    </section>
  )
}

export default FeaturedCard
