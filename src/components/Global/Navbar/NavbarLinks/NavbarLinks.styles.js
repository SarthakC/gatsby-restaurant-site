import { styles } from "../../../../utils"
import styled from "styled-components"

import { Link } from "gatsby"

const {
  transDefault,
  transObject,
  colors: { mainGrey, mainYellow, mainWhite },
} = styles

export const LinkWrapper = styled.ul`
  li {
    list-style-type: none;
  }
  height: ${props => (props.open ? "152px" : "0px")};
  overflow: hidden;
  ${transObject({ time: "1s" })};
  @media (min-width: 768px) {
    height: auto;
    display: flex;
    margin: 0 auto;
  }
`

export const NavbarLink = styled(Link)`
  display: block;
  text-decoration: none;
  padding: 0.5rem 1rem 0.5rem 1rem;
  color: ${mainGrey};
  font-weight: 700;
  text-transform: capitalize;
  cursor: pointer;
  ${transDefault};
  &:hover {
    background: ${mainGrey};
    color: ${mainYellow};
    padding: 0.5rem 1rem 0.5rem 1.3rem;
  }
  @media (min-width: 768px) {
    &:hover {
      background: ${mainWhite};
      padding: 0.5rem 1rem 0.5rem 1rem;
    }
  }
`
