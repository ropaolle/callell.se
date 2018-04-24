import React from 'react' /* eslint-disable-line */
import styled from "styled-components";

import logo from '../layouts/logo.png'

const Container = styled.footer`
  color: ${props => props.light ? '#333' : '#eee'};
  background-color: ${props => props.light ? '#ccc' : '#454545'};

  padding: 1.45rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    max-height: 2rem;
    margin-bottom: 0;
  }
`;

// const LightContainer = Container.attrs({ color: '#eee' });

const Element = styled.div`
  /* color: #ee0; */
`;

const Footer = () => (
  <div>
    <Container>
      <Element>Callell.se <span role="img" aria-label="copyrigth">©</span> 2018</Element>
      <Element><img src={logo} alt="Callell.se" /></Element>
    </Container>
    <Container light>
      <Element>Callell.se <span role="img" aria-label="copyrigth">©</span> 2018</Element>
      <Element><img src={logo} alt="Callell.se" /></Element>
    </Container>
  </div>
  )

export default Footer
