import React from 'react';
import { Container, Col } from 'react-awesome-styled-grid';
import styled from 'styled-components';
import {
  Section,
  Header2,
  Header5,
  StyledRow,
  Button,
  Anchor,
} from './Typograhpy';
import { FadeBottom } from '../animations';

const ContactFormContainer = styled.div`
  padding: 30px 40px;
  background-color: #1c2039;
  text-align: center;
  width: 100%;

  @media (min-width: 48rem) {
    padding: 65px 90px;
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  width: 100%;
`;

const Label = styled.label`
  font-family: 'Roboto', sans-serif;
  border: 0px;
  border-radius: 0px;
  font-size: 16px;
  color: #ffffff;
  background: transparent;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  text-align: justify;
  color: #ffffff;
`;

const Input = styled.input`
  font-family: 'Roboto', sans-serif;
  border: 0px;
  border-radius: 0px;
  font-size: 16px;
  color: #ffffff;
  border-bottom: 1px solid rgba(255, 255, 255, 0.25);
  margin-top: 30px;
  background: transparent;
`;

const Textarea = styled.textarea`
  font-family: 'Roboto', sans-serif;
  border: 0px;
  border-radius: 0px;
  font-size: 16px;
  color: #ffffff;
  border-bottom: 1px solid rgba(255, 255, 255, 0.25);
  margin-top: 30px;
  max-width: 100%;
  background: transparent;
`;

const ContactForm = () => {
  return (
    <Section id="contact-form">
      <Container>
        <StyledRow>
          <Col xs={12} sm={5}>
            <ContactContainer>
              <FadeBottom>
                <Header2 align="left">Contact me</Header2>
                <Header5 marginBottom={'0'}>Mail</Header5>
                <Anchor center href="mailto:robertsfynn@gmail.com">
                  robertsfynn@gmail.com
                </Anchor>
                <Header5 marginBottom={'0'}>Github</Header5>
                <Anchor
                  center
                  href={`https://github.com/robertsfynn`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/robertsfynn
                </Anchor>
                <Header5 marginBottom={'0'}>LinkedIn</Header5>
                <Anchor
                  center
                  href={`https://www.linkedin.com/in/fynn-roberts-1474b1175/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  marginBottom={24}
                >
                  linkedin.com/fynn-roberts
                </Anchor>
              </FadeBottom>
            </ContactContainer>
          </Col>
          <Col xs={12} sm={7}>
            <FadeBottom>
              <ContactFormContainer>
                <form name="Contact Form" method="POST" data-netlify="true">
                  <input type="hidden" name="form-name" value="Contact Form" />
                  <InputContainer>
                    <Label htmlFor="name">Name:</Label>
                    <Input required type="text" name="name" />
                  </InputContainer>
                  <InputContainer>
                    <Label htmlFor="email">Email:</Label>
                    <Input required type="email" name="email" />
                  </InputContainer>
                  <InputContainer>
                    <Label htmlFor="message">Message:</Label>
                    <Textarea required name="message" />
                  </InputContainer>
                  <Button type="submit">Send Message</Button>
                </form>
              </ContactFormContainer>
            </FadeBottom>
          </Col>
        </StyledRow>
      </Container>
    </Section>
  );
};

export default ContactForm;
