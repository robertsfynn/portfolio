import React, { useState } from "react"
import { useSpring, animated } from "react-spring"
import { InView } from "react-intersection-observer"
import * as easings from "d3-ease"

const withScrollSpy = Wrapped => {
  const WithScrollSpy = ({ children, ...props }) => {
    const [inViewport, setInViewport] = useState(false)

    const onInViewChange = inview => {
      if (!inViewport && inview) setInViewport(true)
    }

    return (
      <InView tag="div" className="inview" onChange={onInViewChange}>
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
    config: { duration: 3000, easing: easings.easeQuadOut },
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

const AnimatedBlockReveal = ({ children, inViewport }) => {
  const animationProps = useSpring({
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

  return <animated.div style={animationProps}>{children}</animated.div>
}

export const FadeBottom = withScrollSpy(AnimatedFadeBottom)
export const BlockReveal = withScrollSpy(AnimatedBlockReveal)
