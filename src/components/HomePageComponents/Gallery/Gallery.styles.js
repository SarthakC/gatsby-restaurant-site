import styled from "styled-components"
import { styles } from "../../../utils"

export const GalleryWrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-row-gap: 1rem;
  div {
    position: relative;
  }
  p {
    position: absolute;
    top: 0;
    left: 0;
    background: ${styles.colors.mainYellow};
    padding: 0.1rem 0.3rem;
    text-transform: capitalize;
  }

  @media (min-width: 576px) {
    grid-template-columns: (2, 1fr);
    grid-column-gap: 1rem;
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 992px) {
    .gatsby-image-wrapper {
      height: 100%;
    }
    grid-template-areas:
      "one one two two"
      "one one three three";
    div:first-child {
      grid-area: one;
    }
    div:nth-child(2) {
      grid-area: two;
    }
    div:nth-child(3) {
      grid-area: three;
    }
  }
`

// export const
