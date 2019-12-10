import React from "react"
import { Container, Row, Col } from "react-awesome-styled-grid"
import styled from "styled-components"
import {
  Section,
  WidthContainer,
  Header2,
  Header5,
  Paragraph,
} from "./Text/Text"

const Label = styled.label`
  border: 0px;
  border-radius: 0px;
  font-size: 16px;
  color: #ffffff;
  margin-top: 30px;
  background: transparent;
`

const Input = styled.input`
  border: 0px;
  border-radius: 0px;
  font-size: 16px;
  color: #ffffff;
  border-bottom: 1px solid rgba(255, 255, 255, 0.25);
  margin-top: 30px;
  background: transparent;
`

const ContactForm = () => {
  return (
    <Section id="contact-form">
      <Container>
        <Row>
          <Col>
            <WidthContainer>
              <Header2>Contact Me</Header2>
              <Header5 align="start">Mail</Header5>
              <Paragraph>robertsfynn@gmail.com</Paragraph>
              <Header5>Mail</Header5>
              <Paragraph>robertsfynn@gmail.com</Paragraph>
              <Header5>Mail</Header5>
              <Paragraph>robertsfynn@gmail.com</Paragraph>
            </WidthContainer>
          </Col>
          <Col>
            <WidthContainer>
              <form name="Contact Form" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="Contact Form" />
                <div>
                  <Label for="name">Name:</Label>
                  <Input type="text" name="name" />
                </div>
                <div>
                  <Label for="email">Your Email:</Label>
                  <Input type="email" name="email" />
                </div>
                <div>
                  <Label for="message">Message:</Label>
                  <textarea name="message" />
                </div>
                <button type="submit">Send</button>
              </form>
            </WidthContainer>
          </Col>
        </Row>
      </Container>
    </Section>
  )
}

export default ContactForm
