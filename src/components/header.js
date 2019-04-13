import React from 'react'
import styled from 'styled-components'
import HeroBG from '../images/hero-image.jpg'
import Subscribe from './mailChimp'
import { device } from './styles/MediaQueries'

const HeaderStyle = styled.header`
  height: 100vh;
  padding: 2rem;
  background-image: linear-gradient(
      105deg,
      rgba(38, 38, 38, 0.8) 0%,
      rgba(61, 61, 61, 0.8) 70%,
      transparent 70%
    ),
    url(${HeroBG});
  background-size: cover;
  background-position: center 0px;
  display: flex;
  align-items: center;

  @media ${device.tabletS} {
    background-image: linear-gradient(
        130deg,
        rgba(38, 38, 38, 0.8) 0%,
        rgba(61, 61, 61, 0.8) 70%,
        transparent 70%
      ),
      url(${HeroBG});
  }
`

const HeaderHeading = styled.h1`
  text-align: center;
  font-size: 3rem;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 0.5rem;
  color: ${props => props.theme.lightestGrey};
  text-shadow: ${props => props.theme.ts};

  span {
    display: block;
    color: ${props => props.theme.secondaryLight};
  }
`

const Header = () => (
  <HeaderStyle>
    <div>
      <HeaderHeading>
        Freelancing, business, and self development tips
        <span>sent straight to your inbox</span>
      </HeaderHeading>
      <Subscribe />
    </div>
  </HeaderStyle>
)

export default Header
