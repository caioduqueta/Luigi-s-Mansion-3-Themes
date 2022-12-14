import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string,
    colors: {
      Primary: string
      Block: string
      TextBlock: string
      FirstText: string
      Background: string
    }
  }
}



//tsconfig.json (arrumar lá)
