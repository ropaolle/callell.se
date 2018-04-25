import React from 'react' /* eslint-disable-line */
import styled from "styled-components";
import Link from 'gatsby-link'

import logo from './logo.png'
import svg from './svg.svg'

const FooterBottom = styled.footer`
  color: #eee;
  background-color: #454545;

  padding: 1.45rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;

  img {
    max-height: 2rem;
    margin-bottom: 0;
  }

  ul {
    display: flex;
    list-style-type: none;
    margin: 0.5rem 0;
  }

  li {
    margin: 0;
    padding: 0 0.5rem;
  }

  a {
    color: #fff;
    text-decoration: none;
  }

  a:hover {
    color: #ddd;
  }
`;

const FooterSecond = FooterBottom.extend`
  color: #333;
  background-color: #ccc;
  flex-direction: row;
  background: url(./footer.svg) no-repeat center center;
  background-size: cover;
  min-height: 20rem;
`;

const Element = styled.div`
  color: #777;
`;

const Copyright= styled.div`
  color: #ccc;
  font-size: 0.8em;
`;

const Footer = () => (
  <div>
    <FooterSecond>
      <Element>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Element>
    </FooterSecond>
    <FooterBottom>
      <div><img src={logo} alt="Callell.se" /></div>
      <div>
        <ul>
          <li><Link to="hem">Hem</Link></li>
          <li><Link to="kontakt">Kontakt</Link></li>
          <li><Link to="blogg">Blogg</Link></li>
        </ul>
      </div>
      <Copyright>Callell.se <span role="img" aria-label="copyrigth">©</span> 2018</Copyright>

    </FooterBottom>
  </div>
  )

export default Footer
