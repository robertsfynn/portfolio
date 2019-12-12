import styled from 'styled-components';
import { Row } from 'react-awesome-styled-grid';
import redBackground from '../images/orange-bg.svg';
import blueBackground from '../images/bx-home.svg';

export const Header1 = styled.h1`
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 1.28;
  letter-spacing: -1.25px;
  color: #ffffff;
  margin: 0;
  color: ${({ tainted }) =>
    tainted ? 'rgba(255, 255, 255, 0.7)' : 'rgb(255, 255, 255)'};
  text-align: center;
  margin-bottom: ${({ marginBottom }) => (marginBottom ? marginBottom : 20)}px;

  @media (min-width: 48rem) {
    text-align: ${({ align }) => align};
    font-size: 45px;
  }

  @media (min-width: 64rem) {
    font-size: 68px;
  }
`;

export const Header2 = styled.h2`
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 34px;
  line-height: 40.8px;
  letter-spacing: -1.5px;
  color: #ffffff;
  text-align: center;

  @media (min-width: 48rem) {
    margin-bottom: 40px;
    font-size: 50px;
    text-align: ${({ align }) => align};
  }
`;

export const Header3 = styled.h3`
  font-family: Roboto, sans-serif;
  font-size: 25px;
  font-weight: 600;
  letter-spacing: -0.63px;
  color: #ffffff;
  margin-bottom: 40px;
  text-align: center;

  @media (min-width: 48rem) {
    text-align: start;
  }
`;

export const Header5 = styled.h5`
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 40.8px;
  letter-spacing: -1.5px;
  color: #ffffff;
  text-align: center;
  margin-bottom: ${({ marginBottom }) => (marginBottom ? marginBottom : 20)}px;

  @media (min-width: 48rem) {
    text-align: start;
  }
`;

export const Header6 = styled.h6`
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  color: #ffffff;
  margin-top: ${({ marginTop }) => marginTop}px;
  text-align: center;
`;

export const Paragraph = styled.p`
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  line-height: 1.88;
  color: #ffffff;
  opacity: ${({ tainted }) => (tainted ? '0.6' : '1')};
  text-align: ${({ center }) => (center ? 'center' : 'start')};
  margin-bottom: ${({ marginBottom }) => (marginBottom ? marginBottom : 25)}px;
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : 0)}px;

  @media (max-width: 767px) {
    text-align: center;
  }
`;

export const WidthContainer = styled.div`
  width: 100%;
  margin-bottom: ${({ marginBottom }) => (marginBottom ? marginBottom : '0')}px;

  @media (min-width: 64rem) {
    margin-bottom: 0;
  }
`;

export const Section = styled.section`
  padding: 40px 0;

  :nth-of-type(3) {
    background: url(${redBackground}) no-repeat;
    background-position: center;

    @media (min-width: 48rem) {
      background-position: calc(50% + 300px) 50%;
    }

    @media (min-width: 64rem) {
      background-position: calc(50% + 600px) 50%;
    }
  }

  :nth-of-type(5) {
    background: url(${blueBackground}) no-repeat;
    background-position: center;

    @media (min-width: 48rem) {
      background-position: calc(50% - 300px) 0;
    }

    @media (min-width: 64rem) {
      background-position: calc(50% - 700px) 0;
    }
  }

  @media (min-width: 48rem) {
    padding: 110px 0;
  }
`;

export const StyledRow = styled(Row)`
  &&& {
    margin-left: 0;
    margin-right: 0;
  }
`;