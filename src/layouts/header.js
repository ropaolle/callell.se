import React from 'react' /* eslint-disable-line */
import Link from 'gatsby-link'
import styled from "styled-components";

const Container = styled.header`
  padding: 1.45rem;
  background-color: #f3f3f3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Header = props => {
  const { path } = props
  let header
  if (path === '/') {
    header = (
      <h1>
        <Link to="/">Callell.se</Link>
      </h1>
    )
  } else {
    header = (
      <h3>
        <Link to="/">Callell.se</Link>
      </h3>
    )
  }

  return (<Container>{header}</Container>)
}

export default Header