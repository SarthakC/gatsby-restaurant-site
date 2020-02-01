import React from "react"

import {
  HomeHeader,
  Layout,
  SEO,
  Banner,
  BannerButton,
} from "../components/Global"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeHeader>
      <Banner title="eatery" subtitle="anjuna beach, goa">
        <BannerButton style={{ margin: "2rem auto" }}>Menu</BannerButton>
      </Banner>
    </HomeHeader>
  </Layout>
)

export default IndexPage
