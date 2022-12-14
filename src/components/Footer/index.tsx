import { FooterContainer, FooterContent } from './styles'
import Logo from '../../Assets/Logo-Header.png'
import logoGithub from '../../Assets/Logo-GitHub.png'
import logoLinkedIn from '../../Assets/Logo-Linkedin.png'

export function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <img className="logo" src={Logo} alt="Hotel Last Resort" />
        <div>
          <a target="_blank" href="https://github.com/caioduqueta">
            <img className="github" src={logoGithub} alt="Don't touch this Button" />
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/caio-duque/">
            <img className="linkedin" src={logoLinkedIn} alt="Don't touch this Button" />
          </a>
        </div>
      </FooterContent>
    </FooterContainer>
  )
}
