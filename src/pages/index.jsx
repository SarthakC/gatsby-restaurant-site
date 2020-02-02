import React from "react"

import {
  HomeHeader,
  Layout,
  SEO,
  Banner,
  BannerButton,
} from "../components/Global"
import QuickInfo from "../components/HomePageComponents/QuickInfo/QuickInfo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeHeader>
      <Banner title="eatery" subtitle="anjuna beach, goa">
        <BannerButton style={{ margin: "2rem auto" }}>Menu</BannerButton>
      </Banner>
    </HomeHeader>
    <QuickInfo />
  </Layout>
)

export default IndexPage
