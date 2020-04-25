import PropTypes from "prop-types"
import React, { Component } from "react"

import "./project-header.scss"

class ProjectHeader extends Component {
  constructor(props) {
    super(props)

    this.state = {
      titlePaddingBottom: 0,
    }

    this.cover = React.createRef()
    this.frontTitle = React.createRef()
    this.frontTitleH1 = React.createRef()
    this.backTitleH1 = React.createRef()

    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
    this.setState({
      titlePaddingBottom: Number(
        getComputedStyle(this.frontTitleH1.current).paddingBottom.split("px")[0]
      ),
    })
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }

  setParallax(parallaxRate, scrolledToTop) {
    this.cover.current.style.top = -scrolledToTop * parallaxRate + "px"
    this.frontTitle.current.style.clipPath =
      "inset(0 0 " +
      scrolledToTop * (parallaxRate / (this.cover.current.clientHeight / 100)) +
      "% 0)"
  }

  setTransformValue(
    currentPos,
    finalPos,
    finalScale,
    initialPos,
    initialScale
  ) {
    return (
      initialScale +
      ((currentPos - initialPos) * (finalScale - initialScale)) /
        (finalPos - initialPos)
    )
  }

  handleScroll() {
    let scrolledToTop = window.pageYOffset
    let scrollRate = 0.64

    this.setParallax(scrollRate, scrolledToTop)

    if (scrolledToTop <= this.cover.current.clientHeight * scrollRate) {
      let newTitlePaddingBottom =
        this.setTransformValue(
          scrolledToTop,
          this.cover.current.clientHeight * scrollRate,
          0,
          0,
          this.state.titlePaddingBottom
        ) + "px"
      this.frontTitleH1.current.style.paddingBottom = this.backTitleH1.current.style.paddingBottom = newTitlePaddingBottom
    }
  }

  render() {
    return (
      <header className="c-project-header">
        <video
          className="c-project-header__cover"
          autoPlay
          muted
          playsInline
          poster={this.props.coverImg}
          ref={this.cover}
        >
          <source src={this.props.coverVideo} type="video/mp4" />
        </video>
        <div
          className="c-project-header__title c-project-header__title--front"
          ref={this.frontTitle}
        >
          <div className="u-content-container--L">
            <h1 ref={this.frontTitleH1}>{this.props.title}</h1>
          </div>
        </div>
        <div className="c-project-header__title c-project-header__title--back u-content-container--L">
          <h1 ref={this.backTitleH1}>{this.props.title}</h1>
        </div>
        <div className="c-project-header__subtitle u-content-container--L">
          <h3>{this.props.subtitle}</h3>
        </div>
        <div className="u-content-container--L">
          <div className="c-project-header__details">
            {this.props.details.map((item, index) => (
              <div className="c-project-header__details__item" key={item}>
                <small>{["Activity", "Client", "Duration"][index]}</small>
                <small>
                  <em>{item}</em>
                </small>
              </div>
            ))}
          </div>
        </div>
        <div className="u-content-container--L">
          <hr className="c-project-header__divider" />
        </div>
      </header>
    )
  }
}

ProjectHeader.propTypes = {
  coverImg: PropTypes.string.isRequired,
  coverVideo: PropTypes.string.isRequired,
  details: PropTypes.array.isRequired,
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default ProjectHeader
