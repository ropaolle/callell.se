import React from 'react' /* eslint-disable-line */
import styled from 'styled-components'

import Header from './header'
import Footer from './footer'

import './css/pure-min.css'
import './css/overrides.css'

const Wrapper = styled.section`
  background-color: #fff;
`

let Content = styled.div`
  // display: flex;
  // padding: 0 1.45rem;
  // max-width: 60rem;
  // margin: 0 auto;
  min-height: 30rem;

  & > div {
    z-index: 1;
  }

  @media (min-width: 62.9rem) {
    padding: 0;
  }
`

const Template = props => {
  const { children, location } = props

  if (location.pathname !== '/') {
    Content = Content.extend`
      display: flex;
      padding: 0 1.45rem;
      max-width: 60rem;
      margin: 0 auto;
    `
  }

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
