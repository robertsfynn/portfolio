import React from "react"
import { useSpring, animated, config } from "react-spring"
import styled from "styled-components"
import withScroll from "./WithScroll"

const BlockRevealContainer = styled.div`
  position: relative;
  display: inline-block;
  overflow: hidden;
  width: 100%;
`

const BlockRevealItem = styled(animated.div)`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: #07011e;
`

const AnimatedFadeBottom = ({ children, inViewport, delay }) => {
  const animationProps = useSpring({
    config: config.slow,
    delay: delay ? delay : 0,
    to: {
      opacity: inViewport ? 1 : 0,
      transform: inViewport ? "translateY(0)" : "translateY(40px)",
    },
    from: {
      opacity: 0,
      transform: "translateY(40px)",
    },
  })

  return <animated.div style={animationProps}>{children}</animated.div>
}

const AnimatedFade = ({ children, inViewport, delay }) => {
  const animationProps = useSpring({
    config: config.slow,
    delay: delay ? delay : 0,
    to: {
      opacity: inViewport ? 1 : 0,
    },
    from: {
      opacity: 0,
    },
  })

  return <animated.div style={animationProps}>{children}</animated.div>
}

const AnimatedBlockReveal = ({ children, inViewport }) => {
  const animationProps = useSpring({
    config: { mass: 1, tension: 280, friction: 90 },
    to: [
      {
        transform: inViewport ? "translate(101%, 0)" : "translate(-101%, 0)",
      },
    ],
    from: {
      transform: "translate(-101%, 0)",
    },
  })

  return (
    <BlockRevealContainer>
      <BlockRevealItem style={animationProps}></BlockRevealItem>
      {children}
    </BlockRevealContainer>
  )
}

export const FadeBottom = withScroll(AnimatedFadeBottom)
export const Fade = withScroll(AnimatedFade)
export const BlockReveal = withScroll(AnimatedBlockReveal)
