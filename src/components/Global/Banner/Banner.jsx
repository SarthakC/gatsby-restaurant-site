import React from "react"
import { BannerWrapper } from "./Banner.styles"

const Banner = ({ title, subtitle, children }) => {
  return (
    <BannerWrapper>
      <h1>{title}</h1>
      <h3>{subtitle}</h3>
      {children}
    </BannerWrapper>
  )
}

Banner.defaultProps = {
  title: "Default title",
}

export default Banner
