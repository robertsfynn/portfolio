import React, { useState } from "react"
import { useSpring, animated } from "react-spring"
import { InView } from "react-intersection-observer"

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

export const FadeBottom = withScrollSpy(AnimatedFadeBottom)
