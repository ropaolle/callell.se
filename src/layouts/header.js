import React from 'react' /* eslint-disable-line */
import Link from 'gatsby-link'
import styled from 'styled-components'

import logo from '../layouts/logo.png'
import headerImage from '../layouts/header.jpg'

const Container = styled.header`
  font-size: ${props => props.path ? '2rem' : '1rem'};
  padding: 1.45rem;
  background-color: #f3f3f3;
  display: flex;
  /* flex-direction: row */
  justify-content: space-between;
  align-items: center;
  /* background-image: url(${headerImage}); */
  background: url(./header.svg) no-repeat center center;
  min-height: 20rem;
  background-size: cover;
  width: 100%;
`
const Element = styled.div`
  flex: ${props => props.fullWidth ? '1' : 'initial'};
  img {
    max-height: 2rem;
    margin-bottom: 0;
  }
`;

const StyledLink = styled(Link)`
  color: #333;
  text-decoration: none;
  font-weight: bold;
  margin-left: 0.5rem;
`;

const Bar = styled.div`
  width: 35px;
  height: 6px;
  background-color: #222;
  margin: 6px 0;
  border-radius: 3px;
`;

const Header = props => {
  const { path } = props
console.log('P', props)
  return (
    <Container path={path === '/'}>
      <Element>
        <Link to="/"><img src={logo} alt="Callell.se" /></Link>
      </Element>
      <Element>
        <StyledLink to="/">Callell.se</StyledLink>
      </Element>
      <Element fullWidth />
      <Element>
        <span>
          <Bar />
          <Bar />
          <Bar />
        </span>
      </Element>
    </Container>
  )
}

export default Header
