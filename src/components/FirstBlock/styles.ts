import styled from 'styled-components'

export const FirstBlockContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 3.25rem;
  width: 100%;

  h1 {
    font-family: 'PlayfairDisplay', serif;
    font-size: 3.75rem;
    font-weight: bold;
    color: ${(props) => props.theme.colors.Primary};
    padding: 3.25rem 0;

    @media (max-width: 560px) {
      font-size: 2rem;
    }
  }
`
export const BlockContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 1rem;

  @media (max-width: 1080px) {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }

  p {
    font-family: 'NotoSerif', serif;
    font-size: 2.25rem;
    font-weight: regular;
    width: 32.5rem;
    color: ${(props) => props.theme.colors.FirstText};
    @media (max-width: 560px) {
      width: 25rem;
      font-size: 1.5rem;
    }
  }
  img {
    @media (max-width: 560px) {
      max-width: 25rem;
    }
  }
`
