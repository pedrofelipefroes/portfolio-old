import PropTypes from "prop-types"
import React, { Component } from "react"

import "./project-header.scss"

class ProjectHeader extends Component {
  constructor(props) {
    super(props)

    this.state = {
      coverHeight: 0,
    }

    this.cover = React.createRef()
    this.title = React.createRef()
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)

    this.setState({
      coverHeight: this.cover.current.clientHeight,
    })
  }

  handleScroll() {
    let scrolledToTop = window.pageYOffset
    this.cover.current.style.top = -scrolledToTop * 0.48 + "px"
    this.title.current.style.top = -scrolledToTop * 0.64 + "px"
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
          ref={this.title}
          style={{ paddingTop: this.state.coverHeight + "px" }}
        >
          <div className="c-project-header__title u-content-container--L">
            <h1>{this.props.title}</h1>
          </div>
          <div className="c-project-header__details-and-subtitle u-content-container--L">
            <div className="c-project-header__details">
              {this.props.details.map((item, index) => (
                <div className="c-project-header__details__content">
                  <small>{["Activity", "Client", "Duration"][index]}</small>
                  <small>
                    <em>{item}</em>
                  </small>
                </div>
              ))}
            </div>
            <div className="c-project-header__subtitle">
              <h3>{this.props.subtitle}</h3>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

ProjectHeader.propTypes = {
  cover: PropTypes.node.isRequired,
  details: PropTypes.array.isRequired,
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default ProjectHeader
