import { BlockContent, SecondBlockContainer } from './styles'
import { useContext } from 'react'
import { PageContext } from '../../context/context'
import LSecondImage from '../../Assets/Light/Light-Second-Image.png'
import DSecondImage from '../../Assets/Dark/Dark-Second-Image.png'
import LThirdImage from '../../Assets/Light/Light-Third-Image.png'
import DThirdImage from '../../Assets/Dark/Dark-Third-Image.png'

export function SecondBlock() {

  const { PageTheme } = useContext(PageContext)
  
  return (
    <SecondBlockContainer>
      <h2>
        ENJOY EVERY SECOND<br></br>UNTIL THE END
      </h2>
      <BlockContent>
        <div>
          <strong>LODGING</strong>
          <p>
            We offer luxurious rooms decorated with different concepts on each floor. Relax to your
            heart's content in the spacious room. There are also special performances at night
          </p>
        </div>
        <img src={PageTheme === 'Light' ? LSecondImage : DSecondImage} alt="" />
      </BlockContent>
      <BlockContent>
        <img src={PageTheme === 'Light' ? LThirdImage : DThirdImage} alt="" />
        <div>
          <strong>HOSPITALITY</strong>
          <p>
            We offer luxurious rooms decorated with different concepts on each floor. Relax to your
            heart's content in the spacious room. There are also special performances at night
          </p>
        </div>
      </BlockContent>
    </SecondBlockContainer>
  )
}
