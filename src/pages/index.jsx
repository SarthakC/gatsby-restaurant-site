import React from "react"

import { HomeHeader, Layout, SEO, Banner } from "../components/Global"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeHeader>
      <Banner title="eatery" subtitle="anjuna beach, goa" />
    </HomeHeader>
  </Layout>
)

export default IndexPage
