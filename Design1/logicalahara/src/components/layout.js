import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Container } from "react-bootstrap"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <Container
        className="pt-2"
        style={{
          position: "fixed",
        }}
      >
        <main>{children}</main>
      </Container>
    </>
  )
}

export default Layout
