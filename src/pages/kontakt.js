import React from 'react' /* eslint-disable-line */
import { navigateTo } from 'gatsby-link'
import styled from 'styled-components'

import kontakt from './images/kontakt2.svg'

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
`

const StyledForm = styled.div`
  select,
  input,
  textarea {
    width: 100%;
  }

  fieldset label {
    margin-top: 20px;
  }

  fieldset button {
    margin-top: 10px;
  }
`

function encode(data) {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')
}

export default class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state }),
    })
      .then(() => navigateTo('/tack/'))
      .catch(error => alert(error))

    e.preventDefault()
  }

  render() {
    return (
      <Wrapper className="olle">
        <Element>
          <StyledForm>
            <h1>Kontakt</h1>
            <form
              name="contact"
              method="post"
              action="/tack/"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={this.handleSubmit}
              className="pure-form pure-form-stacked"
            >
              <fieldset>
                <legend>
                  Om du vill veta mer eller kanske rent ut av behöver hjälp med
                  ett uppdrag är du alltid välkommen att höra av dig.
                </legend>

                <div hidden>
                  <input name="bot-field" onChange={this.handleChange} />
                </div>

                <label htmlFor="business">Företag</label>
                <input
                  name="business"
                  type="text"
                  placeholder="Företag"
                  onChange={this.handleChange}
                />

                <label htmlFor="name">Namn</label>
                <input
                  name="name"
                  type="text"
                  placeholder="Namn"
                  onChange={this.handleChange}
                />

                <label htmlFor="email">E-post</label>
                <input
                  name="email"
                  type="email"
                  placeholder="E-post"
                  onChange={this.handleChange}
                />
                {/* <span className="pure-form-message">This is a required field.</span> */}

                <label htmlFor="state">Ärende</label>
                <select name="state" onChange={this.handleChange}>
                  <option>Underhåll av befintlig kodbas.</option>
                  <option>Hjälp med att bygga tester.</option>
                  <option>Ett generellt utvecklingsprojekt.</option>
                  <option>Övriga ärenden</option>
                </select>

                <label htmlFor="meddelande">Meddelande</label>
                <textarea name="meddelande" onChange={this.handleChange} />

                <button
                  type="submit"
                  className="pure-button pure-button-primary"
                >
                  Skicka
                </button>
              </fieldset>
            </form>
          </StyledForm>
        </Element>
        <Element>
          <img src={kontakt} alt="Callell.se" />
        </Element>
      </Wrapper>
    )
  }
}
