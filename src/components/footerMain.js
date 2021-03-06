import React from 'react'
import styled from 'styled-components'
import { FaHome, FaEnvelope, FaMedkit, FaRss } from 'react-icons/fa'
import Menu from './menu'
import logo from '../images/logo-text.svg'

const menu = [
  { url: '/', text: 'Hem', icon: <FaHome /> },
  { url: '/kontakt', text: 'Kontakt', icon: <FaEnvelope /> },
  { url: '/support', text: 'Support', icon: <FaMedkit /> },
  // { url: '/blog', text: 'Blogg', icon: <FaRss /> }
]

const FooterBottom = styled.div`
  background-color: #454545;
  padding: 1.45rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Logo = styled.div`
  width: 100px;
  height: auto;
`

const StyledMenu = styled(Menu)`
  a,
  a:visited {
    color: #fff;
    font-size: 0.9em;
  }
`

const Copyright = styled.div`
  color: #ccc;
  font-size: 0.8em;
`

const Footer = ({ siteTitle }) => (
  <footer>
    <FooterBottom className="bottom-footer">
      <Logo>
        <img src={logo} alt="logo" />
      </Logo>
      <StyledMenu menu={menu} />
      <Copyright>
        {siteTitle}{' '}
        <span role="img" aria-label="copyrigth">
          ©
        </span>{' '}
        {new Date().getFullYear()}
      </Copyright>
    </FooterBottom>
  </footer>
)

export default Footer
