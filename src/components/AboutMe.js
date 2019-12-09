import React from "react"
import { Container, Row, Col } from "react-awesome-styled-grid"
import {
  Header2,
  Paragraph,
  Header6,
  WidthContainer,
  Section,
} from "./Text/Text"
import styled from "styled-components"
import mobileDevelopmentIcon from "../icons/mobile-app.svg"
import webDevelopmentIcon from "../icons/html.svg"
import cmsIcon from "../icons/computer.svg"
import { FadeBottom } from "./Animations/Animations"

const Icon = styled.img`
  width: 50px;
  height: 50px;
  margin: auto;
  margin-bottom: 20px;
  display: block;
`

const AboutMe = () => {
  return (
    <Section>
      <Container>
        <Row>
          <Col sm={6}>
            <FadeBottom>
              <WidthContainer>
                <Header2>About me</Header2>
                <Paragraph tainted>
                  Yeah, but your scientists were so preoccupied with whether or
                  not they could, they didn't stop to think if they should. You
                  know what? It is beets. I've crashed into a beet truck. I was
                  part of something special. I was part of something special.
                </Paragraph>
              </WidthContainer>
            </FadeBottom>
          </Col>
          <Col sm={6}>
            <WidthContainer>
              <FadeBottom>
                <Header2>What I Do</Header2>
                <Paragraph marginBottom={50} tainted>
                  Yeah, but your scientists were so preoccupied with whether or
                  not they could, they didn't stop to think if they should. You
                  know what? It is beets. I've crashed into a beet truck. I was
                  part of something special. I was part of something special.
                </Paragraph>
              </FadeBottom>
              <FadeBottom>
                <Row>
                  <Col xs={12} sm={4} justify="center">
                    <WidthContainer>
                      <Icon src={webDevelopmentIcon} alt="Web Development" />
                      <Header6>Web Development</Header6>
                    </WidthContainer>
                  </Col>
                  <Col xs={12} sm={4}>
                    <WidthContainer>
                      <Icon
                        src={mobileDevelopmentIcon}
                        alt="Mobile Development"
                      />
                      <Header6>Mobile Development</Header6>
                    </WidthContainer>
                  </Col>
                  <Col xs={12} sm={4}>
                    <WidthContainer>
                      <Icon src={cmsIcon} alt="CMS" />
                      <Header6>
                        CMS
                        <br /> Experience
                      </Header6>
                    </WidthContainer>
                  </Col>
                </Row>
              </FadeBottom>
            </WidthContainer>
          </Col>
        </Row>
      </Container>
    </Section>
  )
}

export default AboutMe
