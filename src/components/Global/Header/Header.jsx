import React from "react"

import { IndexHeader, DefaultHeader } from "./Header.styles"

import img from "../../../images/bcg/homeBcg.jpeg"

const HomeHeader = ({ img, children }) => {
  return <IndexHeader img={img}>{children}</IndexHeader>
}

const PageHeader = ({ img, children }) => {
  return <DefaultHeader img={img}>{children}</DefaultHeader>
}

HomeHeader.defaultProps = {
  img,
}

export { HomeHeader, PageHeader }
