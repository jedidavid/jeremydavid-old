import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Home from "../components/home"
import About from "../components/about"
import Works from "../components/work"
import Contact from "../components/contact"
const IndexPage = () => (
  <div>
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Home />
      <Works />
      <About />
      <Contact />
    </Layout>
  </div>
)

export default IndexPage
