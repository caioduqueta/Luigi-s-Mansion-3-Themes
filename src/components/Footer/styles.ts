import styled from 'styled-components'

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 6.5rem;
  background-color: ${(props) => props.theme.colors.Primary};
  border-bottom: 5px solid ${(props) => props.theme.colors.TextBlock};
  border-top: 5px solid ${(props) => props.theme.colors.TextBlock};
`

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 67.5rem;
  width: 100%;
  height: 6.5rem;
  padding: 0 1rem;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    @media (max-width: 560px) {
      gap: 0.25rem;
    }
  }

  img.logo {
    height: 4.375rem;
    @media (max-width: 375px) {
      height: 3rem;
    }
  }

  img.github {
    height: 3.125rem;
    width: 3.125rem;
  }
  img.linkedin {
    height: 3.125rem;
    width: 3.125rem;
  }
`