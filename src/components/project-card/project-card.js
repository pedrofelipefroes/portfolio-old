import { Link } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import React, { Component } from "react"
import styled from "styled-components"

import "./project-card.scss"

class ProjectCard extends Component {
  // constructor(props) {
  //   super(props)

  // this.projectCard = React.createRef()

  // this.state = {
  //   boundingRectCenter: 0,
  //   isInTransformAreaBottomHalf: false,
  //   isInTransformAreaUpperHalf: false,
  //   isScrollingDown: true,
  // }

  // this.handleScroll = this.handleScroll.bind(this)
  // }

  // componentDidMount() {
  //   window.addEventListener("scroll", this.handleScroll)
  // }

  // getTransformArea() {
  //   return {
  //     center: window.innerHeight / 2,
  //     bottom: window.innerHeight,
  //     top: 0,
  //   }
  // }

  // getTransformValue(bottomHalf, upperHalf, isScrollingDown) {
  //   let currentTransformScale
  //   let transformScale = {
  //     highlight: 1.1,
  //     regular: 1,
  //   }

  //   if (isScrollingDown && bottomHalf) {
  //     currentTransformScale = this.setTransformValue(
  //       this.getTransformArea().center,
  //       transformScale.highlight,
  //       this.getTransformArea().bottom,
  //       transformScale.regular
  //     )
  //   } else if (isScrollingDown && upperHalf) {
  //     currentTransformScale = this.setTransformValue(
  //       this.getTransformArea().top,
  //       transformScale.regular,
  //       this.getTransformArea().center,
  //       transformScale.highlight
  //     )
  //   } else if (!isScrollingDown && bottomHalf) {
  //     currentTransformScale = this.setTransformValue(
  //       this.getTransformArea().bottom,
  //       transformScale.regular,
  //       this.getTransformArea().center,
  //       transformScale.highlight
  //     )
  //   } else if (!isScrollingDown && upperHalf) {
  //     currentTransformScale = this.setTransformValue(
  //       this.getTransformArea().center,
  //       transformScale.highlight,
  //       this.getTransformArea().top,
  //       transformScale.regular
  //     )
  //   }

  //   this.projectCard.current.style.transform =
  //     "scale(" + currentTransformScale + ")"
  // }

  // setTransformValue(finalPos, finalScale, initialPos, initialScale) {
  //   return (
  //     initialScale +
  //     ((this.state.boundingRectCenter - initialPos) *
  //       (finalScale - initialScale)) /
  //       (finalPos - initialPos)
  //   )
  // }

  // handleScroll() {
  //   let boundingRect = this.projectCard.current.getBoundingClientRect()
  //   let boundingRectCenter = boundingRect.top + boundingRect.height / 2

  //   this.setState({
  //     boundingRectCenter: boundingRectCenter,
  //     isInTransformAreaBottomHalf:
  //       boundingRectCenter < this.getTransformArea().bottom &&
  //       boundingRectCenter > this.getTransformArea().center,
  //     isInTransformAreaUpperHalf:
  //       boundingRectCenter < this.getTransformArea().center &&
  //       boundingRectCenter > this.getTransformArea().top,
  //     isScrollingDown: boundingRectCenter < this.state.boundingRectCenter,
  //   })

  //   if (
  //     this.state.isInTransformAreaBottomHalf ||
  //     this.state.isInTransformAreaUpperHalf
  //   ) {
  //     this.getTransformValue(
  //       this.state.isInTransformAreaBottomHalf,
  //       this.state.isInTransformAreaUpperHalf,
  //       this.state.isScrollingDown
  //     )
  //   }
  // }

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
        // ref={this.projectCard}
        // onScroll={this.handleScroll}
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
