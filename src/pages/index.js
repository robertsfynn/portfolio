import React from "react"
import Layout from "../components/layout"
import Hero from "../components/Hero/Hero"
import Portfolio from "../components/Portfolio/Portfolio"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Hero />
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
