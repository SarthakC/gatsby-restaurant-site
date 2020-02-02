import React from "react"

import {
  HomeHeader,
  SEO,
  Banner,
  BannerButton,
  Layout,
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
