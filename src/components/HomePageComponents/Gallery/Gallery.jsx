import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Img from "gatsby-image"
import { Section } from "../../Global"
import { GalleryWrapper } from "./Gallery.styles"

const query = graphql`
  {
    img1: file(relativePath: { eq: "homeGallery/img-1.jpeg" }) {
      id
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    img2: file(relativePath: { eq: "homeGallery/img-2.jpeg" }) {
      id
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    img3: file(relativePath: { eq: "homeGallery/img-3.jpeg" }) {
      id
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const Gallery = () => {
  return (
    <StaticQuery
      query={query}
      render={({ img1, img2, img3 }) => (
        <Section>
          <GalleryWrapper>
            <div className="item item-1">
              <Img fluid={img1.childImageSharp.fluid} />
              <p>awesome pizza</p>
            </div>
            <div className="item item-2">
              <Img fluid={img2.childImageSharp.fluid} />
              <p>tasty pork</p>
            </div>
            <div className="item item-3">
              <Img fluid={img3.childImageSharp.fluid} />
              <p>yummy steak</p>
            </div>
          </GalleryWrapper>
        </Section>
      )}
    />
  )
}

export default Gallery
