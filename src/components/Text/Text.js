import styled from "styled-components"

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
    tainted ? "rgba(255, 255, 255, 0.7)" : "rgb(255, 255, 255)"};
  text-align: center;
`

export const Header2 = styled.h2`
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 34px;
  line-height: 40.8px;
  letter-spacing: -1.5px;
  color: #ffffff;
`

export const Header5 = styled.h5`
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 40.8px;
  letter-spacing: -1.5px;
  color: #ffffff;
`

export const Header6 = styled.h6`
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  color: #ffffff;
  margin-top: ${({ marginTop }) => marginTop}px;
`

export const Paragraph = styled.p`
  font-family: Roboto, sans-serif;
  font-size: 16px;
  line-height: 1.88;
  color: #ffffff;
`
