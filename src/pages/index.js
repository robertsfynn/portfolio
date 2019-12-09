import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Hero from "../components/Hero/Hero"
import Portfolio from "../components/Portfolio/Portfolio"
import AboutMe from "../components/AboutMe"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Hero />
      <AboutMe />
      <Portfolio items={data.allMarkdownRemark.edges} />
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            description
            previewImage {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default IndexPage
