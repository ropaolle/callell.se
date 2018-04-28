import React from 'react' /* eslint-disable-line */
import styled from 'styled-components'

import Header from './header'
import Footer from './footer'

import './css/pure-min.css'
import './css/overrides.css'

import header from '../layouts/img/header-thin.svg'

const Wrapper = styled.section`
  /* background-color: #fff; */
`
const HeaderImage = styled.div`
  overflow: hidden;
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;

  img {
    flex: 0 0 auto;
    height: 11em;
    width: auto;
  }
`;

const Template = props => {
  const { children, location } = props

  const Content = (location.pathname !== '/') ?
    styled.div`
      display: flex;
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
      background-color: white;
    `

  return (
    <div id="page" className="stuff">
      <HeaderImage>
        <img src={header} alt="Callell.se" />
      </HeaderImage>
      <Header path={location.pathname} />
      <Wrapper>
        <Content className="content">{children()}</Content>
      </Wrapper>
      <Footer path={location.pathname} />
    </div>
  )
}

export default Template
