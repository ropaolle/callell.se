import React from 'react' /* eslint-disable-line */
import styled from 'styled-components'

import Header from './header'
import Footer from './footer'

import './css/normalize.css'
import './css/buttons.css'
import './css/overrides.css'

const Section = styled.section`
  display: flex;
  padding: 0 1.45rem;
  max-width: 60rem;
  margin: 0 auto;
  min-height: 30rem;
  background-color: #fff;

  & > div { z-index: 1; }

  @media (min-width: 62.9rem) {
    padding: 0;
  }
`

const Template = props => {
  const { children, location } = props

  return (
    <div id="page">
      <Header path={location.pathname} />
      <Section>{children()}</Section>
      <Footer path={location.pathname} />
    </div>
  )
}

export default Template
