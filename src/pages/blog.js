import React from 'react'
import { graphql } from 'gatsby'
import PostExcerpt from '../components/post-excerpt'

import Layout from '../components/layout'
import SEO from '../components/seo'

export default function Blogs ({
  data: {
    allMarkdownRemark: { edges },
  },
}) {
  console.log(edges)

  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => <PostExcerpt key={edge.node.id} post={edge.node} />)

  return (
    <Layout>
      <SEO title="Page two" />
      <h1>Blogg</h1>
      <div>{Posts}</div>

    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`
