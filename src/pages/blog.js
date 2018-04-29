import React from "react"; /* eslint-disable-line */
import styled from "styled-components";
import Link from 'gatsby-link'
import Helmet from 'react-helmet' /* eslint-disable-line */
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import get from 'lodash/get'

const Container = styled.div`

`;

const BlogIndex = props => {
  const siteTitle = get(props, 'data.site.siteMetadata.title')
  const posts = get(props, 'data.allMarkdownRemark.edges')

  return (
    <Container>
      <Helmet title={siteTitle} />
      <h1><FontAwesomeIcon icon="rss" /> Blogg</h1>

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
