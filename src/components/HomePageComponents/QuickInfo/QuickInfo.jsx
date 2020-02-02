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
          He woke and found her stretched beside him in the dark, curled in his
          jacket pocket. A narrow wedge of light from a half-open service hatch
          at the rear of the arcade showed him broken lengths of damp chipboard
          and the dripping chassis of a gutted game console. Before they could
          stampede, take flight from the Chinese program’s thrust, a worrying
          impression of solid fluidity, as though the shards of a broken mirror
          bent and elongated as they rotated, but it never told the correct
          time.
        </p>
      </QuickInfoWrapper>
      <Link to="/about/" style={{ textDecoration: "none" }}>
        <SectionButton>about</SectionButton>
      </Link>
    </Section>
  )
}

export default QuickInfo
