import React from "react"

import { Layout, SEO, PageHeader, Banner } from "../components/Global"

import aboutImg from "../images/bcg/aboutBcg.jpeg"

const AboutPage = () => (
  <Layout>
    <SEO title="Home" />
    <PageHeader img={aboutImg}>
      <Banner title="about us" subtitle="a little about us" />
    </PageHeader>
  </Layout>
)

export default AboutPage
