import classnames from "classnames"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { Component } from "react"

import "./nav.scss"

class Nav extends Component {
  constructor(props) {
    super(props)

    this.state = {
      itemsAreVisible: false,
      navIsOnDark: props.isOnDark,
      navIsVisible: true,
      previousScrollPosition: 0,
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
    this.setState({ previousScrollPosition: window.pageYOffset })
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }

  handleScroll = () => {
    const { previousScrollPosition } = this.state
    const currentScrollPosition = window.pageYOffset
    const navIsVisible =
      previousScrollPosition > currentScrollPosition ||
      currentScrollPosition <= 0

    this.setState({
      itemsAreVisible: false,
      navIsVisible,
      previousScrollPosition: currentScrollPosition,
    })
  }

  handleClick = () => {
    this.setState({
      itemsAreVisible: !this.state.itemsAreVisible,
    })
  }

  render() {
    return (
      <nav
        className={classnames("c-nav", {
          "c-nav--on-dark": this.state.navIsOnDark,
          "c-nav--hidden": !this.state.navIsVisible,
        })}
      >
        <div className="u-content-container--XL">
          <Link
            to="/"
            className={classnames("highlight c-nav__home-url", {
              "c-nav__home-url--hidden": this.state.itemsAreVisible,
            })}
          >
            Froes.design
          </Link>
          <div className="c-nav__items">
            <div
              className={classnames("c-nav__items__links", {
                "c-nav__items__links--hidden--S": !this.state.itemsAreVisible,
              })}
            >
              <Link to="/showcase" className="highlight">
                Showcase
              </Link>
              <Link to="/about" className="highlight">
                About
              </Link>
            </div>
            <svg
              onClick={this.handleClick}
              className={classnames("c-nav__arrow", {
                "c-nav__arrow--inverted": this.state.itemsAreVisible,
              })}
              width="8px"
              height="24px"
              viewBox="0 0 8 24"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <rect
                  width="9"
                  height="2"
                  x="0"
                  y="0"
                  transform="translate(0, 11) rotate(45) translate(-13, -12.5) translate(10, 7.5)"
                />
                <rect
                  width="2"
                  height="9"
                  x="7"
                  y="0"
                  transform="translate(0, 11) rotate(45) translate(-13, -12.5) translate(10, 7.5)"
                />
              </g>
            </svg>
          </div>
        </div>
      </nav>
    )
  }
}

Nav.propTypes = {
  isOnDark: PropTypes.bool,
}

Nav.defautProps = {
  isOnDark: false,
}

export default Nav
