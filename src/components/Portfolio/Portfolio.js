import React from "react"
import { Row, Col } from "react-grid-system"
import mobileImage from "../../images/mobile.png"
import macImage from "../../images/imac.png"
import PortfolioItem from "./PortfolioItem"
import { Header2 } from "../Text/Text"

const Portfolio = () => {
  return (
    <div style={{ marginTop: 100 }}>
      <Header2>Portfolio</Header2>
      <Row>
        <Col xs={12} md={5}>
          <PortfolioItem image={mobileImage} item={1} />
        </Col>
        <Col xs={12} md={7}>
          <PortfolioItem image={macImage} item={2} />
        </Col>
      </Row>
    </div>
  )
}

export default Portfolio
