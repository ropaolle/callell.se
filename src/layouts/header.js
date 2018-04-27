import React from 'react' /* eslint-disable-line */
import styled from 'styled-components'
import Link from 'gatsby-link'
import Menu from './menu'

import logo from './img/logo-text.svg'

const Wrapper = styled.div`
  padding: 1.45rem;
  max-width: 60rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const BottomBorder = styled.div`
  padding: 0 1.45rem;
  display: flex;
  margin: -1.9rem auto 1.9rem auto;
  max-width: 60rem;
  height: 0;
  hr {
    z-index: 2;
    border: 1px solid #4EB5F4;
    width: 100%;
  }
`

const Logo = styled.div`
  z-index: 2;
  width: 200px;
  height: auto;
`;

const HamburgerMenu = styled.div`
  z-index: 2;

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

const Header = () => (
  <header>
    <Wrapper className="wrapper">
      <Logo className="logo">
        <Link to="/">
          <img src={logo} alt="Callell.se" />
        </Link>
      </Logo>
      <Menu header />
      <HamburgerMenu className="hamburger-menu">
        <span>
          <div />
          <div />
          <div />
        </span>
      </HamburgerMenu>
    </Wrapper>
    <BottomBorder className="bottom-border">
      <hr />
    </BottomBorder>
  </header>
  )

export default Header
