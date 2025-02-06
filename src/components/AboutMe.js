import React from 'react';
import { Container, Col } from 'react-awesome-styled-grid';
import {
  Header2,
  Paragraph,
  Header6,
  WidthContainer,
  Section,
  StyledRow,
} from './Typograhpy';
import styled from 'styled-components';
import webDevelopmentIcon from '../icons/html.svg';
import backendIcon from '../icons/computer.svg';
import { FadeBottom } from '../animations';

const Icon = styled.img`
  width: 50px;
  height: 50px;
  margin: auto;
  margin-bottom: 20px;
  display: block;
`;

const AboutMeParagraph = styled(Paragraph)`
  margin-bottom: 25px;

  @media (min-width: 48rem) {
    margin-bottom: 0;
  }
`;

const AboutMe = () => {
  return (
    <Section id="about-me">
      <Container>
        <FadeBottom>
          <Header2>About me</Header2>
          <StyledRow>
            <Col sm={6}>
              <WidthContainer>
                <AboutMeParagraph tainted>
                  Fullstack Software Engineer with expertise in modern web
                  technologies, scalable architecture, and DevOps automation.
                  Passionate about building high-performance applications and
                  improving system efficiency.
                </AboutMeParagraph>
              </WidthContainer>
            </Col>
            <Col sm={6} align="center">
              <WidthContainer>
                <StyledRow>
                  <Col xs={12} sm={4} justify="center">
                    <WidthContainer>
                      <Icon src={webDevelopmentIcon} alt="Web Development" />
                      <Header6>
                        Web
                        <br />
                        Development
                      </Header6>
                    </WidthContainer>
                  </Col>
                  <Col xs={12} sm={4}>
                    <WidthContainer>
                      <Icon src={backendIcon} alt="Backend Development" />
                      <Header6>
                        Backend
                        <br />
                        Development
                      </Header6>
                    </WidthContainer>
                  </Col>
                </StyledRow>
              </WidthContainer>
            </Col>
          </StyledRow>
        </FadeBottom>
      </Container>
    </Section>
  );
};

export default AboutMe;
