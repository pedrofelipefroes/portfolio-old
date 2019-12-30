import React from "react"

import "./footer.scss"

const Footer = () => (
  <footer className="c-footer">
    <div className="u-content-container--XL">
      <section className="c-footer__links">
        <h3>
          <a href="https://www.linkedin.com/in/froesdesign">LinkedIn</a>
        </h3>
        <h3>
          <a href="mailto:hello@froes.design">Work Inquiries</a>
        </h3>
      </section>
      <section className="c-footer__copyright">
        <small className="u-color-type-variant">
          This site was fully designed and developed by me. Check out its{" "}
          <a href="https://github.com/pedrofelipefroes/portfolio">
            GitHub repo
          </a>
          .
        </small>
        <small className="u-color-type-variant">© 2020 Froes.</small>
      </section>
    </div>
  </footer>
)

export default Footer
