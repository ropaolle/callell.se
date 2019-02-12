import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import { FaBars, FaHome, FaEnvelope, FaRss } from 'react-icons/fa'
import Menu from './menu'

import header from '../images/header-thin.svg'
import logo from '../images/logo-text.svg'

const menu = [
  { url: '/', text: 'Hem', icon: <FaHome /> },
  { url: '/kontakt', text: 'Kontakt', icon: <FaEnvelope /> },
  { url: '/blog', text: 'Blogg2', icon: <FaRss />},
]

const HeaderImage = styled.div`
  overflow: hidden;
  position: absolute;
  width: 100%;
  display: flex;
  top: 0;
  justify-content: center;
  img {
    flex: 0 0 auto;
    height: 11em;
    width: auto;
  }
`

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
    border: 1px solid #4eb5f4;
    width: 100%;
  }
`

const Logo = styled.div`
  z-index: 2;
  width: 200px;
  height: auto;
`

const StyledMenu = styled(Menu)`
  z-index: 1;

  svg {
    vertical-align: text-top;
  }

  a,
  a:visited {
    color: #fff;
    font-size: 1.2em;
  }

  @media (max-width: 600px) {
    display: ${props => (props.open ? 'block' : 'none')};
    position: absolute;
    right: 1.45rem;
    background-color: #558fb8;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 3;
    flex-direction: column;
    margin-top: 6.5rem;
    padding: 0.5rem 0;

    li {
      padding: 0;
      a {
        padding: 0.5rem 1.45rem;       
      }
      a:hover {
        background-color: #3fa9f5;
        color: #fff;
      }
    }
  }
`

const DropdownMenuBtn = styled.div`
  z-index: 2;
  font-size: 2.5rem;
  color: #f7f7f7;

  @media (min-width: 600px) {
    display: none;
  }
`

const Header = props => (
  <header>
    <Wrapper className="wrapper">
      <Logo className="logo">
        <Link to="/">
          <img src={logo} alt="Callell.se" />
        </Link>
      </Logo>

      <StyledMenu header menu={menu} open={props.open} />

      <DropdownMenuBtn
        className="dropdown-menu-btn"
        onClick={props.handleClick}
      >
        <FaBars />
      </DropdownMenuBtn>
    </Wrapper>

    <BottomBorder className="bottom-border">
      <hr />
    </BottomBorder>

    <HeaderImage className="header-image">
      <img src={header} alt="Callell.se" />
    </HeaderImage>
  </header>
)

export default Header
