import React from "react"
import Fade from "react-reveal/Fade"
import { Row, Col } from "react-grid-system"
import "./Portfolio.css"

const Portfolio = () => {
  return (
    <Row>
      <Col md={5}>
        <div className="block-reveal">
          <Fade bottom delay={600}>
            <h1>Yeaaah</h1>
          </Fade>
        </div>
      </Col>
      <Col md={7}>
        <div className="block-reveal">
          <Fade bottom delay={600}>
            <h1>Yeaaah</h1>
          </Fade>
        </div>
      </Col>
    </Row>
  )
}

export default Portfolio
