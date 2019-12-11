import React from "react"
import { Container } from "react-awesome-styled-grid"
import { Line } from "./Animations"
import { Section } from "./Typograhpy"

const Timeline = () => {
  return (
    <Section id="timeline">
      <Container>
        <ul>
          <Line threshold={1}>You can do it</Line>
          <Line threshold={1}>You can do it</Line>
        </ul>
      </Container>
    </Section>
  )
}

export default Timeline
