import React, { useState } from "react"
import { InView } from "react-intersection-observer"

const withScroll = Wrapped => {
  const WithScroll = ({ children, ...props }) => {
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
  return WithScroll
}

export default withScroll
