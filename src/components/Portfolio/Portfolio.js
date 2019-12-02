import React, { useState } from "react"
import { Row, Col } from "react-grid-system"
import mobileImage from "../../images/mobile.png"
import macImage from "../../images/imac.png"
import PortfolioItem from "./PortfolioItem"

const Portfolio = () => {
  return (
    <Row style={{ marginTop: 1000 }}>
      <Col xs={12} md={5}>
        <PortfolioItem image={mobileImage} item={1} />
      </Col>
      <Col xs={12} md={7}>
        <PortfolioItem image={macImage} item={2} />
      </Col>
    </Row>
  )
}

export default Portfolio
