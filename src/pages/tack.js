import React from "react"; /* eslint-disable-line */
import styled from 'styled-components'

// import kontakt from './images/kontakt.svg'

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  article:first-child {
    margin-right: 1.45rem;
  }
  @media (max-width: 800px) {
    article:first-child {
      margin-right: 0;
      margin-bottom: 1.45rem;
    }
  }
`

const Element = styled.article`
  min-width: 300px;
  flex-grow: 1;
  flex-basis: 0; // Equal width
  background-color: #e7e7e7;
`

export default () =>(
  <Wrapper>
    <Element>
      <h1>Thank you!</h1>
      <p>This is a custom thank you page for submissions from the contact form</p>
    </Element>
    <Element>
      Dude
    </Element>
  </Wrapper>);
