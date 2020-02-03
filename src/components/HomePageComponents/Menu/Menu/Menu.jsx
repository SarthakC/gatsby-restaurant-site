import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Product from "../Product/Product"
import { Section, Title } from "../../../Global"
import { ProductList } from "./Menu.styles."

export const query = graphql`
  {
    items: allContentfulMenu {
      nodes {
        id
        ingredients
        name
        price
        img {
          fixed(width: 150, height: 150) {
            ...GatsbyContentfulFixed_tracedSVG
          }
        }
      }
    }
  }
`

const Menu = () => {
  return (
    <Section>
      <Title title="featured items" message="little taste" />
      <ProductList>
        <StaticQuery
          query={query}
          render={({ items: { nodes: products } }) => {
            return products.map(product => (
              <Product key={product.id} product={product} />
            ))
          }}
        />
      </ProductList>
    </Section>
  )
}

export default Menu
