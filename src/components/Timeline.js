import React from 'react';
import { Container } from 'react-awesome-styled-grid';
import { Line } from '../animations';
import { Section, Paragraph } from './Typograhpy';
import styled from 'styled-components';

const StyledTimeline = styled.ul`
  @media (min-width: 48rem) {
    > :nth-child(2n) li div:last-child {
      right: 45px;
      left: initial;
    }
  }
`;

const Timeline = () => {
  return (
    <Section id="timeline">
      <Container>
        <StyledTimeline>
          <Line threshold={1} date="02.08.2017">
            <Paragraph>You can do it</Paragraph>
          </Line>
          <Line threshold={1}>
            <Paragraph>You can do it</Paragraph>
          </Line>
          <Line threshold={1}>
            <Paragraph>You can do it</Paragraph>
          </Line>
          <Line threshold={1}>
            <Paragraph>You can do it</Paragraph>
          </Line>
          <Line threshold={1}>
            <Paragraph>You can do it</Paragraph>
          </Line>
          <Line threshold={1}>
            <Paragraph>You can do it</Paragraph>
          </Line>
        </StyledTimeline>
      </Container>
    </Section>
  );
};

export default Timeline;
