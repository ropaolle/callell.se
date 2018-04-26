import React from 'react' /* eslint-disable-line */
import Link from 'gatsby-link'
import styled from 'styled-components'

import logo from '../layouts/logo.svg'
import header from './header.svg'

const Container = styled.header`
  font-size: ${props => props.path ? '2rem' : '1rem'};
  padding: 1.45rem;
  max-width: 60rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Menu = styled.div`
  flex: 1;
  z-index: 1;

  ul {
    display: flex;
    list-style-type: none;
    margin: 0.5rem 0;
    justify-content: flex-end;
  }

  li {
    margin: 0 1rem;
    padding: 0 0.5rem 0.7rem 0;
  }

  a {
    color: #fff;
    text-decoration: none;
    font-size: 1.45rem;
  }

  a:hover {
    color: #ddd;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

const Logo = styled.div`
  z-index: 1;
  width: 200px;
  height: auto;
`;

const HamburgerMenu = styled.div`
  z-index: 1;

  div {
    width: 35px;
    height: 6px;
    background-color: #f7f7f7;
    margin: 6px 0;
    border-radius: 3px;
  }

  &:hover div{
    background-color: #ddd;
  }

  @media (min-width: 600px) {
    display: none;
  }
`;

const HeaderImage = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  overflow: hidden;

  @media (max-width: 600px) {
    img {
      height: 175px;
      width: auto;
    }
  }
`;

const Header = props => (
  <Container path={props.path === '/'}>
    <Logo>
      <img src={logo} alt="Callell.se" />
    </Logo>
    <Menu>
      <ul>
        <li><Link to="hem">Hem</Link></li>
        <li><Link to="kontakt">Kontakt</Link></li>
        <li><Link to="blogg">Blogg</Link></li>
      </ul>
    </Menu>
    <HamburgerMenu>
      <span>
        <div />
        <div />
        <div />
      </span>
    </HamburgerMenu>
    <HeaderImage>
      <img src={header} alt="Callell.se" />
    </HeaderImage>
  </Container>
  )

export default Header
