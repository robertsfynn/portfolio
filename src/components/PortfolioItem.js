import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { Paragraph, Header5, Button } from './Typograhpy';
import { FadeBottom, BlockReveal, Fade } from '../animations';

const HoverState = styled.div`
  transition: all 0.4s;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0);
  transition: all 0.4s;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledPortfolioItem = styled.div`
  background-image: linear-gradient(${({ item }) => colors[item]});
  padding: 50px 45px;

  ${Button} {
    transition: all 0.4s;
    opacity: 0;
    transform: translateY(20px);
  }

  :hover {
    ${HoverState} {
      transition: all 0.4s;
      background-color: rgba(0, 0, 0, 0.6);
    }

    ${Button} {
      transition: all 0.4s;
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

const StyledPortfolioContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const WidthContainer = styled.div`
  width: 100%;
`;

const TextContainer = styled.div`
  max-width: 70%;
`;

const MarginContainer = styled.div`
  margin-bottom: 30px;
  width: 100%;
`;

const colors = [
  'to bottom, #65b1ff, #2c65e7',
  '311deg, #766ced, #413ad6',
  '175deg, #ff7847, #ffac8e',
  '330deg, #ffe596, #ffbf00',
];

const PortfolioItem = ({ image, item, description, title, slug }) => {
  return (
    <MarginContainer>
      <Fade>
        <BlockReveal>
          <Link to={slug}>
            <StyledPortfolioItem item={item}>
              <FadeBottom delay={1000}>
                <StyledPortfolioContainer>
                  <WidthContainer>
                    <Img fluid={image} />
                  </WidthContainer>
                </StyledPortfolioContainer>
              </FadeBottom>
              <HoverState>
                <Button>View Project</Button>
              </HoverState>
            </StyledPortfolioItem>
          </Link>
        </BlockReveal>
      </Fade>
    </MarginContainer>
  );
};

export default PortfolioItem;
