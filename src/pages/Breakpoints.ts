import { css } from "styled-components"
export const smMobiles = (...args: [TemplateStringsArray]) => css`
  @media (max-width: 320px) {
    ${css(...args)}
  }
`

export const mobiles = (...args: [TemplateStringsArray]) => css`
  @media (max-width: 480px) {
    ${css(...args)}
  }
`

export const tablets = (...args: [TemplateStringsArray]) => css`
  @media (max-width: 768px) {
    ${css(...args)}
  }
`

export const smallTablets = (...args: [TemplateStringsArray]) => css`
  @media (max-width: 560px) {
    ${css(...args)}
  }
`

export const mediumTablets = (...args: [TemplateStringsArray]) => css`
  @media (max-width: 640px) {
    ${css(...args)}
  }
`

export const iphone = (...args: [TemplateStringsArray]) => css`
  @media (max-width: 402px) {
    ${css(...args)}
  }
`

export const ipad = (...args: [TemplateStringsArray]) => css`
  @media (max-width: 1024px) {
    ${css(...args)}
  }
`

export const macBook = (...args: [TemplateStringsArray]) => css`
  @media (max-width: 1280px) {
    ${css(...args)}
  }
`

export const pc = (...args: [TemplateStringsArray]) => css`
  @media (max-width: 1440px) {
    ${css(...args)}
  }
`
