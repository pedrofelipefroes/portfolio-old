import { Link } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import React, { Component } from "react"
import styled from "styled-components"

import "./project-card.scss"

class ProjectCard extends Component {
  constructor(props) {
    super(props)

    this.projectCard = React.createRef()

    this.state = {
      boundingRectCenter: 0,
      isInTransformArea: false,
    }

    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  getTransformArea() {
    return {
      bottom: window.innerHeight,
      top: 0,
    }
  }

  getTransformValues() {
    let transformScale = {
      bottom: 1.5,
      top: 1,
    }

    let currentTransformScale =
      transformScale.bottom +
      ((this.state.boundingRectCenter - this.getTransformArea().bottom) *
        (transformScale.top - transformScale.bottom)) /
        (this.getTransformArea().top - this.getTransformArea().bottom)

    this.projectCard.current.style.transform =
      "scale(" + currentTransformScale + ")"
  }

  handleScroll() {
    let boundingRect = this.projectCard.current.getBoundingClientRect()
    let boundingRectCenter = boundingRect.top - boundingRect.height / 2

    this.setState({
      boundingRectCenter: boundingRectCenter,
      isInTransformArea:
        boundingRectCenter < this.getTransformArea().bottom &&
        boundingRectCenter > this.getTransformArea().top,
    })

    if (this.state.isInTransformArea) {
      this.getTransformValues()
    }
  }

  render() {
    const ProjectDetails = styled.div`
      & > .c-project-card__img::after {
        content: "${props => props.projectTitle}";
      }

      & > .c-project-card__img::before {
        content: "${props => props.projectActivity}";
      }
    `

    return (
      <Link
        className={"c-project-card c-project-card--" + this.props.id}
        to={this.props.path}
        ref={this.projectCard}
        onScroll={this.handleScroll}
      >
        <ProjectDetails
          projectActivity={this.props.activity}
          projectTitle={this.props.title}
        >
          <Img
            fluid={this.props.img}
            alt={this.props.alt}
            className="c-project-card__img"
          />
        </ProjectDetails>
      </Link>
    )
  }
}

ProjectCard.propTypes = {
  activity: PropTypes.string,
  headline: PropTypes.string,
  img: PropTypes.object,
  path: PropTypes.string,
  title: PropTypes.string,
}

export default ProjectCard
