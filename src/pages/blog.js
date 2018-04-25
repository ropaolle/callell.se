import React from "react"; /* eslint-disable-line */
import styled from "styled-components";
import Link from 'gatsby-link'
import Helmet from 'react-helmet' /* eslint-disable-line */
import get from 'lodash/get'

// import Bio from '../components/Bio'
import UserCard from '../components/UserCard'

const Container = styled.div`
  margin: 3rem auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BlogIndex = props => {
  const siteTitle = get(props, 'data.site.siteMetadata.title')
  const posts = get(props, 'data.allMarkdownRemark.edges')

  return (
    <Container>
      <Helmet title={siteTitle} />
      {/* <Bio /> */}

      <h1>About Styled Components</h1>
      <p>Styled Components is cool</p>
      <UserCard
        username="Jane Doe"
        avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
        excerpt="I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      />
      <UserCard
        username="Bob Smith"
        avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
        excerpt="I'm Bob smith, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      />
      {posts.map(({ node }) => {
        const title = get(node, 'frontmatter.title') || node.fields.slug
        return (
          <div key={node.fields.slug}>
            <h3>
              <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                {title}
              </Link>
            </h3>
            <small>{node.frontmatter.date}</small>
            {/* eslint-disable-next-line */}
            <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
          </div>
        )
      })}
    </Container>
)
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`
