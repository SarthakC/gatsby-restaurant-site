import styled from "styled-components"

import { styles } from "../../../../utils"

const {
  border,
  colors: { mainBlack, mainWhite, mainYellow },
  transition,
} = styles

export const FooterWrapper = styled.footer`
  padding: 2rem 0;
  background-color: ${mainBlack};
  p {
    color: ${mainWhite};
    text-transform: capitalize;
    text-align: center;
    margin: 1rem 0;
  }
`

export const FooterTitle = styled.div`
  text-align: center;
  width: 10rem;
  color: ${mainYellow};
  text-transform: uppercase;
  padding: 0.3rem 1rem;
  margin: 0 auto 2rem auto;
  font-size: 1.5rem;
  ${border({ color: `${mainYellow}` })}
`

export const IconWrapper = styled.div`
  width: 10rem;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  a {
    color: ${mainWhite};
    font-size: 1.3rems;
    ${transition};
    &:hover {
      color: ${mainYellow};
    }
  }
`
