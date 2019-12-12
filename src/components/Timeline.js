import React from 'react';
import { Container } from 'react-awesome-styled-grid';
import { Line } from '../animations';
import { Section, Paragraph, Header2 } from './Typograhpy';
import styled from 'styled-components';

const StyledTimeline = styled.ul`
  margin: 0;
  //rework
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
        <Header2 center marginBottom={50}>
          Timeline
        </Header2>
        <StyledTimeline>
          <Line threshold={1} date="2008 - 2015">
            <Paragraph bold marginBottom={1}>
              Fichtenberg Oberschule
            </Paragraph>
            <Paragraph center>Abitur</Paragraph>
          </Line>
          <Line threshold={1} date="2015-present">
            <Paragraph bold marginBottom={1}>
              TU Berlin
            </Paragraph>
            <Paragraph center>Wirtschaftsinformatik</Paragraph>
          </Line>
          <Line threshold={1} date="March 2018 - July 2018">
            <Paragraph bold marginBottom={1}>
              myHotelo
            </Paragraph>
            <Paragraph center>
              Frontend Developer <br /> (Working Student)
            </Paragraph>
          </Line>
          <Line threshold={1} date="July 2018 - present">
            <Paragraph bold marginBottom={1}>
              Lykon
            </Paragraph>
            <Paragraph center>
              Frontend Developer <br /> (Working Student)
            </Paragraph>
          </Line>
          <Line threshold={1} date="January 2018 - present">
            <Paragraph bold marginBottom={1}>
              Freelance Debeloper
            </Paragraph>
            <Paragraph center>Web Developer</Paragraph>
          </Line>
        </StyledTimeline>
      </Container>
    </Section>
  );
};

export default Timeline;
