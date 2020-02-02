import styled from "styled-components"
import { styles } from "../../../utils"

const { textSlanted, letterSpacing, colors } = styles

export const TitleWrapper = styled.div`
  text-align: center;
  h3 {
    ${textSlanted};
    ${letterSpacing({ spacing: "0.3rem" })};
    font-size: 2rem;
    color: ${colors.mainYellow};
  }
  h1 {
    ${letterSpacing({ spacing: "0.3rem" })};
    font-size: 2rem;
    text-transform: uppercase;
  }
  div {
    width: 5rem;
    height: 0.2rem;
    background: ${colors.mainYellow};
    margin: 0.5rem auto;
  }
`
