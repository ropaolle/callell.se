import React from 'react' /* eslint-disable-line */
import styled from 'styled-components'

import header from '../layouts/img/header.svg'

const HeaderImage = styled.div`
  overflow: hidden;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 0;

  img {
    flex: 0 0 auto;
    height: 35em;
    width: auto;
  }
`;

const FullWidth = styled.section`
  min-height: 450px;
  div {
    padding: 1.45rem;
    max-width: 60rem;
    margin: 0 auto;
  }
`;

const FullWidthOne = FullWidth.extend`
  min-height: 200px;
  div {
    justify-content: space-evenly;
    display: flex;
    flex-wrap: wrap;
    & > article {
      margin-right: 1.45rem;
      margin-bottom: 1.45rem;
    }
  }
`;

const FullWidthTwo = FullWidth.extend`
  background-color: #555;
  color: #fff;
`;

const FullWidthThree = FullWidth.extend`
`;

const Article = styled.article`
  max-width: 500px;
  z-index: 1;
  position: relative;
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
const Block = styled.article`
  background-color: #eee;
  min-height: 100px;
  min-width: 300px;
  flex-grow: 1;
  padding: 10px;
`;


const Page = () => (
  <div>
    <HeaderImage>
      <img src={header} alt="Callell.se" />
    </HeaderImage>
    <FullWidth>
      <div>
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

          <button className="pure-button pure-button-primary">A Primary Button</button>
        </Article>
      </div>
    </FullWidth>
    <FullWidthOne>
      <div>
        <Block>dummy</Block>
        <Block>dummy</Block>
      </div>
    </FullWidthOne>
    <FullWidthTwo>
      <div>
        <Article>
        dummy
        </Article>
      </div>
    </FullWidthTwo>
    <FullWidthThree>
      <div>
        <Article>
        dummy
        </Article>
      </div>
    </FullWidthThree>
  </div>
)

export default Page
