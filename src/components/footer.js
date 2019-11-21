import React from "react"

import ArrowedLink from "./arrowedLink"

const Footer = () => (
  <footer className="c-footer">
    <div className="l-container__content">
      <section className="c-footer__links">
        <p><a href="https://www.linkedin.com/in/froesdesign">LinkedIn</a></p>
        <p><a href="mailto:hello@froes.design">Work Inquiries</a></p>
      </section>
      <section className="c-footer__disclaimer">
        <small>
          This site was fully designed and developed by me. Check out its{" "}
          <a href="https://github.com/pedrofelipefroes/portfolio">
            GitHub repo
          </a>
          .
        </small>
        <small>© 2019 Froes.</small>
      </section>
    </div>
  </footer>
)

export default Footer
