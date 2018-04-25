import React from 'react' /* eslint-disable-line */
import styled from 'styled-components'

import Header from './header'
import Footer from './footer'

import './index.css'

const Section = styled.section`
  background-color: #fafafa;
  display: flex;
  padding: 1.45rem;

  @media (min-width: 600px) {
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
