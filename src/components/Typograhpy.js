import styled from 'styled-components';
import { Row } from 'react-awesome-styled-grid';
import redBackground from '../images/orange-bg.svg';
import blueBackground from '../images/bx-home.svg';
import arrow from '../icons/right-arrow.svg';

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
  margin-bottom: ${({ marginBottom }) => marginBottom || 20}px;

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
    text-align: left;
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
  margin-bottom: ${({ marginBottom }) => marginBottom || 20}px;

  @media (min-width: 48rem) {
    text-align: left;
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

  @media (min-width: 48rem) {
    font-size: 16px;
  }

  @media (min-width: 64rem) {
    font-size: 18px;
  }
`;

export const Paragraph = styled.p`
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  line-height: 1.88;
  color: #ffffff;
  opacity: ${({ tainted }) => (tainted ? '0.6' : '1')};
  text-align: ${({ center }) => (center ? 'center' : 'start')};
  margin-bottom: ${({ marginBottom }) => marginBottom || 25}px;
  margin-top: ${({ marginTop }) => marginTop || 0}px;

  @media (max-width: 767px) {
    text-align: center;
  }
`;

export const Anchor = styled.a`
  font-family: Roboto, sans-serif;
  font-size: 16px;
  line-height: 1.88;
  color: #ff4952;
  transition: all 0.5s;
  display: block;
  cursor: pointer;
  text-align: ${({ center }) => (center ? 'center' : 'start')};
  margin-bottom: ${({ marginBottom }) => marginBottom || 0}px;


  @media (min-width: 48rem) {
    text-align: start;
  }

  :after {
    content: '';
    display: inline-block;
    width: 14px;
    height: 11px;
    margin-left: 5px;
    background: url(${arrow}) no-repeat;
    background-size: contain;
    transition: all 300ms ease-in-out;
  }

  :hover {
    :after {
      transform: translatex(7px);
      transition: all 0.4s;
    }
  }
`;

export const WidthContainer = styled.div`
  width: 100%;
  margin-bottom: ${({ marginBottom }) => marginBottom || '0'}px;

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

export const Button = styled.button`
  font-family: 'Roboto', sans-serif;
  padding: 12px 22px;
  color: #fff;
  border-radius: 30px;
  background: rgba(255, 73, 82, 0);
  border: 1px solid rgba(255, 73, 82, 0.6);
  border-right: 1px solid transparent;
  background: #ff4952;
  display: flex;
  align-items: center;
  cursor: pointer;

  :after {
    content: '';
    display: inline-block;
    width: 20px;
    height: 15px;
    margin-left: 10px;
    background: url(${arrow}) no-repeat;
    background-size: contain;
    transition: all 300ms ease-in-out;
  }

  :hover {
    :after {
      transform: translatex(7px);
      transition: all 0.4s;
    }
  }
`;
