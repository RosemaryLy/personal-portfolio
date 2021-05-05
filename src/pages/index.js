import React from "react"
import { Link } from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Container>
      <Image />
    </Container>
    <Link to="/page-2/">Go to page 2</Link><br/>
    <Link to="/aboutMe/">About Me</Link>
  </Layout>
)

export default IndexPage
