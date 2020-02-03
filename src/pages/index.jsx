import React from "react"

import {
  HomeHeader,
  SEO,
  Banner,
  BannerButton,
  Layout,
} from "../components/Global"
import { QuickInfo, Gallery, Menu } from "../components/HomePageComponents"
import { Link } from "gatsby"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeHeader>
      <Banner title="eatery" subtitle="anjuna beach, goa">
        <Link to="/menu" style={{ textDecoration: "none" }}>
          <BannerButton style={{ margin: "2rem auto" }} to="/menu">
            Menu
          </BannerButton>
        </Link>
      </Banner>
    </HomeHeader>
    <QuickInfo />
    <Gallery />
    <Menu />
  </Layout>
)

export default IndexPage
