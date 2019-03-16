import React from 'react'
import styled from 'styled-components'

import footer from '../images/footer.svg'

const FooterSecond = styled.div`
  margin-top: 50px;
  position: relative;
  line-height: 0;
`

const Element = styled.div`
  position: absolute;
  top: 33%;
  left: 1.45rem;
  max-width: 50%;
  line-height: 1.45em;
  font-size: 1.25rem;

  @media (max-width: 60rem) {
    font-size: 1.2rem;
  }

  @media (max-width: 30rem) {
    font-size: 1rem;
  }
`

const Footer = () => (
  <footer>
    <FooterSecond className="second-footer">
      <img src={footer} alt="Callell.se" />
      <Element>First we build the tools, then they build us...</Element>
    </FooterSecond>
  </footer>
)

export default Footer
