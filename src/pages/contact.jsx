import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/Global/Layout/Layout"
import SEO from "../components/Global/SEO/SEO"
import { PageHeader } from "../components/Global"

import contactImg from "../images/bcg/contactBcg.jpeg"

const ContactPage = () => (
  <Layout>
    <SEO title="Home" />
    <PageHeader img={contactImg}>
      <h3>Hello</h3>
    </PageHeader>
  </Layout>
)

export default ContactPage
