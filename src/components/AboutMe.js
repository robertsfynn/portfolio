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
import mobileDevelopmentIcon from '../icons/mobile-app.svg';
import webDevelopmentIcon from '../icons/html.svg';
import cmsIcon from '../icons/computer.svg';
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
                  I'm a 24 year old business informatics student from Berlin,
                  Germany. I'm a Javascript enthusiast and specialized in
                  creating web applications. During my studies I've already been
                  able to gain some professional experience. Besides my work as
                  a working student in different startups I've also worked on
                  various projects - please take a look down below!
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
                      <Icon
                        src={mobileDevelopmentIcon}
                        alt="Mobile Development"
                      />
                      <Header6>
                        Mobile
                        <br />
                        Development
                      </Header6>
                    </WidthContainer>
                  </Col>
                  <Col xs={12} sm={4}>
                    <WidthContainer>
                      <Icon src={cmsIcon} alt="CMS" />
                      <Header6>
                        Backend
                        <br />
                        Developer
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
