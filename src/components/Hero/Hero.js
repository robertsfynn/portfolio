import React from "react"
import Typewriter from "typewriter-effect"
import styled from "styled-components"
import { FadeBottom } from "../Animations/Animations"
import { Container, Row, Col } from "react-awesome-styled-grid"

import { Header1, Header6 } from "../Text/Text"

const HeroContainer = styled.div`
  margin-bottom: 100px;
`

const SocialMedia = styled.div`
  display: flex;
  justify-content: center;
`

const WidthContainer = styled.div`
  width: 100%;
`

const SocialMediaItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  border-radius: 3px;
  border: solid 1px #4a4a4a;
  cursor: pointer;
  transition: all 0.3s;
  margin-right: 5px;

  :hover {
    box-shadow: 0 16px 14px 0 rgba(0, 0, 0, 0.1);
    background-color: #ff4952;
    border: solid 1px transparent;
    color: #ffffff;
  }

  a {
    font-size: 20px;
    margin-right: 5px;
    font-family: Roboto, sans-serif;
    color: #ffffff;
    text-decoration: none;
    margin: 0;
  }
`

const Hero = () => {
  return (
    <FadeBottom>
      <HeroContainer>
        <Container>
          <Row>
            <Col md={10}>
              <WidthContainer>
                <Header1 align="start" marginBottom={1} tainted>
                  Hello, I’m Fynn Roberts
                </Header1>
                <Typewriter
                  options={{
                    strings: ["Student", "Web Developer", "Mobile Developer"],
                    autoStart: true,
                    loop: true,
                    delay: 100,
                  }}
                />
              </WidthContainer>
            </Col>
            <Col md={2}>
              <WidthContainer>
                <Header6 marginTop={20}>Follow me on</Header6>
                <SocialMedia>
                  <SocialMediaItem>
                    <a href="https://www.twitter.com/">Tw</a>
                  </SocialMediaItem>
                  <SocialMediaItem>
                    <a href="https://www.linkedin.com/">in</a>
                  </SocialMediaItem>
                </SocialMedia>
              </WidthContainer>
            </Col>
          </Row>
        </Container>
      </HeroContainer>
    </FadeBottom>
  )
}

export default Hero
