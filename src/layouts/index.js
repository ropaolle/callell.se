import React from 'react' /* eslint-disable-line */
import styled from 'styled-components'

import Header from './header'
import Footer from './footer'

import './index.css'

const Section = styled.section`
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Template = props => {
  const { children, location } = props

  return (
    <div>
      <Header path={location.pathname} />
      <Section>{children()}</Section>
      <Footer path={location.pathname} />
    </div>
  )
}

export default Template
