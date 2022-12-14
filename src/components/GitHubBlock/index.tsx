import { GitHubBlockContainer, NextButton } from './styles'
import { useContext } from 'react'
import { PageContext } from '../../context/context'
import GithubLogo from '../../Assets/Logo-Github.png'
import Luigi from '../../Assets/Light/Luigi.png'
import Goob from '../../Assets/Dark/Goob.png'

export function GitHubBlock() {

  const { PageTheme } = useContext(PageContext)
  
  return (
    <GitHubBlockContainer>
      <a target="_blank" href="https://github.com/caioduqueta">
        <img className="github" src={GithubLogo} alt="Github" />
        <span>My GitHub</span>
      </a>
      <NextButton>
        <img src={PageTheme === 'Light' ? Luigi : Goob} alt="Github" />
      </NextButton>
    </GitHubBlockContainer>
  )
}
