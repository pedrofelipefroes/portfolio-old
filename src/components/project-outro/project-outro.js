import PropTypes from "prop-types"
import React from "react"

import TextContainer from "../text-container/text-container"

import "./project-outro.scss"

const ProjectOutro = ({ children }) => {
  return (
    <TextContainer className="c-project-outro">
      <small>
        <em>{children}</em>
      </small>
    </TextContainer>
  )
}

ProjectOutro.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ProjectOutro
