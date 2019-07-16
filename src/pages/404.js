import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <header>
      <h1><strong>404</strong></h1>
      <p>Gosh, there's nothing here at all. Well, that's all right. At least we have each other.</p>
      <p><a href="/">Click here</a> to head back when you're ready.</p>
    </header>
    <Link to="/"></Link>
  </Layout>
)

export default NotFoundPage
