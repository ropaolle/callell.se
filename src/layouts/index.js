import React from 'react' /* eslint-disable-line */
import Link from 'gatsby-link'

const Template = props => {
  const { location, children } = props
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
  return (
    <div>
      {header}
      {children()}
    </div>
  )
}

// Template.propTypes = {
//   children: React.PropTypes.func,
//   location: React.PropTypes.object,
//   route: React.PropTypes.object,
// }

export default Template
