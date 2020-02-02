import styled from "styled-components"
import { styles } from "../../../../utils"
import { FaAlignRight } from "react-icons/fa"

export const HeaderWrapper = styled.div`
  padding: 0.4rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const FaAlignRightWrapper = styled(FaAlignRight)`
  font-size: 1.75rem;
  color: ${styles.colors.mainYellow};
  cursor: pointer;
  @media (min-width: 768px) {
    display: none;
  }
`
