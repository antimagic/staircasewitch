import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <header>
      <h1>
        <strong>James Firkins</strong> <a href="https://www.artstation.com/staircasewitch" rel="me">illustrates traditional &amp; digital art</a>,<br />
        <a href="https://jamesfirkins.me" rel="me">builds websites</a>,<br />
        &amp; <a href="https://staircasewit.ch/fiction" rel="me">writes short stories</a>. This is where his personal projects live.
      </h1>
    </header>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
