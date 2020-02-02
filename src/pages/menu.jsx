import React from "react"

import SEO from "../components/Global/SEO/SEO"
import { PageHeader, Banner, Layout } from "../components/Global"

import menuBcg from "../images/bcg/menuBcg.jpeg"

const MenuPage = () => (
  <Layout>
    <SEO title="Home" />
    <PageHeader img={menuBcg}>
      <Banner title="menu" subtitle={`let's dig in`} />
    </PageHeader>
  </Layout>
)

export default MenuPage
