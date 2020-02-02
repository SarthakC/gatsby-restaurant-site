import styled from "styled-components"

import { styles } from "../../../utils"

const {
  colors: { mainWhite, mainBlack, mainYellow },
  border,
  transition,
} = styles

const BannerButton = styled.button`
  display: block;
  color: ${mainWhite};
  background: transparent;
  padding: 0.5rem 1rem;
  text-transform: uppercase;
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 0.5rem;
  ${border({ color: `${mainWhite}` })};
  margin-bottom: 1rem !important;
  ${transition({})};
  &:hover {
    background: ${mainWhite};
    color: ${mainBlack};
    cursor: pointer;
  }
`

const SectionButton = styled(BannerButton)`
  color: ${mainBlack};
  margin: 2rem auto;
  ${border({ color: `${mainBlack}` })};
  &:hover {
    background: ${mainBlack};
    color: ${mainYellow};
    cursor: pointer;
  }
`

export { BannerButton, SectionButton }
