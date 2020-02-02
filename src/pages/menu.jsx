import React from "react"
// import { Link } from "gatsby"

import { Layout } from "../components/Layout"
import SEO from "../components/Global/SEO/SEO"
import { PageHeader, Banner } from "../components/Global"

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
