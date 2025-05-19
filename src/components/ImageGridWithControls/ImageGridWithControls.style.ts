import styled from "styled-components"
export const ImageGridWrapper = styled.div`
  width: 100%;
  height: auto;
  padding: 25px 20px 40px 20px;
`
export const Container = styled.div`
  max-width: 908px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`
export const HeaderItemIcon = styled.img<{ $isActive?: boolean }>`
  box-shadow: ${({ $isActive }) => ($isActive ? "0 4px 4px 0 rgba(0, 0, 0, 0.25)" : "none")};
`
