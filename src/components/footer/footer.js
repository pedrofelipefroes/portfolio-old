import classnames from "classnames"
import Fade from "react-reveal/Fade"
import PropTypes from "prop-types"
import React, { Component } from "react"

import "./footer.scss"

class Footer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      footerIsOnDark: props.isOnDark,
    }
  }

  render() {
    return (
      <footer
        className={classnames("c-footer", {
          "c-footer--on-dark": this.state.footerIsOnDark,
        })}
      >
        <div className="u-content-container--XL">
          <div>
            <Fade bottom>
              <p>
                <strong>
                  Mail me at{" "}
                  <a href="mailto:hello@froes.design">hello@froes.design</a>
                </strong>
              </p>
            </Fade>
            <Fade bottom>
              <p>
                <strong>
                  Reach me on{" "}
                  <a href="https://www.linkedin.com/in/froesdesign">
                    linkedin.com/in/froesdesign
                  </a>
                </strong>
              </p>
            </Fade>
          </div>
          <div className="c-footer__copyright">
            <small className="caption-2">
              This site was fully designed and developed by me. Check out its{" "}
              <a href="https://github.com/pedrofelipefroes/portfolio">
                GitHub repo
              </a>
              .
            </small>
            <small className="caption-2">© 2020 Froes.</small>
          </div>
        </div>
      </footer>
    )
  }
}

Footer.propTypes = {
  isOnDark: PropTypes.bool,
}

Footer.defautProps = {
  isOnDark: false,
}

export default Footer
