import React, { useState } from "react"
import styled from "styled-components"
import { useSpring, animated } from "react-spring"
import * as easings from "d3-ease"
import { Paragraph, Header5 } from "../Text/Text"
import { BlockReveal, FadeBottom } from "../Animations/Animations"

const StyledPortfolioItem = styled.div`
  background-image: linear-gradient(${({ item }) => colors[item]});
  padding: 50px 45px;
  margin-bottom: 30px;
`

const colors = [
  "311deg, #766ced, #413ad6",
  "to bottom, #65b1ff, #2c65e7",
  "175deg, #ff7847, #ffac8e",
]

const PortfolioItem = ({ image, item }) => {
  const [inViewport, setInViewport] = useState(false)

  const animationBlockProps = useSpring({
    config: { duration: 1000, easing: easings.easeQuadOut },
    to: {
      width: inViewport ? "100%" : "0%",
      transform: inViewport ? "translateX(100%)" : "translateX(0)",
    },
    from: {
      width: "0%",
      transform: "translateX(0)",
    },
  })

  const animationProps = useSpring({
    config: { duration: 1000, easing: easings.easeQuadOut },
    delay: 1000,
    to: {
      opacity: inViewport ? 1 : 0,
      transform: inViewport ? "translateY(0)" : "translateY(40px)",
    },
    from: {
      opacity: 0,
      transform: "translateY(40px)",
    },
  })

  const onInViewChange = inview => {
    if (!inViewport && inview) setInViewport(true)
  }

  return (
    <BlockReveal>
      <StyledPortfolioItem item={item}>
        <FadeBottom delay={1000}>
          <img src={image} alt="Mobile" />
          <Header5>App Design</Header5>
          <Paragraph>Yeaaah</Paragraph>
        </FadeBottom>
      </StyledPortfolioItem>
    </BlockReveal>
  )
}

export default PortfolioItem
