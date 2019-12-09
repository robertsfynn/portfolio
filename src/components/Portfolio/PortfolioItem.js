import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { Paragraph, Header5 } from "../Text/Text"
import { FadeBottom } from "../Animations/Animations"
import BlockRevealAnimation from "react-block-reveal-animation"

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

const WidthContainer = styled.div`
  width: 100%;
`

const colors = [
  "to bottom, #65b1ff, #2c65e7",
  "175deg, #ff7847, #ffac8e",
  "311deg, #766ced, #413ad6",
]

const PortfolioItem = ({ image, item, description, title, slug }) => {
  return (
    //Until I create it in react spring
    <BlockRevealAnimation>
      <Link to={slug}>
        <StyledPortfolioItem item={item}>
          <FadeBottom delay={1500}>
            <StyledPortfolioContainer>
              <WidthContainer>
                <Img fluid={image} />
              </WidthContainer>
              <Header5>{title}</Header5>
              <Paragraph>{description}</Paragraph>
            </StyledPortfolioContainer>
          </FadeBottom>
        </StyledPortfolioItem>
      </Link>
    </BlockRevealAnimation>
  )
}

export default PortfolioItem
