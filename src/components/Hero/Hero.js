import React from "react"
import Fade from "react-reveal/Fade"
import Typewriter from "typewriter-effect"
import styled from "styled-components"
import { Header1, Header6 } from "../Text/Text"

const SocialMedia = styled.div`
  display: flex;
  justify-content: center;
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
    font-family: "Louis George Cafe";
    color: #ffffff;
    text-decoration: none;
    margin: 0;
  }
`

const Hero = () => (
  <Fade bottom>
    <Header1>Hello, I’m Fynn Roberts</Header1>
    <Typewriter
      options={{
        strings: ["Student", "Web Developer", "Mobile Developer"],
        autoStart: true,
        loop: true,
        delay: 100,
      }}
    />
    <Header6 marginTop={20}>Follow me on</Header6>
    <SocialMedia>
      <SocialMediaItem>
        <a href="">Tw</a>
      </SocialMediaItem>
      <SocialMediaItem>
        <a href="">in</a>
      </SocialMediaItem>
    </SocialMedia>
  </Fade>
)

export default Hero
