import React from 'react' /* eslint-disable-line */
import Link from 'gatsby-link'

const Header = props => {
  const { location } = props
  let header
  if (location.pathname === '/') {
    header = (
      <h1>
        <Link to="/">Callell.se</Link>
      </h1>
    )
  } else {
    header = (
      <h3>
        <Link to="/">Callell.se</Link>
      </h3>
    )
  }

  return (<header>{header}</header>)
}

export default Header