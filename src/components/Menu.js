import React from 'react' /* eslint-disable-line */
import Link from 'gatsby-link'
import styled from "styled-components";

const Menu = (props) => {
  let StyledMenu = styled.div`
    z-index: 1;

    ul {
      display: flex;
      list-style-type: none;
      margin: 0.5rem 0;
      padding: 0;
    }

    li {
      margin: 0;
      padding: 0 0.5rem;
    }

    a {
      color: #fff;
      text-decoration: none;
      &:hover { color: #ddd; }
    }
  `

  if (props.header) {
    StyledMenu = StyledMenu.extend`
      font-size: 1.45rem;
      padding-bottom: 15px;

      @media (max-width: 600px) {
        display: none;
      }
    `;
  }

  return (
    <StyledMenu>
      <ul>
        <li><Link to="/">Hem</Link></li>
        <li><Link to="/kontakt">Kontakt</Link></li>
        <li><Link to="/blog">Blogg</Link></li>
      </ul>
    </StyledMenu>
  )}

export default Menu
