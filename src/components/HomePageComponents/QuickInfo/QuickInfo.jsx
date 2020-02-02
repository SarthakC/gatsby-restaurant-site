import React from "react"
import { Link } from "gatsby"

import { Section, Title, SectionButton } from "../../Global"
import { QuickInfoWrapper } from "./QuickInfo.styles"

const QuickInfo = () => {
  return (
    <Section>
      <Title message="let us tell you" title="our mission" />
      <QuickInfoWrapper>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi maxime
          tempore, consectetur illum cupiditate odio nostrum ab quas dolorum
          earum qui quis voluptate, totam eius ex. Voluptatum in vero delectus
          quae voluptate, cum neque aliquid minus pariatur ratione ipsum saepe
          consectetur autem? Fuga accusantium, eius quos voluptatibus sed
          corrupti neque?
        </p>
      </QuickInfoWrapper>
      <Link to="/about/" style={{ textDecoration: "none" }}>
        <SectionButton>about</SectionButton>
      </Link>
    </Section>
  )
}

export default QuickInfo
