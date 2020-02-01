import styled from "styled-components"
import { styles } from "../../../utils"

const { colors, textSlanted, letterSpacing } = styles

export const BannerWrapper = styled.div`
  margin-bottom: 3rem;
  text-align: center;
  h1,
  h3 {
    color: ${colors.mainWhite};
  }
  h1 {
    font-size: 3rem;
    text-transform: uppercase;
    ${letterSpacing({ spacing: "0.75rem" })};
  }
  h3 {
    ${textSlanted};
    ${letterSpacing({ spacing: "0.5rem" })};
    font-size: 1.5rem;
    text-transform: capitalize;
  }
`
