import React, { useState } from "react"
import Fade from "react-reveal/Fade"
import { Row, Col } from "react-grid-system"
import styled from "styled-components"
import { Paragraph, Header5 } from "../Text/Text"
import mobileImage from "../../images/mobile.png"
import macImage from "../../images/imac.png"

const colors = [
  "311deg, #766ced, #413ad6",
  "to bottom, #65b1ff, #2c65e7",
  "175deg, #ff7847, #ffac8e",
]

const PortfolioItem = styled.div`
  background-image: linear-gradient(${({ item }) => colors[item]});
  padding: 50px 45px;
  margin-bottom: 30px;
`

const Portfolio = () => {
  const [animation, setAnimation] = useState(false)
  return (
    <Row style={{ marginTop: 500 }}>
      <Col md={5}>
        <div className={`${animation ? "block-reveal" : ""}`}>
          <PortfolioItem item={0}>
            <Fade onReveal={() => setAnimation(true)} bottom delay={600}>
              <img src={mobileImage} alt="Mobile" />
              <Header5>App Design</Header5>
              <Paragraph>Yeaaah</Paragraph>
            </Fade>
          </PortfolioItem>
        </div>
      </Col>
      <Col md={7}>
        <div className="block-reveal">
          <PortfolioItem item={1}>
            <Header5>Surge 3 Website Design</Header5>
            <Paragraph>Yeaaah</Paragraph>
            <img src={macImage} alt="Mac" />
          </PortfolioItem>
        </div>
      </Col>
    </Row>
  )
}

export default Portfolio
