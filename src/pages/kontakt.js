import React from 'react'
import { navigateTo } from 'gatsby-link'
import styled from 'styled-components'
import { FaEnvelope } from 'react-icons/fa'
import Layout from '../components/layout'
import SEO from '../components/seo'

const Wrapper = styled.div`
  display: flex;

  article:first-child {
    margin-right: 1.45rem;
  }

  @media (max-width: 800px) {
    flex-wrap: wrap;

    article:first-child {
      margin-right: 0;
      margin-bottom: 1.45rem;
    }
  }
`

const Content = styled.article`
  flex: 2 1 auto;
`

const ColumnRight = styled.aside`
  flex: 1 1 350px;
  background-color: #f7f7f7;
  padding: 1em;
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

function encode (data) {
  return Object.keys(data)
    .map(key => `${ encodeURIComponent(key) }=${ encodeURIComponent(data[key]) }`)
    .join('&')
}

export default class Contact extends React.Component {
  constructor (props) {
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
      body: encode({ 'form-name': 'contact', ...this.state })
    })
      .then(() => navigateTo('/tack/'))
      .catch(error => alert(error))

    e.preventDefault()
  }

  render () {
    return (
      <Layout>
        <SEO title="Kontakt" />
        <Wrapper className="content">
          <Content>
            <StyledForm>
              <h1>
                <FaEnvelope /> Kontakt
              </h1>
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
                    Om du vill veta mer eller kanske rent ut av behöver hjälp
                    med ett uppdrag är du alltid välkommen att höra av dig.
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

                  <label htmlFor="state">Ärende</label>
                  <select name="state" onChange={this.handleChange}>
                    <option>Underhåll av befintlig kodbas.</option>
                    <option>Hjälp med att bygga tester.</option>
                    <option>Ett generellt utvecklingsprojekt.</option>
                    <option>Övriga ärenden</option>
                  </select>

                  <label htmlFor="meddelande">Meddelande</label>
                  <textarea
                    name="meddelande"
                    rows="8"
                    onChange={this.handleChange}
                  />

                  <button
                    type="submit"
                    className="pure-button pure-button-primary"
                  >
                    Skicka
                  </button>
                </fieldset>
              </form>
            </StyledForm>
          </Content>

          <ColumnRight>
            <h2>Support</h2>
            Vid support rekommenderar vi vårt ärendesystem. För att använda det
            måste Du först registrera ett konto. Därefter kan Du enkelt
            uppdatera eller skapa nya ärenden genom att helt enkelt E-posta till{' '}
            <a href="mailto:support@callell.se">support@callell.se</a>.
            <h3>Registrera ett nytt konto</h3>
            <ul>
              <li>
                Gå till{' '}
                <a
                  href="https://support.callell.se/portal/signup"
                  target="_blank"
                >
                  Registrera ett nytt konto
                </a>{' '}
                och ange dina användaruppgifter.
              </li>
            </ul>
            Du har nu möjlighet att:
            <ul>
              <li>
                <a href="https://support.callell.se" target="_blank">
                  Logga in
                </a>{' '}
                och visa status och historik för dian ärenden.
              </li>
              <li>
                E-posta ärenden till{' '}
                <a href="mailto:support@callell.se">support@callell.se</a>.
              </li>
            </ul>
          </ColumnRight>
        </Wrapper>
      </Layout>
    )
  }
}
