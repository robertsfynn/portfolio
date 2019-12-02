import React from "react"
import { Container, Row, Col } from "react-awesome-styled-grid"
import mobileImage from "../../images/mobile.png"
import macImage from "../../images/imac.png"
import PortfolioItem from "./PortfolioItem"
import { Header2 } from "../Text/Text"

const Portfolio = () => {
  return (
    <Container style={{ marginTop: 100 }}>
      <Header2>Portfolio</Header2>
      <Row>
        <Col xs={12} sm={5}>
          <PortfolioItem image={mobileImage} item={1} />
        </Col>
        <Col xs={12} sm={7}>
          <PortfolioItem image={macImage} item={2} />
        </Col>
      </Row>
    </Container>
  )
}

export default Portfolio
