import styled from "styled-components"

import { styles } from "../../../utils"

export const QuickInfoWrapper = styled.div`
  width: 90%;
  margin: 2rem auto;
  p {
    line-height: 2rem;
    color: ${styles.colors.mainGrey};
    word-spacing: 0.2rem;
  }
  @media (min-width: 768px) {
    width: 70%;
  }
  @media (min-width: 992px) {
    width: 60%;
  }
`
