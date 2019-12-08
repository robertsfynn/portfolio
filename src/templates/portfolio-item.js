import React from "react"
import { graphql } from "gatsby"
import { Container, Row, Col } from "react-awesome-styled-grid"
import { Header1, Header3, Paragraph } from "../components/Text/Text"
import Layout from "../components/layout"
import styled from "styled-components"
import Tags from "../components/Tags"
import { FadeBottom } from "../components/Animations/Animations"

const SmallContainer = styled.div`
  max-width: 670px;
  margin: auto;
  text-align: center;
`

export default ({ data }) => {
  const { html } = data.markdownRemark
  const {
    title,
    description,
    technologies,
    preview,
  } = data.markdownRemark.frontmatter

  return (
    <Layout>
      <FadeBottom>
        <Container>
          <Header1>{title}</Header1>
          <SmallContainer>
            <Paragraph tainted center>
              {description}
            </Paragraph>
          </SmallContainer>
          <img src="https://via.placeholder.com/1152x740"></img>
          <Row>
            <Col xs={12} sm={8}>
              <div style={{ width: "100%" }}>
                <Header3>Description</Header3>
                <Paragraph
                  tainted
                  dangerouslySetInnerHTML={{ __html: html }}
                ></Paragraph>
              </div>
            </Col>
            <Col sm={1}></Col>
            <Col xs={12} sm={3}>
              <div style={{ width: "100%" }}>
                <Header3>Details</Header3>
                <Paragraph marginBottom={10} bold>
                  Technologies
                </Paragraph>
                <Tags tags={technologies} />
                <Paragraph marginBottom={1} marginTop={20} bold>
                  Preview
                </Paragraph>
                <Paragraph>{preview}</Paragraph>
              </div>
            </Col>
          </Row>
        </Container>
      </FadeBottom>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
        technologies
        preview
      }
    }
  }
`
