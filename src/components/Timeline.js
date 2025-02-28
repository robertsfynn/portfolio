import React from 'react';
import { Container } from 'react-awesome-styled-grid';
import { Line, FadeBottom } from '../animations';
import { Section, Paragraph, Header2 } from './Typograhpy';
import styled from 'styled-components';

const StyledTimeline = styled.ul`
  margin: 0;
  //rework
  @media (min-width: 48rem) {
    > :nth-child(2n) li div:last-child {
      right: 45px;
      left: auto;
    }
  }
`;

const TimelineContainer = styled(Container)`
  margin-bottom: 80px;
`;

const Timeline = () => {
  return (
    <Section id="timeline">
      <TimelineContainer>
        <FadeBottom>
          <Header2 center marginBottom={50}>
            Timeline
          </Header2>
        </FadeBottom>
        <StyledTimeline>
          <Line threshold={1} date="June 2022 - present">
            <Paragraph bold marginBottom={1}>
              idealo
            </Paragraph>
            <Paragraph center>
              Fullstack Developer
              <br /> (Working Student)
            </Paragraph>
          </Line>
          <Line threshold={1} date="April 2020 - June 2022">
            <Paragraph bold marginBottom={1}>
              SAP
            </Paragraph>
            <Paragraph center>
              Fullstack Developer
              <br /> (Working Student)
            </Paragraph>
          </Line>
          <Line threshold={1} date="July 2018 - April 2020">
            <Paragraph bold marginBottom={1}>
              Lykon
            </Paragraph>
            <Paragraph center>
              Frontend Developer <br /> (Working Student)
            </Paragraph>
          </Line>
          <Line threshold={1} date="March 2018 - July 2018">
            <Paragraph bold marginBottom={1}>
              myHotelo
            </Paragraph>
            <Paragraph center>Frontend Developer</Paragraph>
          </Line>
          <Line threshold={1} date="January 2018 - present">
            <Paragraph bold marginBottom={1}>
              Freelance Developer
            </Paragraph>
            <Paragraph center>Web Developer</Paragraph>
          </Line>
          <Line threshold={1} date="2015-2022">
            <Paragraph bold marginBottom={1}>
              TU Berlin
            </Paragraph>
            <Paragraph center>Business Informatics (Bachelor)</Paragraph>
          </Line>
        </StyledTimeline>
      </TimelineContainer>
    </Section>
  );
};

export default Timeline;
