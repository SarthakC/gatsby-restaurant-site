import styled from "styled-components"
import Img from "gatsby-image"

import { styles } from "../../../../utils"

export const ProductWrapper = styled.div`
  @media (min-width: 576px) {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-column-gap: 1rem;
  }
  div > div {
    display: flex;
    justify-content: space-between;
    font-size: 1.4rem;
    text-transform: uppercase;
  }
  h3 {
    color: ${styles.colors.mainYellow};
    margin-top: 0.5rem;
  }
  p {
    margin-top: 0.5rem;
    word-spacing: 0.2rem;
    text-transform: lowercase;
  }
`

export const ImgStyled = styled(Img)`
  border-radius: 0.5rem;
`
