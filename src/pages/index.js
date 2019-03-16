import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import header from '../images/header.svg'
import appdev from '../images/app-dev.svg'
import headshot1 from '../images/headshot1.jpg'
import headshot2 from '../images/headshot2.jpg'

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
`

const Section = styled.section`
  div.wrapper {
    padding: 1.45rem;
    max-width: 60rem;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
  }

  article {
    flex: 1 1 300px;
  }
`

const SectionOne = styled(Section)`
  position: relative; // Visa framför header-bild.
  article {
    max-width: 700px;
  }
  button {
    float: right;
  }
`

const SectionTwo = styled(Section)`
  margin-bottom: 30px;
  article {
    padding: 10px;
  }
`

const SectionThree = styled(Section)`
  background-color: #f5da3f;
`

const Article = styled.article`
  color: #444;
  flex-grow: 1;

  h1 {
    font-size: 3.5rem;
    margin-top: 0;
    color: #fff;

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

const Blocks = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -5px;

  article {
    background-color: #eee;
    margin: 5px 5px 5px 50px;

    &:first-of-type {
      margin-right: 50px;
    }

    img {
      border-radius: 500px;
      border: 10px solid #aaa;
      width: 30%;
      margin-top: -23px;
      margin-left: -50px;
      margin-right: 10px;
      float: left;
    }

    i {
      margin: 12px 0px;
      display: block;
    }

    @media (max-width: 600px) {
      &:first-of-type {
        margin-right: 5px;
        margin-bottom: 35px;
      }
    }
  }
`

const Page = () => (
  <Layout frontpage>
    <SEO title="Home" keywords={[`JavaScript`, `React`, `HTML5`, `CSS`, `GraphQL`, `MongoDB`, `SQL`]} />

    <HeaderImage>
      <img src={header} alt="Callell.se" />
    </HeaderImage>

    <SectionOne>
      <div class="wrapper">
        <Article>
          <h1>Webbutveckling</h1>

          <h2>
            Vi är specialicerade på frontendprojekt och älskar att arbeta med
            JavaScript, React, HTML5, CSS, GraphQL, MongoDB och SQL.
          </h2>

          <p>
            Om du söker en konsult som kan hjälpa till med både större och
            mindre projekt har du hittat rätt. Vi har en bred erfarenhet av
            webbutveckling och kan starta upp nya projekt med kort varsel.
          </p>

          <Link to="/kontakt">
            <button className="pure-button pure-button-primary">Hör gärna av dig</button>
          </Link>
        </Article>
      </div>
    </SectionOne>

    <SectionTwo>
      <div class="wrapper">
        <h3>Röster från några tidigare uppdrag</h3>
        <Blocks>
          <Article>
            <img src={headshot1} alt="duponts" />
            På ett mindre företag är det alltid utmanande med
            personalförändringar. När en av våra utvecklare av en kundlösning vi
            utvecklat själva slutade behövde vi snabbt få in en ersättare som
            kunde hantera den befintliga kodbasen.
            <i>
              Callell kunde direkt gå in och börja arbeta med det befintliga
              projektet och hantera kundkritiska buggar samtidigt som de kunde
              utöka lösningen efter våra önskemål.
            </i>
            <div>Lotta Andersson, Innovation officer – Duponta AB</div>
          </Article>

          <Article>
            <img src={headshot2} alt="duponts" />
            <div>
              I vår bransch är det av yttersta vikt att alltid ge våra kunder
              ett snabbt och tydligt bemötande, samtidigt som vi behöver full
              kontroll på kommunikationsflödet. Att hitta en lösning som
              hanterad våra behov visade sig vara svårare än vi hade förväntat
              oss.
            </div>
            <i>
              Tillsammans med Callell byggde vi istället en kundanpassad lösning
              som utför det vi vill, varken mer eller mindre. Slimmat, smidigt
              och lätt att underhålla.
            </i>
            <div>
              Martin Petersson, Customer interaction manager - Broadcast Telecom
              AB
            </div>
          </Article>
        </Blocks>
      </div>
    </SectionTwo>

    <SectionThree>
      <div class="wrapper">
        <Article>
          <img src={appdev} alt="Callell.se" />
        </Article>
        <Article>
          <h3>
            Why millions of developers use javascript for web application
            development
          </h3>
          <blockquote cite="http://www.gutenberg.org/ebooks/1257">
            Over the past 20 years or so since when JavaScript was released, it
            has become the most popular programming language for web development
            today. You can understand the importance of JavaScript as a web
            development language from the fact that as per the recent reports,
            JavaScript is currently being used by more than 94 percent of all
            the websites.
            <div>
              <a href="https://torquemag.io/2018/06/why-millions-of-developers-use-javascript-for-web-application-development/">
                Torquemag.io, June 2018
              </a>
            </div>
          </blockquote>
        </Article>
      </div>
    </SectionThree>
  </Layout>
)

export default Page
