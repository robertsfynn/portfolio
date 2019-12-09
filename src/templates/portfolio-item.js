import React from "react"
import { graphql } from "gatsby"
import { Container, Row, Col } from "react-awesome-styled-grid"
import styled from "styled-components"
import Flickity from "react-flickity-component"
import Img from "gatsby-image"
import { Header1, Header3, Paragraph } from "../components/Text/Text"
import Layout from "../components/layout"
import Tags from "../components/Tags"
import { FadeBottom } from "../components/Animations/Animations"

const SmallContainer = styled.div`
  max-width: 670px;
  margin: auto;
  text-align: center;
`

const WidthContainer = styled.div`
  width: 100%;
`

const flickityOptions = {
  pageDots: false,
}

export default ({ data }) => {
  const { html } = data.markdownRemark
  const {
    title,
    description,
    technologies,
    preview,
    featuredImage,
  } = data.markdownRemark.frontmatter
  const image = featuredImage.childImageSharp.fluid

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
          <Flickity
            className={"carousel"} // default ''
            options={flickityOptions} // takes flickity options {}
            static
          >
            <WidthContainer>
              <Img fluid={image} />
            </WidthContainer>
            <WidthContainer>
              <Img fluid={image} />
            </WidthContainer>
            <WidthContainer>
              <Img fluid={image} />
            </WidthContainer>
          </Flickity>

          <Row>
            <Col xs={12} sm={8}>
              <WidthContainer>
                <Header3>Description</Header3>
                <Paragraph
                  tainted
                  dangerouslySetInnerHTML={{ __html: html }}
                ></Paragraph>
              </WidthContainer>
            </Col>
            <Col sm={1}></Col>
            <Col xs={12} sm={3}>
              <WidthContainer>
                <Header3>Details</Header3>
                <Paragraph marginBottom={10} bold>
                  Technologies
                </Paragraph>
                <Tags tags={technologies} />
                <Paragraph marginBottom={1} marginTop={20} bold>
                  Preview
                </Paragraph>
                <Paragraph>{preview}</Paragraph>
              </WidthContainer>
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
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 1140) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
