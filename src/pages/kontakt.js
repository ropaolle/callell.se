import React from 'react'
import { navigateTo } from 'gatsby-link'
import styled from 'styled-components'
import { FaEnvelope, FaPhone, FaHome, FaMedkit } from 'react-icons/fa'
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

  h3 {
    margin-bottom: 6px;
  }

  svg {
    vertical-align: -3px;
    margin-right: 8px;
  }
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
                    Om du vill veta mer eller behöver hjälp med ett uppdrag är
                    du välkommen att höra av dig.
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

                  {/* <label htmlFor="state">Ärende</label>
                  <select name="state" onChange={this.handleChange}>
                    <option>Underhåll av befintlig kodbas.</option>
                    <option>Hjälp med att bygga tester.</option>
                    <option>Ett generellt utvecklingsprojekt.</option>
                    <option>Övriga ärenden</option>
                  </select> */}

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
            <h3>Kontaktuppgifter</h3>
            <div>
              <FaHome />
              <a href="https://callell.se">https://callell.se </a>
            </div>
            <div>
              <FaMedkit />
              <a href="https://support.callell.se" target="_blank">https://support.callell.se </a>
            </div>
            <div>
              <FaEnvelope />
              <a href="mail:kontakt@callell.se">kontakt@callell.se</a>
            </div>
            <div>
              <FaPhone />
              <a href="tel:08-446 828 22">08-446 828 22</a>
            </div>
            <h3>Försäljning/teknik</h3>
            <div>Olof Sjögren</div>
            <div><a href="email:olof.sjogren@callell.se">olof.sjogren@callell.se</a></div>
            <div><a href="tel:08-446 828 22">08-446 828 22</a> </div>
            <h3>Adress</h3>
            <div>
              <strong>Callell.se</strong>
            </div>
            <div>Attn: Olof Sjögren</div>
            <div>Fridshyddevägen 1</div>
            <div>191 36 SOLLENTUNA</div>
          </ColumnRight>
        </Wrapper>
      </Layout>
    )
  }
}
