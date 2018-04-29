import React from 'react' /* eslint-disable-line */
import styled from 'styled-components'

import Header from './header'
import Footer from './footer'

import './css/pure-min.css'
import './css/overrides.css'

const Template = props => {
  const { children, location } = props

  const Main = (location.pathname !== '/') ?
    styled.div`
      padding: 0 1.45rem;
      max-width: 60rem;
      margin: 0 auto;
      min-height: 30rem;
      margin-top: 4rem;
      @media (min-width: 800px) {
        margin-top: 7rem;
      }
    `
    :
    styled.div`
      /* background-color: white; */
    `

  return (
    <div id="page" className="stuff">
      <Header path={location.pathname} />
      <Main className="main">{children()}</Main>
      <Footer path={location.pathname} />
    </div>
  )
}

export default Template
