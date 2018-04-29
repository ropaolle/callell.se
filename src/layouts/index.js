import React from 'react' /* eslint-disable-line */
import styled from 'styled-components'

// import fontawesome from '@fortawesome/fontawesome'
// // import FontAwesomeIcon from '@fortawesome/react-fontawesome'
// import brands from '@fortawesome/fontawesome-free-brands/faGithub'
// import faCheckSquare from '@fortawesome/fontawesome-free-solid/faCheckSquare'
// import envelopeSquare from '@fortawesome/fontawesome-free-solid/faEnvelopeSquare'

import './css/fontawsome'
import Header from './header'
import Footer from './footer'

import './css/pure-min.css'
import './css/overrides.css'

// fontawesome.library.add(faGithub, faCheckSquare, envelopeSquare)

const Template = props => {
  const { children, location } = props

  const Main = (location.pathname === '/') ?
    styled.div`
      /* No styling on the front page */
    `
    :
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

  return (
    <div id="page" className="stuff">
      <Header path={location.pathname} />
      <Main className="main">{children()}</Main>
      <Footer />
    </div>
  )
}

export default Template
