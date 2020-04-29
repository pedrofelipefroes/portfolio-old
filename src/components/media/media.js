import classnames from "classnames"
import Fade from "react-reveal/Fade"
import PropTypes from "prop-types"
import React from "react"

import "./media.scss"

const Media = ({ caption, children, numberOfItems, size }) => {
  return (
    <div
      className={classnames("c-media", {
        "c-media--has-caption": caption,
        [`c-media--${numberOfItems}`]: numberOfItems,
        [`c-media--${size}`]: size,
      })}
    >
      <Fade delay={640}>{children}</Fade>
      {caption ? (
        <Fade delay={640}>
          <small className="caption-2 c-media__caption">{caption}</small>
        </Fade>
      ) : null}
    </div>
  )
}

Media.propTypes = {
  caption: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  numberOfImg: PropTypes.number,
  size: PropTypes.string,
}

Media.defaultProps = {
  numberOfImg: 1,
  size: "L",
}

export default Media
