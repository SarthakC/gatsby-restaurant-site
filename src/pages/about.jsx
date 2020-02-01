import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/Global/Layout/Layout"
import SEO from "../components/Global/SEO/SEO"
import { PageHeader } from "../components/Global"

import aboutImg from "../images/bcg/aboutBcg.jpeg"

const AboutPage = () => (
  <Layout>
    <SEO title="Home" />
    <PageHeader img={aboutImg}>
      <h3>Hello</h3>
    </PageHeader>
  </Layout>
)

export default AboutPage
