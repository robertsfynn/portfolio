import React from "react"
import Fade from "react-reveal/Fade"
import Typewriter from "typewriter-effect"

const Hero = () => (
  <Fade bottom>
    <h1 class="hero-header">Hello, I’m Fynn Roberts</h1>
    <Typewriter
      options={{
        strings: ["Student", "Web Developer", "Mobile Developer"],
        autoStart: true,
        loop: true,
        delay: 100,
      }}
    />
    <div className="social-media-container">
      <h6>Follow me on</h6>
      <div className="social-media">
        <div className="social-media__item">
          <a href="">Tw</a>
        </div>
        <div className="social-media__item">
          <a href="">in</a>
        </div>
      </div>
    </div>
  </Fade>
)

export default Hero
