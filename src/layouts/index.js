import React from 'react' /* eslint-disable-line */
import styled from 'styled-components'

import Header from './header'
import Footer from './footer'

import './index.css'

const Page = styled.div`
  /* display: flex;
  flex-direction: column;
  min-height: 100%;
  height: 100%; */
`

const Section = styled.section`
  background-color: #fafafa;
  display: flex;
  /* flex-direction: row; */
  /* align-items: center; */
  /* justify-content: center; */
  padding: 1.45rem;
`

const Template = props => {
  const { children, location } = props
  console.log('P', props)
  return (
    <Page>
      <Header path={location.pathname} />
      <Section>
        <h1>JavaScript och Webbutveckling</h1>

      </Section>
      {/* <Section>{children()}</Section> */}
      <Footer path={location.pathname} />
    </Page>
  )
}

export default Template
