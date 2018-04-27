import React from 'react' /* eslint-disable-line */
import styled from 'styled-components'

import header from '../layouts/img/header.svg'

const Article = styled.article`
  max-width: 500px;
  z-index: 1;
  color: #444;

  h1 {
    font-size: 3.5rem;
    margin-top: 0;
    color: #FFF;

    @media (max-width: 600px) {
      font-size: 2.5rem;
      margin-top: -1rem;
    }
  }

  h2 {
    @media (max-width: 600px) {
      font-size: 1.1rem;
    }
  }
`

const HeaderImage = styled.div`
  overflow: hidden;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: -1;

  img {
    flex: 0 0 auto;
    height: 38em;
    width: auto;
  }
`;

const Page = () => (
  <Article>
    <HeaderImage>
      <img src={header} alt="Callell.se" />
    </HeaderImage>

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

    <button className="pure-button pure-button-primary">A Primary Button</button>
  </Article>
)

export default Page
