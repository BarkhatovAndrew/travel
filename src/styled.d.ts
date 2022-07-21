// import original module declarations
import 'styled-components'

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      main: string
      secondary?: string
    }
    paddings: {
      p1: string
      p2: string
      p3: string
      p4: string
      p5: string
    }
  }
}
