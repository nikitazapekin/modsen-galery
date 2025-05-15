import "styled-components"

declare module "styled-components" {
  export interface DefaultTheme {
    container: number
    sizes: Record<string, string>
    colors: Record<string, string>
    gradients: Record<string, string>
    fonts: {
      roboto: string
      lexend: string
    }
    fontSizes: {
      small: string
      medium: string
      large: string
      xlarge: string
    }
    fontWeights: {
      light: number
      regular: number
      bold: number
    }
    borders: {
      radiusSmall: string
      radiusMedium: string
      radiusLarge: string
      radiusCircle: string
    }
  }
}
