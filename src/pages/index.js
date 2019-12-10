import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Hero from "../components/Hero/Hero"
import Portfolio from "../components/Portfolio/Portfolio"
import AboutMe from "../components/AboutMe"
import ContactForm from "../components/ContactForm"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Hero />
      <AboutMe />
      <Portfolio items={data.allMarkdownRemark.edges} />
      {/* <ContactForm /> */}
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
