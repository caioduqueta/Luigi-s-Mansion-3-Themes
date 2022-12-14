import styled from 'styled-components'

export const SecondBlockContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 3.25rem;
  background-color: ${(props) => props.theme.colors.Block};
  gap: 1.5rem;
  width: 100%;

  @media (max-width: 560px) {
    gap: 0.75rem;
  }

  h2 {
    font-family: 'PlayfairDisplay', serif;
    font-size: 3.75rem;
    font-weight: bold;
    color: ${(props) => props.theme.colors.TextBlock};
    padding: 3.25rem 0;
    text-align: center;

    @media (max-width: 560px) {
      font-size: 2rem;
    }
  }
`
export const BlockContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.Background};

  @media (max-width: 1080px) {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.25rem;
    @media (max-width: 1080px) {
      padding: 2rem;
    }
  }

  strong {
    font-family: 'PlayfairDisplay', serif;
    font-size: 2rem;
    font-weight: bold;
    color: ${(props) => props.theme.colors.TextBlock};
  }

  p {
    font-family: 'NotoSerif', serif;
    font-size: 1.5rem;
    font-weight: regular;
    width: 20rem;
    color: ${(props) => props.theme.colors.TextBlock};
    padding: 0 1rem 0 1rem;

    @media (max-width: 1080px) {
      width: 30rem;
    }
    @media (max-width: 740px) {
      max-width: 25rem;
      padding: 0;
    }
    @media (max-width: 375px) {
      max-width: 20rem;
      padding: 0;
    }
  }

  img {
    @media (max-width: 740px) {
      max-width: 30rem;
    }
    @media (max-width: 375px) {
      max-width: 25rem;
    }
  }
`
