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

const StyledTimeline = styled(animated.li)`
  list-style-type: none;
  position: relative;
  width: 6px;
  margin: 0;
  height: 200px;
  padding-top: 50px;
  background-image: linear-gradient(#ff4952, #ff4952);
  background-size: 6px 100%;
  background-repeat: no-repeat;
  background-position: top center;

  @media (min-width: 48rem) {
    margin: 0 auto;
  }
`

const TimelineItem = styled(animated.div)`
  position: absolute;
  left: 45px;
  bottom: -20px;
  width: 200px;
  padding: 20px;
  background: #fff;
  border-radius: 5px;
  display: flex;
  align-items: center;
`

const Points = styled(animated.div)`
  content: "";
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%) rotate(45deg);
  width: 20px;
  height: 20px;
  z-index: 2;
  background-image: linear-gradient(#ff4952, #ff4952);
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: top center;
`

export const withScrollSpy = Wrapped => {
  const WithScrollSpy = ({ children, ...props }) => {
    const [inViewport, setInViewport] = useState(false)

    const onInViewChange = inview => {
      if (!inViewport && inview) setInViewport(true)
    }

    return (
      <InView
        tag="div"
        className="inview"
        onChange={onInViewChange}
        threshold={props.threshold ? props.threshold : 0.3}
        triggerOnce={true}
      >
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

const AnimationLine = ({ children, inViewport }) => {
  const animationProps = useSpring({
    config: config.slow,
    to: {
      backgroundSize: inViewport ? "6px 100%" : "6px 0%",
    },
    from: {
      backgroundSize: "6px 0%",
    },
  })

  const pointProps = useSpring({
    delay: 800,
    to: {
      backgroundSize: inViewport ? "100%" : "0%",
    },
    from: {
      backgroundSize: "0%",
    },
  })

  const itemProps = useSpring({
    delay: 800,
    to: {
      opacity: inViewport ? 1 : 0,
    },
    from: {
      opacity: 0,
    },
  })

  return (
    <StyledTimeline threshold={1} style={animationProps}>
      <Points style={pointProps} />
      <TimelineItem style={itemProps}>{children}</TimelineItem>
    </StyledTimeline>
  )
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

export const FadeBottom = withScrollSpy(AnimatedFadeBottom)
export const Fade = withScrollSpy(AnimatedFade)
export const BlockReveal = withScrollSpy(AnimatedBlockReveal)
export const Line = withScrollSpy(AnimationLine)
