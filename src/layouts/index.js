import React from 'react' /* eslint-disable-line */
import styled from 'styled-components'

import Header from './header'
import Footer from './footer'

import './css/normalize.css'
import './css/buttons.css'
import './css/forms.css'
import './css/overrides.css'

const Wrapper = styled.section`
  background-color: #fff;
`

const Content = styled.div`
  display: flex;
  padding: 0 1.45rem;
  max-width: 60rem;
  margin: 0 auto;
  min-height: 30rem;

  & > div { z-index: 1; }

  @media (min-width: 62.9rem) {
    padding: 0;
  }
`

const Template = props => {
  const { children, location } = props

  return (
    <div id="page" className="stuff">
      <Header path={location.pathname} />
      <Wrapper>
        <Content className="content">{children()}</Content>
      </Wrapper>
      <Footer path={location.pathname} />
    </div>
  )
}

export default Template
