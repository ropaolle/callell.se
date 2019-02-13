import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import FooterSecond from './footerSecond'
import FooterMain from './footerMain'

import './pure-min.css'
import './overrides.css'

export default class Layout extends React.Component {
  constructor (props) {
    super(props)
    this.state = { open: false }
  }

  handleClick = () => {
    this.setState({ open: !this.state.open })
  }

  render () {
    const { children, frontpage } = this.props

    return (
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
          return (
            <>
              <Header open={this.state.open} handleClick={this.handleClick} />
              <div
                style={
                  frontpage
                    ? {}
                    : {
                      margin: `0 auto`,
                      maxWidth: 960,
                      minHeight: 600,
                      padding: `4rem 1rem 1.5rem`
                    }
                }
              >
                <main>{children}</main>
              </div>
              <FooterSecond />
              <FooterMain siteTitle={data.site.siteMetadata.title} />
            </>
          )
        }}
      />
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}
