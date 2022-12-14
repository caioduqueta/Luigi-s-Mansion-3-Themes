import { BannerContainer} from './styles'
import { PageContext } from '../../context/context'
import { useContext } from 'react'
import LBanner from '../../Assets/Light/Light-Banner.png'
import LLogoBanner from '../../Assets/Light/Logo-Light-Banner.png'
import DBanner from '../../Assets/Dark/Dark-Banner.png'
import DLogoBanner from '../../Assets/Dark/Logo-Dark-Banner.png'

export function Banner() {
    const { PageTheme } = useContext(PageContext)
  return (
    <BannerContainer>
      <img
        className="banner"
        src={PageTheme === 'Light' ? LBanner : DBanner}
        alt=""
      />
      <img
        className="bannerLogo"
        src={PageTheme === 'Light' ? LLogoBanner: DLogoBanner}
        alt=""
      />
    </BannerContainer>
  )
}
