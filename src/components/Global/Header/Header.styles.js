import styled from "styled-components"

export const IndexHeader = styled.header`
  min-height: calc(100vh - 54.781px);
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${({ img }) => img}) center/cover fixed no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const DefaultHeader = styled(IndexHeader)`
  min-height: 60vh;
`
