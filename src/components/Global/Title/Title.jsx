import React from "react"
import { TitleWrapper } from "./Title.styles"

const Title = ({ title, message }) => {
  return (
    <TitleWrapper>
      <h3>{message}</h3>
      <h1>{title}</h1>
      <div />
    </TitleWrapper>
  )
}

Title.defaultProps = {
  message: "our message",
  title: "our title",
}

export default Title
