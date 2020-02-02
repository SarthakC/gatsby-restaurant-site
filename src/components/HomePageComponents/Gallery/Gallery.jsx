import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Img from "gatsby-image"
import { Section } from "../../Global"
import { GalleryWrapper } from "./Gallery.styles"

export const query = graphql`
  {
    images: allFile(filter: { relativeDirectory: { eq: "homeGallery" } }) {
      nodes {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  }
`
const foodNames = ["awesome pizza", "tasty pork", "yummy steak"]

const Gallery = () => {
  return (
    <StaticQuery
      query={query}
      render={({ images: { nodes: images } }) => (
        <Section>
          <GalleryWrapper>
            {images.map(({ id, childImageSharp }, index) => (
              <div key={id}>
                <Img fluid={childImageSharp.fluid} />
                <p>{foodNames[index]}</p>
              </div>
            ))}
          </GalleryWrapper>
        </Section>
      )}
    />
  )
}

export default Gallery
