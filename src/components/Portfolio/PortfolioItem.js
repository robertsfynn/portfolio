import React, { useState } from "react"
import styled from "styled-components"
import { Paragraph, Header5 } from "../Text/Text"

const StyledPortfolioItem = styled.div`
  background-image: linear-gradient(${({ item }) => colors[item]});
  padding: 50px 45px;
  margin-bottom: 30px;
`

const colors = [
  "311deg, #766ced, #413ad6",
  "to bottom, #65b1ff, #2c65e7",
  "175deg, #ff7847, #ffac8e",
]

const PortfolioItem = ({ image, item }) => {
  const [animation, setAnimation] = useState(false)

  return (
    <div className={`${animation ? "block-reveal" : ""}`}>
      <StyledPortfolioItem item={item}>
        <img src={image} alt="Mobile" />
        <Header5>App Design</Header5>
        <Paragraph>Yeaaah</Paragraph>
      </StyledPortfolioItem>
    </div>
  )
}

export default PortfolioItem
