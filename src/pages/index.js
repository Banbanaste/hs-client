import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Hacker Sunday, under dev</h1>
    <p>
      <Link to="/about">Go to About</Link> <br />
      <Link to="/history">Go to History</Link> <br />
      <Link to="/links">Go to Links</Link> <br />
    </p>
  </Layout>
)

export default IndexPage
