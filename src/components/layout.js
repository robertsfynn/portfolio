/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "styled-components"

// import { useStaticQuery, graphql } from "gatsby"

import "./layout.css"
import "./style.css"

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

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
      md: 64, // max-width: 1024px
      lg: 64, // max-width: 1024px
      xl: 64, // max-width: 1024px
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
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <main>{children}</main>
      <footer></footer>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
