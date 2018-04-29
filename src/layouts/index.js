import React from 'react' /* eslint-disable-line */
import styled from 'styled-components'

import './css/fontawsome'
import Header from './header'
import FooterSecond from './footerSecond'
import FooterMain from './footerMain'

import './css/pure-min.css'
import './css/overrides.css'

export default class Template extends React.Component {
  constructor(props) {
    super(props)
    this.state = { open: false }
  }

  handleClick = () => {
    this.setState({ open: !this.state.open })
  }

  render() {
    const { children, location } = this.props

    const Main =
      location.pathname === '/'
        ? styled.div`
            /* No styling on the front page */
          `
        : styled.div`
            padding: 0 1.45rem;
            max-width: 60rem;
            margin: 0 auto;
            min-height: 30rem;
            margin-top: 4rem;

            @media (min-width: 800px) {
              margin-top: 7rem;
            }
          `
    return (
      /* eslint-disable-next-line */
      <div id="page" className="stuff" onClick={this.handleClick}>
        <Header
          path={location.pathname}
          open={this.state.open}
          handleClick={this.handleClick}
        />
        <Main className="main">{children()}</Main>
        <FooterSecond />
        <FooterMain />
      </div>
    )
  }
}
