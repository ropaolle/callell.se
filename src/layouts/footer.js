import React from 'react' /* eslint-disable-line */
import styled from "styled-components";
import Menu from '../components/Menu'

import logo from './logo-text.svg'
import footer from './footer.svg'

const FooterBottom = styled.footer`
  color: #eee;
  background-color: #454545;
  padding: 1.45rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`;

const FooterSecond = styled.footer`
  position: relative;
  width: 100%;
  line-height: 0;
  img {
    margin: 0;
  }
`;

const Element = styled.div`
  position: absolute;
  top: 33%;
  left: 1.45rem;
  max-width: 50%;
  margin: 0;
  line-height: 1.45em;
  font-size: 1.45rem;
  color: #777;

  @media (max-width: 60rem) {
    font-size: 1.2rem;
  }

  @media (max-width: 30rem) {
    font-size: 1.0rem;
  }
`;

const Logo = styled.div`
  width: 100px;
  height: auto;
`;

const Copyright= styled.div`
  color: #ccc;
  font-size: 0.8em;
`;

const Footer = () => (
  <div>
    <FooterSecond>
      <img src={footer} alt="Callell.se" />
      <Element>First we build the tools, then they build us...</Element>
    </FooterSecond>
    <FooterBottom>
      <Logo><img src={logo} alt="Callell.se" /></Logo>
      <Menu position="footer" />
      <Copyright>Callell.se <span role="img" aria-label="copyrigth">©</span> 2018</Copyright>
    </FooterBottom>
  </div>
  )

export default Footer
