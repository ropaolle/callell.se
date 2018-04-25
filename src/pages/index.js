import React from 'react' /* eslint-disable-line */

const NotFoundPage = () => (
  <div>
    <h1>Blog</h1>
    <p>Tada...</p>
    <form name="contact" method="POST" netlify>
      <p>
        <label>
          Your Name: <input type="text" name="name" />
        </label>
      </p>
      <p>
        <label>
          Your Email: <input type="email" name="email" />
        </label>
      </p>
      <p>
        <label>
          Message: <textarea name="message" />
        </label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  </div>
)

export default NotFoundPage
