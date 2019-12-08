import React from "react"
import { ThemeProvider } from "styled-components"
import Layout from "../components/layout"
import Hero from "../components/Hero/Hero"
import Portfolio from "../components/Portfolio/Portfolio"

const IndexPage = ({ data }) => {
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
  return (
    <ThemeProvider theme={{ awesomegrid: customConf }}>
      <Layout>
        <Hero />
        <Portfolio items={data.allMarkdownRemark.edges} />
      </Layout>
    </ThemeProvider>
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
            preview
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
