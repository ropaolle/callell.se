import React from 'react' /* eslint-disable-line */
import styled from 'styled-components'

const Article = styled.article`
  max-width: 500px;
  z-index: 1;
  /*@media (min-width: 60rem) {
    padding: 0;
  } */

  h1 {
    font-size: 3.5rem;
    /* margin-top: 0; */
  }
`

const Page = () => (
  <Article>
    <h1>Webbutveckling</h1>
    <h2>
      Vi är specialicerade på frontendprojekt och älskar att arbeta med
      JavaScript, React, HTML5, CSS, GraphQL, MongoDB och SQL.
    </h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </p>
    <input type="button" value="Click Me" />
  </Article>
)

export default Page
