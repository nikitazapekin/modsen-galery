import { css } from "styled-components"

export const breakpoints = {
  smMobiles: 320,
  mobiles: 480,
  smallTablets: 560,
  mediumTablets: 640,
  tablets: 768,
  ipad: 1024,
  macBook: 1280,
  pc: 1440,
} as const
type Breakpoint = keyof typeof breakpoints
export const media = Object.fromEntries(
  Object.entries(breakpoints).map(([name, size]) => [
    name,
    (styles: TemplateStringsArray, ...interpolations: any[]) => css`
      @media (max-width: ${size}px) {
        ${css(styles, ...interpolations)}
      }
    `,
  ]),
) as Record<Breakpoint, typeof css>
