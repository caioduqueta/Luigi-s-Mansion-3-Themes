import { createGlobalStyle } from 'styled-components'
import Boo from '../Assets/Boo-cursor.png';

export const GlobalStyle = createGlobalStyle`
 *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 }

html{
  @media (max-width:1080px){
    font-size: 93.75%; //15px
    
  }

  @media (max-width:720px){
    font-size: 87.5%; //14px
  }

   @media (max-width:560px){
    font-size: 75%; //12px
  }
}


body{
-webkit-font-smoothing: antialiased;
background-color: ${(props) => props.theme.colors.Background};
cursor: url(${Boo}), default;

}
`