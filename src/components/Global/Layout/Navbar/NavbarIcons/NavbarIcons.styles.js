import styled from "styled-components"

import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"

import { styles } from "../../../../../utils"

const { colors, transFunction } = styles

export const IconWrapper = styled.div`
  display: none;
  a {
    font-size: 1.3rem;
  }
  svg {
    &:hover {
      color: ${colors.mainYellow};
      ${transFunction()}
    }
  }
  @media (min-width: 768px) {
    width: 10rem;
    display: flex;
    justify-content: space-around;
  }
`

export const FacebookIcon = styled(FaFacebook)`
  color: #3b579d;
`
export const TwitterIcon = styled(FaTwitter)`
  color: #3ab7f0;
`
export const InstagramIcon = styled(FaInstagram)`
  color: #da5f53;
`
