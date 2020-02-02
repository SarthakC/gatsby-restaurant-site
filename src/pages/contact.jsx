import React from "react"
// import { Link } from "gatsby"

import { Layout } from "../components/Layout"
import SEO from "../components/Global/SEO/SEO"
import { PageHeader, Banner } from "../components/Global"

import contactImg from "../images/bcg/contactBcg.jpeg"

const ContactPage = () => (
  <Layout>
    <SEO title="Home" />
    <PageHeader img={contactImg}>
      <Banner title="contact us" subtitle="lets get in touch" />
    </PageHeader>
  </Layout>
)

export default ContactPage
