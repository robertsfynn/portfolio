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
        <FadeBottom>
          <Header2>About me</Header2>
          <StyledRow>
            <Col sm={6}>
              <WidthContainer>
                <Paragraph tainted>
                  I'm a 24 year old Business Informatics student in Berlin,
                  Germany. I'm a Javascript enthusiast, with experience with
                  React, Node ... (todo) Lorem, ipsum dolor sit amet consectetur
                  adipisicing elit. Commodi, quae amet quidem et sint numquam
                  tempora? Tenetur earum, voluptas ex illum consequatur nisi
                  laudantium tempore consequuntur quae dolorem odit quos?
                </Paragraph>
              </WidthContainer>
            </Col>
            <Col sm={6} align="center">
              <WidthContainer>
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
              </WidthContainer>
            </Col>
          </StyledRow>
        </FadeBottom>
      </Container>
    </Section>
  );
};

export default AboutMe;
