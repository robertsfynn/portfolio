import React from 'react';
import { useSpring, animated, config } from 'react-spring';
import styled from 'styled-components';
import withScroll from './WithScroll';
import { Paragraph } from '../components/Typograhpy';

const StyledTimeline = styled(animated.li)`
  list-style-type: none;
  position: relative;
  width: 100%;
  height: 200px;
  margin: 0;
  padding-top: 50px;
  background-image: linear-gradient(#ff4952, #ff4952);
  background-size: 6px 100%;
  background-repeat: no-repeat;
  background-position: left center;

  @media (min-width: 48rem) {
    margin: 0 auto;
    width: 6px;
    background-position: top center;
  }
`;

const TimelineItem = styled(animated.div)`
  position: absolute;
  left: 45px;
  bottom: -20px;
  width: calc(100% - 45px);
  padding: 30px 20px 20px 20px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  background-color: #1c2039;
  text-align: center;
  flex-direction: column;

  @media (min-width: 48rem) {
    width: 300px;
  }

  @media (min-width: 64rem) {
    width: 400px;
  }
`;

const Points = styled(animated.div)`
  content: '';
  position: absolute;
  bottom: 0;
  left: -7px;
  transform: rotate(45deg);
  width: 20px;
  height: 20px;
  z-index: 2;
  background-image: linear-gradient(#ff4952, #ff4952);
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: top center;

  @media (min-width: 48rem) {
    margin: 0 auto;
    left: 50%;
    background-position: top center;
    transform: translateX(-50%) rotate(45deg);
  }
`;

const TimelineDate = styled.div`
  position: absolute;
  background: #ff4952;
  padding: 0 10px;
  top: -15px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AnimationLine = ({ children, inViewport, date }) => {
  const delay = 500;

  const animationProps = useSpring({
    config: config.slow,
    to: {
      backgroundSize: inViewport ? '6px 100%' : '6px 0%',
    },
    from: {
      backgroundSize: '6px 0%',
    },
  });

  const pointProps = useSpring({
    delay,
    to: {
      backgroundSize: inViewport ? '100%' : '0%',
    },
    from: {
      backgroundSize: '0%',
    },
  });

  const itemProps = useSpring({
    delay,
    to: {
      opacity: inViewport ? 1 : 0,
    },
    from: {
      opacity: 0,
    },
  });

  return (
    <StyledTimeline threshold={1} style={animationProps}>
      <Points style={pointProps} />
      <TimelineItem style={itemProps}>
        <TimelineDate>
          <Paragraph bold>{date}</Paragraph>
        </TimelineDate>
        {children}
      </TimelineItem>
    </StyledTimeline>
  );
};

export default withScroll(AnimationLine);
