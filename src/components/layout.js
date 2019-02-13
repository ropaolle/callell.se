import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import FooterSecond from './footerSecond'
import FooterMain from './footerMain'

import './pure-min.css'
import './overrides.css'

const Layout = ({ children, frontpage }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => {
      // console.log('F', front)
      return (
        <>
          <Header siteTitle={data.site.siteMetadata.title} />
          <div
            style={frontpage ? {} : {
              margin: `0 auto`,
              maxWidth: 960,
              padding: `4rem 1rem 1.5rem`
            }}
          >
            <main>{children}</main>
          </div>
          <FooterSecond />
          <FooterMain />
        </>
      )
    }}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
