import React from 'react' /* eslint-disable-line */
import styled from 'styled-components'
import Menu from './menu'

import logo from './img/logo-text.svg'
import footer from './img/footer.svg'

const menu = [
  { url: '/', text: 'Hem', icon: 'home' },
  { url: '/kontakt', text: 'Kontakt', icon: 'envelope' },
  { url: '/blog', text: 'Blogg', icon: 'rss' },
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

const Footer = () => (
  <footer>
    <FooterBottom className="bottom-footer">
      <Logo>
        <img src={logo} alt="Callell.se" />
      </Logo>
      <StyledMenu menu={menu} />
      <Copyright>
        Callell.se{' '}
        <span role="img" aria-label="copyrigth">
          ©
        </span>{' '}
        2018
      </Copyright>
    </FooterBottom>
  </footer>
)

export default Footer
