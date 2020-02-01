import React from "react"

import { HomeHeader, Layout, SEO } from "../components/Global"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeHeader>Hello from header</HomeHeader>
  </Layout>
)

export default IndexPage
