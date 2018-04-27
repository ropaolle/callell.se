import React from "react"; /* eslint-disable-line */
import { navigateTo } from "gatsby-link";

function encode(data) {
  return Object.keys(data)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
      .join("&");
}

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
    .then(() => navigateTo('/thanks/'))
    .catch(error => alert(error));

    e.preventDefault();
  };

  render() {
    return (
      <div>
        <h1>Contact</h1>
        <form
          name="contact"
          method="post"
          action="/tack/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          <p hidden>
            <label>
              Don’t fill this out: <input name="bot-field" onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <label>
              Your name:<br />
              <input type="text" name="name" onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <label>
              Your email:<br />
              <input type="email" name="email" onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <label>
              Message:<br />
              <textarea name="message" onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
        <form className="pure-form pure-form-stacked">
          <fieldset>
            <legend>A contact form</legend>

            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="Email" />
            <span className="pure-form-message">This is a required field.</span>

            <label htmlFor="password">Password</label>
            <input id="password" type="password" placeholder="Password" />

            <label htmlFor="state">State</label>
            <select id="state">
              <option>AL</option>
              <option>CA</option>
              <option>IL</option>
            </select>

            <label htmlFor="remember" className="pure-checkbox">
              <input id="remember" type="checkbox" />Remember me
            </label>

            <button type="submit" className="pure-button pure-button-primary">Sign in</button>
          </fieldset>
        </form>
      </div>
    );
  }
}
