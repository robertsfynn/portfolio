import React from 'react';
import { Container, Col } from 'react-awesome-styled-grid';
import styled from 'styled-components';
import { Section, Header2, Header5, Paragraph, StyledRow } from './Typograhpy';
import arrow from '../icons/right-arrow.svg';
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
  border: 0px;
  border-radius: 0px;
  font-size: 16px;
  color: #ffffff;
  border-bottom: 1px solid rgba(255, 255, 255, 0.25);
  margin-top: 30px;
  background: transparent;
`;

const SubmitButton = styled.button`
  font-family: 'Roboto', sans-serif;
  padding: 19px 22px;
  color: #fff;
  border-radius: 30px;
  background: rgba(255, 73, 82, 0);
  border: 1px solid rgba(255, 73, 82, 0.6);
  border-right: 1px solid transparent;
  background: #ff4952;
  display: flex;
  align-items: center;
  cursor: pointer;

  :after {
    content: '';
    display: inline-block;
    width: 20px;
    height: 15px;
    margin-left: 15px;
    background: url(${arrow}) no-repeat;
    background-size: contain;
  }
`;

const ContactForm = () => {
  return (
    <Section id="contact-form">
      <Container>
        <StyledRow>
          <Col xs={12} sm={5}>
            <FadeBottom>
              <ContactContainer>
                <Header2 align="start">Contact Me</Header2>
                <Header5 marginBottom={1}>Mail</Header5>
                <Paragraph tainted>robertsfynn@gmail.com</Paragraph>
                <Header5 marginBottom={1}>Github</Header5>
                <Paragraph tainted>github.com/robertsfynn</Paragraph>
                <Header5 marginBottom={1}>Mail</Header5>
                <Paragraph tainted>robertsfynn@gmail.com</Paragraph>
              </ContactContainer>
            </FadeBottom>
          </Col>
          <Col xs={12} sm={7}>
            <FadeBottom>
              <ContactFormContainer>
                <form name="Contact Form" method="POST" data-netlify="true">
                  <input type="hidden" name="form-name" value="Contact Form" />
                  <InputContainer>
                    <Label for="name">Name:</Label>
                    <Input required type="text" name="name" />
                  </InputContainer>
                  <InputContainer>
                    <Label for="email">Your Email:</Label>
                    <Input required type="email" name="email" />
                  </InputContainer>
                  <InputContainer>
                    <Label for="message">Message:</Label>
                    <Textarea required name="message" />
                  </InputContainer>
                  <SubmitButton type="submit">Send Message</SubmitButton>
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
