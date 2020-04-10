import PropTypes from "prop-types"
import React, { Component } from "react"

import ProjectCard from "../project-card/project-card"

import "./project-list.scss"

class ProjectList extends Component {
  constructor(props) {
    super(props)
  }

  mapData() {
    return this.props.items.map(item => (
      <ProjectCard
        activity={item.node.frontmatter.activity}
        alt={item.node.frontmatter.coverImage.base
          .split(" - ")[1]
          .split(".")[0]
          .concat(".")}
        id={item.node.frontmatter.id}
        img={item.node.frontmatter.coverImage.childImageSharp.fluid}
        key={item.node.frontmatter.id}
        path={item.node.frontmatter.path}
        title={item.node.frontmatter.title}
      />
    ))
  }

  render() {
    return (
      <div
        className="c-project-list"
        style={{ marginTop: this.props.distanceFromHeader + "px" }}
      >
        {this.mapData()}
      </div>
    )
  }
}

ProjectList.propTypes = {
  items: PropTypes.array,
  marginTop: PropTypes.number,
}

ProjectList.defautProps = {
  marginTop: 0,
}

export default ProjectList
