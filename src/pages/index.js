import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Projects from "../components/projects"

const IndexPage = () => (  
  <Layout>
    <SEO title="Staircase Witch" />
    <header>
      <h1>
        <strong>James Firkins</strong> <a href="https://www.artstation.com/staircasewitch" rel="me">illustrates traditional &amp; digital art</a>,<br />
        <a href="https://jamesfirkins.me" rel="me">builds websites</a>,<br />
        &amp; <a href="https://staircasewit.ch/fiction" rel="me">writes short stories</a>. This is where his personal projects live.
      </h1>
    </header>
    <Projects />
  </Layout>
)

export default IndexPage
