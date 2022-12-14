import styled from 'styled-components'

export const GitHubBlockContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 4rem;
  padding-bottom: 6rem;
  background-color: ${(props) => props.theme.colors.Background};
  width: 100%;
  overflow: hidden;
  position: relative;

  a {
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${(props) => props.theme.colors.Primary};
    border: none;
    border-radius: 16px;

    gap: 1.25rem;
    padding: 1.5rem 3rem;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.2;

    @media (max-width: 600px) {
      padding: 1rem 2rem;
    }

    :hover {
      filter: brightness(1.1);
    }
  }

  img.github {
    width: 6.25rem;
    height: 6.25rem;

    @media (max-width: 600px) {
      width: 3.125rem;
      height: 3.125rem;
    }
  }

  span {
    font-family: 'PlayfairDisplay', serif;
    font-size: 3.75rem;
    font-weight: 900;
    color: white;
    @media (max-width: 600px) {
      font-size: 2rem;
    }
  }
`
export const NextButton = styled.div`
  position: absolute;
  margin-left: 45rem;
  margin-top: 5rem;
  @media (max-width: 1080px) {
    visibility:hidden;
  }
`
