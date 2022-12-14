import { BlockContent, FirstBlockContainer } from './styles'
import { useContext } from 'react'
import { PageContext } from '../../context/context'
import LFirstImage from '../../Assets/Light/Light-First-Image.png'
import DFirstImage from '../../Assets/Dark/Dark-First-Image.png'

export function FirstBlock() {

  const { PageTheme } = useContext(PageContext)
  
  return (
    <FirstBlockContainer>
      <h1>
        WELCOME TO YOUR<br></br>FINAL DESTINATION
      </h1>
      <BlockContent>
        <p>
          Our hotel offers more than just comfortable guest rooms. It is fully equipped with
          restaurants, discos, museums and concert halls. All the staff will serve you
          wholeheartedly.
        </p>
        <img src={PageTheme === 'Light' ? LFirstImage : DFirstImage} alt="" />
      </BlockContent>
    </FirstBlockContainer>
  )
}
