import React from "react"
import { Container } from "react-awesome-styled-grid"
import { Line } from "./Animations"
import { Section } from "./Typograhpy"
import styled from "styled-components"

const StyledTimeline = styled.ul`
  > :nth-child(2n) li div:last-child {
    right: 45px;
    left: initial;
  }
`

const Timeline = () => {
  return (
    <Section id="timeline">
      <Container>
        <StyledTimeline>
          <Line threshold={1}>You can do it</Line>
          <Line threshold={1}>You can do it</Line>
          <Line threshold={1}>You can do it</Line>
          <Line threshold={1}>You can do it</Line>
          <Line threshold={1}>You can do it</Line>
          <Line threshold={1}>You can do it</Line>
          <Line threshold={1}>You can do it</Line>
          <Line threshold={1}>You can do it</Line>
        </StyledTimeline>
      </Container>
    </Section>
  )
}

export default Timeline
