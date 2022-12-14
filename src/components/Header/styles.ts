import styled from 'styled-components'
import ShyBoo from '../../Assets/BooShy-Cursor.png'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 6.5rem;
  background-color: ${(props) => props.theme.colors.Primary};
  z-index: 20;

`

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 67.5rem;
  width: 100%;
  height: 6.5rem;
  padding: 0 1rem;

  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  img.logo {
    height: 4.375rem;
    padding: 0 0.5rem;
    @media (max-width: 375px) {
      height: 3rem;
    }
  }

  img.dont {
    height: 4.375rem;
    padding: 0 0.5rem;
    @media (max-width: 740px) {
      visibility: collapse;
      height: 0;
      padding: 0;
    }
  }

  .SwitchRoot {
    width: 3rem;
    height: 2rem;
    background-color: ${(props) => props.theme.colors.Primary};
    border: 2px solid ${(props) => props.theme.colors.Background};
    border-radius: 9999px;
    box-shadow: 0 2px 10px ${(props) => props.theme.colors.Primary};
    -webkit-tap-highlight-color: ${(props) => props.theme.colors.Background};
    cursor: url(${ShyBoo}), pointer;
  }
  .SwitchRoot[data-state='checked'] {
    ${(props) => props.theme.colors.Primary};
  }

  .SwitchThumb {
    display: block;
    width: 1.2rem;
    height: 1.2rem;
    background-color: ${(props) => props.theme.colors.Background};
    border-radius: 9999px;
    box-shadow: 0 2px 2px ${(props) => props.theme.colors.Primary};
    transition: transform 100ms;
    transform: translateX(0.125rem);
    will-change: transform;
  }
  .SwitchThumb[data-state='checked'] {
    transform: translateX(1.5rem);
  }
`
