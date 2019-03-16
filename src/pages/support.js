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
  svg {
    color: green;
  }
`

const ColumnRight = styled.aside`
  flex: 1 1 500px;
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

export default class Contact extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <Layout>
        <SEO title="Kontakt" />
        <Wrapper className="content">
          <Content>
            <h1>
              <span style={{ color: '#007f0e;' }}>
                <FaMedkit />
              </span>{' '}
              Support
            </h1>
            Vid behov av support rekommenderar vi Callell.se's ärendesystem.
            Ärendena loggas då automatiskt och Du kan själv gå in och
            kontrollera status på Dina ärenden. För att använda ärendesystemet
            måste Du först registrera ett konto.
            <h2>Registrera ett konto</h2>
            <ul>
              <li>
                Gå till{' '}
                <a
                  href="https://support.callell.se/portal/signup"
                  target="_blank"
                >
                  Registrera ett nytt konto
                </a>{' '}
                och ange Dina användaruppgifter.
              </li>
            </ul>
            Du har nu möjlighet att:
            <ul>
              <li>
                <a href="https://support.callell.se" target="_blank">
                  Logga in
                </a>{' '}
                och visa status och historik för Dina ärenden.
              </li>
              <li>
                E-posta ärenden till{' '}
                <a href="mailto:support@callell.se">support@callell.se</a>.
              </li>
            </ul>
          </Content>
          <ColumnRight>
            <h3>Kontaktuppgifter</h3>
            <div>
              <FaHome />
              <a href="https://callell.se">https://callell.se </a>
            </div>
            <div>
              <FaMedkit />
              <a href="https://support.callell.se" target="_blank">
                https://support.callell.se{' '}
              </a>
            </div>
            <div>
              <FaEnvelope />
              <a href="email:kontakt@callell.se">kontakt@callell.se</a>
            </div>
            <div>
              <FaPhone />
              <a href="tel:08-446 828 22">08-446 828 22</a>
            </div>
            <h3>Försäljning/teknik</h3>
            <div>Olof Sjögren</div>
            <div>
              <a href="email:olof.sjogren@callell.se">
                olof.sjogren@callell.se
              </a>
            </div>
            <div>
              <a href="tel:08-446 828 22">08-446 828 22</a>{' '}
            </div>
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
