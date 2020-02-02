import React from "react"

import {
  HomeHeader,
  SEO,
  Banner,
  BannerButton,
  Layout,
} from "../components/Global"
import { QuickInfo, Gallery } from "../components/HomePageComponents"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeHeader>
      <Banner title="eatery" subtitle="anjuna beach, goa">
        <BannerButton style={{ margin: "2rem auto" }}>Menu</BannerButton>
      </Banner>
    </HomeHeader>
    <QuickInfo />
    <Gallery />
  </Layout>
)

export default IndexPage
