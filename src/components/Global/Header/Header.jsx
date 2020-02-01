import React from "react"

import { IndexHeader } from "./Header.styles"

import img from "../../../images/bcg/homeBcg.jpeg"

const Header = ({ img, children }) => {
  return <IndexHeader img={img}>{children}</IndexHeader>
}

Header.defaultProps = {
  img,
}

export default Header
