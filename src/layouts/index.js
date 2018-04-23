import React from 'react' /* eslint-disable-line */
// import Link from 'gatsby-link'
import Header from './header';

const Template = props => {
  const { children } = props

  return (
    <div>
      <Header location="location" />
      {children()}
    </div>
  )
}

export default Template
