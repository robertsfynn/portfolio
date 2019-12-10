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
  margin-bottom: ${({ marginBottom }) => (marginBottom ? marginBottom : "0")}px;

  @media (min-width: 64rem) {
    margin-bottom: 0;
  }
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
    featuredImages,
  } = data.markdownRemark.frontmatter

  return (
    <Layout>
      <Container>
        <FadeBottom>
          <Header1 align="center">{title}</Header1>
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
            {featuredImages.map(image => (
              <WidthContainer key={image.id}>
                <Img fluid={image.childImageSharp.fluid} />
              </WidthContainer>
            ))}
          </Flickity>
        </FadeBottom>
        <Row>
          <Col xs={12} sm={8}>
            <FadeBottom>
              <WidthContainer marginBottom={75}>
                <Header3>Description</Header3>
                <Paragraph
                  tainted
                  dangerouslySetInnerHTML={{ __html: html }}
                ></Paragraph>
              </WidthContainer>
            </FadeBottom>
          </Col>
          <Col sm={1}></Col>
          <Col xs={12} sm={3}>
            <FadeBottom>
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
            </FadeBottom>
          </Col>
        </Row>
      </Container>
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
        featuredImages {
          id
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
