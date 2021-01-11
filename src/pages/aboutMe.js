import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const aboutMe = () => (
  <Layout>
    <SEO title="About Me" />
    <h1>About Me Page</h1>
    <p>Welcome to About Me</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default aboutMe