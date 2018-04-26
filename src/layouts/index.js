import React from 'react' /* eslint-disable-line */
import styled from 'styled-components'

import Header from './header'
import Footer from './footer'

import './normalize.css'

const Section = styled.section`
  display: flex;
  padding: 1.45rem;
  max-width: 60rem;
  margin: 0 auto;
  min-height: 30rem;

  & > div { z-index: 1; }

  @media (min-width: 60rem) {
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
