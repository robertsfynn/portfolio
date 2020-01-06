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

const AboutMe = () => {
  return (
    <Section id="about-me">
      <Container>
        <StyledRow>
          <Col sm={6}>
            <WidthContainer>
              <FadeBottom>
                <Header2>About me</Header2>
                <Paragraph tainted>
                  I'm a 24 year old Business Informatics student in Berlin,
                  Germany. I'm a Javascript enthusiast, with experience with
                  React, Node ... (todo)
                </Paragraph>
              </FadeBottom>
            </WidthContainer>
          </Col>
          <Col sm={6}>
            <WidthContainer>
              <FadeBottom>
                <Header2>What I Do</Header2>
              </FadeBottom>
              <FadeBottom>
                <StyledRow>
                  <Col xs={12} sm={4} justify="center">
                    <WidthContainer>
                      <Icon src={webDevelopmentIcon} alt="Web Development" />
                      <Header6>Web Development</Header6>
                    </WidthContainer>
                  </Col>
                  <Col xs={12} sm={4}>
                    <WidthContainer>
                      <Icon
                        src={mobileDevelopmentIcon}
                        alt="Mobile Development"
                      />
                      <Header6>Mobile Development</Header6>
                    </WidthContainer>
                  </Col>
                  <Col xs={12} sm={4}>
                    <WidthContainer>
                      <Icon src={cmsIcon} alt="CMS" />
                      <Header6>
                        CMS
                        <br /> Developer
                      </Header6>
                    </WidthContainer>
                  </Col>
                </StyledRow>
              </FadeBottom>
            </WidthContainer>
          </Col>
        </StyledRow>
      </Container>
    </Section>
  );
};

export default AboutMe;
