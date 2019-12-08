import React from "react"
import { graphql } from "gatsby"
import { Container, Row, Col } from "react-awesome-styled-grid"
import { Header1, Header3, Paragraph } from "../components/Text/Text"
import Layout from "../components/layout"
import styled, { ThemeProvider } from "styled-components"
import Tags from "../components/Tags"
import { FadeBottom } from "../components/Animations/Animations"

const SmallContainer = styled.div`
  max-width: 670px;
  margin: auto;
  text-align: center;
`

export default ({ data }) => {
  const customConf = {
    mediaQuery: "only screen",
    columns: {
      xs: 12,
      sm: 12,
      md: 12,
      lg: 12,
      xl: 12,
    },
    gutterWidth: {
      xs: 0,
      sm: 0,
      md: 1.5,
      lg: 1.5,
      xl: 1.5,
    },
    paddingWidth: {
      xs: 1,
      sm: 1,
      md: 1.5,
      lg: 1.5,
      xl: 1.5,
    },
    container: {
      xs: "full", // 'full' = max-width: 100%
      sm: "full", // 'full' = max-width: 100%
      md: "full", // 'full' = max-width: 100%
      lg: 64, // max-width: 1440px
      xl: 64, // max-width: 1440px
    },
    breakpoints: {
      xs: 1,
      sm: 48, // 768px
      md: 64, // 1024px
      lg: 90, // 1440px
      xl: 120, // 1920px
    },
  }

  const { html } = data.markdownRemark
  const {
    title,
    description,
    technologies,
    preview,
  } = data.markdownRemark.frontmatter

  return (
    <Layout>
      <ThemeProvider theme={{ awesomegrid: customConf }}>
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
                <div>
                  <Header3>Description</Header3>
                  <Paragraph
                    tainted
                    dangerouslySetInnerHTML={{ __html: html }}
                  ></Paragraph>
                </div>
              </Col>
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
      </ThemeProvider>
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
