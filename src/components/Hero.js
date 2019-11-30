import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Hero = () => (
  <Hero>
    <div>
      <h1></h1>
    </div>
  </Hero>
)

Hero.propTypes = {
  siteTitle: PropTypes.string,
}

Hero.defaultProps = {
  siteTitle: ``,
}

export default Hero
