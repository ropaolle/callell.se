import React from 'react' /* eslint-disable-line */
import Link from 'gatsby-link'
import styled from 'styled-components'
import { FaBeer } from 'react-icons/fa';

const StyledMenu = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0.5rem 0;
  padding: 0;

  li {
    margin: 0;
    padding: 0 0.5rem;

    a {
      display: block;

      &:hover {
        color: #558fb8;
      }
    }
  }
`

const Menu = ({ className, menu }) => {
  const menuHtml = menu.map(item => (
    <li>
      <Link to={item.url}>
        <FaBeer /> {item.text}
        {/* <FontAwesomeIcon icon={item.icon} />  */}
      </Link>
    </li>
  ))

  return <StyledMenu className={className}>{menuHtml}</StyledMenu>
}


export default Menu
