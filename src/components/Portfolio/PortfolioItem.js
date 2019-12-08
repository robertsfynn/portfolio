import React from "react"
import styled from "styled-components"
import { Paragraph, Header5 } from "../Text/Text"
import { BlockReveal, FadeBottom } from "../Animations/Animations"

const StyledPortfolioItem = styled.div`
  background-image: linear-gradient(${({ item }) => colors[item]});
  padding: 50px 45px;
  margin-bottom: 30px;
`

const StyledPortfolioContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const colors = [
  "to bottom, #65b1ff, #2c65e7",
  "175deg, #ff7847, #ffac8e",
  "311deg, #766ced, #413ad6",
]

const PortfolioItem = ({ image, item, description, title }) => {
  return (
    <BlockReveal>
      <StyledPortfolioItem item={item}>
        <FadeBottom delay={1000}>
          <StyledPortfolioContainer>
            <img src={image} alt="Mobile" />
            <Header5>{title}</Header5>
            <Paragraph>{description}</Paragraph>
          </StyledPortfolioContainer>
        </FadeBottom>
      </StyledPortfolioItem>
    </BlockReveal>
  )
}

export default PortfolioItem
