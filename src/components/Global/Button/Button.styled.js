import styled from "styled-components"

import { styles } from "../../../utils"

const {
  colors: { mainWhite, mainBlack },
  border,
  transition,
} = styles

export const BannerButton = styled.button`
  display: block;
  color: ${mainWhite};
  background: transparent;
  padding: 0.5 1rem;
  text-transform: uppercase;
  font-size: 1.5rem;
  letter-spacing: 0.5rem;
  ${border({ color: `${mainWhite}` })};
  margin-bottom: 1rem;
  ${transition({})};
  &:hover {
    background: ${mainWhite};
    color: ${mainBlack};
    cursor: pointer;
  }
`
