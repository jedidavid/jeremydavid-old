import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Landing from "../components/landing"
import About from "../components/about"
import Works from "../components/work"
import Contact from "../components/contact"
const IndexPage = () => (
  <div>
    <Layout>
      <SEO
        title="Jeremy David"
        keywords={[
          `Jeremy David`,
          "Web Developer",
          "Fullstack Developer",
          "Portfolio",
        ]}
      />
      <Landing />
      <Works />
      <About />
      <Contact />
    </Layout>
  </div>
)

export default IndexPage
