import React from 'react' /* eslint-disable-line */
import Link from 'gatsby-link'
import styled from 'styled-components'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

const Menu = props => {
  let StyledMenu = styled.div`
    z-index: 2;

    ul {
      display: flex;
      list-style-type: none;
      margin: 0.5rem 0;
      padding: 0;
    }

    li {
      margin: 0;
      padding: 0 0.5rem;

      a {
        color: #fff;
        text-decoration: none;
        &:hover {
          color: #558fb8
        }
      }
    }
  `

  if (props.header) {
    StyledMenu = StyledMenu.extend`
      font-size: 1.45rem;

      @media (max-width: 600px) {
        display: none;
      }
    `
  }

  return (
    <StyledMenu className="menu">
      <ul>
        <li>
          <Link to="/">
            <FontAwesomeIcon icon="home" /> Hem
          </Link>
        </li>
        <li>
          <Link to="/kontakt">
            <FontAwesomeIcon icon="envelope" /> Kontakt
          </Link>
        </li>
        <li>
          <Link to="/blog">
            <FontAwesomeIcon icon="rss" /> Blogg
          </Link>
        </li>
      </ul>
    </StyledMenu>
  )
}

export default Menu
