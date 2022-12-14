import styled from 'styled-components'

export const BannerContainer = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  width: 100%;

  img.banner {
    width: 100%;
    min-width: 20rem;
    border-bottom: 6px solid ${(props) => props.theme.colors.Primary};
  }

  img.bannerLogo {
    position: absolute;
    height: 14.375rem;
    width: 25rem;

    @media (max-width: 1440) {
      height: 7.2rem;
      width: 12.5rem;
    }
  }
`
