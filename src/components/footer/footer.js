import React from "react"

import ArrowedLink from "../arrowed-link/arrowedLink"

const Footer = () => (
  <footer className="c-footer">
    <div className="l-container c-footer__container">
      <section className="c-footer__links">
        <ArrowedLink
          to="https://www.linkedin.com/in/froesdesign"
          isLinkExternal
          label="LinkedIn"
        />
        <ArrowedLink
          to="mailto:hello@froes.design"
          isLinkExternal
          label="Work Inquiries"
        />
      </section>
      <section className="c-footer__disclaimer">
        <small>
          This site was fully designed and developed by me. Check out its{" "}
          <a href="https://github.com/pedrofelipefroes/portfolio">
            GitHub repo
          </a>
          .
        </small>
        <small>Froes. 2019.</small>
      </section>
    </div>
  </footer>
)

export default Footer
