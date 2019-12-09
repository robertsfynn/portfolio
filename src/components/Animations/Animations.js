import React, { useState } from "react"
import { useSpring, animated, config } from "react-spring"
import styled from "styled-components"
import { InView } from "react-intersection-observer"

const BlockRevealContainer = styled.div`
  position: relative;
  display: inline-block;
  overflow: hidden;
`

const BlockRevealItem = styled(animated.div)`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: #07011e;
`

const withScrollSpy = Wrapped => {
  const WithScrollSpy = ({ children, ...props }) => {
    const [inViewport, setInViewport] = useState(false)

    const onInViewChange = inview => {
      if (!inViewport && inview) setInViewport(true)
    }

    return (
      <InView tag="div" className="inview" onChange={onInViewChange} threshold={0.3}>
        <Wrapped {...props} inViewport={inViewport}>
          {children}
        </Wrapped>
      </InView>
    )
  }
  return WithScrollSpy
}

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

const AnimatedBlockReveal = ({ children, inViewport, delay }) => {
  const animationProps = useSpring({
    to: [
      {
        transform: inViewport ? "translate(0, 0)" : "translate(-100%, 0)",
      },
      {
        transform: inViewport ? "translate(100%, 0)" : "translate(-100%, 0)",
      },
    ],
    from: {
      transform: "translate(-100%, 0)",
    },
  })

  return (
    <BlockRevealContainer>
      <BlockRevealItem style={animationProps}></BlockRevealItem>
      {children}
    </BlockRevealContainer>
  )
}

export const FadeBottom = withScrollSpy(AnimatedFadeBottom)
export const BlockReveal = withScrollSpy(AnimatedBlockReveal)
