import * as Switch from '@radix-ui/react-switch'

import { HeaderContainer, HeaderContent } from './styles'
import Logo from '../../Assets/Logo-Header.png'
import DontTouch from '../../Assets/Dont-Touch.png'
import { PageContext } from '../../context/context'
import { useContext } from 'react'

export function Header() {
  
  const {ChangeTheme} = useContext(PageContext)
   
  function handleChangeTheme(checked: boolean) {
    let theme = ''
    if (checked === false) {
   theme = 'Light'
    } else {
    theme = 'Dark'
   }
    ChangeTheme(theme)

  }
   
  return (
    <HeaderContainer>
      <HeaderContent>
        <img className="logo" src={Logo} alt="Hotel Last Resort" />
        <div className="button">
          <img className="dont" src={DontTouch} alt="Don't touch this Button" />
          <Switch.Root
            className="SwitchRoot"
            onCheckedChange={handleChangeTheme}
          >
            <Switch.Thumb className="SwitchThumb" />
          </Switch.Root>
        </div>
      </HeaderContent>
    </HeaderContainer>
  )
}
