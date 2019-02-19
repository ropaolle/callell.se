import React from 'react'
import { Link } from 'gatsby'

const PostExcerpt = ({ post }) => (
  <div>
    <h3>
      <Link to={post.frontmatter.path}>
        {post.frontmatter.title}
      </Link>
    </h3>
    <p><i>{post.frontmatter.date}</i></p>
    <div>
      {post.excerpt}
    </div>
  </div>
)

export default PostExcerpt
