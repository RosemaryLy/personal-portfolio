import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const myWork = () => (
  <Layout>
    <SEO title="About Me" />
    <h1>My Work Page</h1>
    <p>Welcome to my Work</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default myWork