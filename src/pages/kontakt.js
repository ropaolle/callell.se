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
    .then(() => navigateTo('/tack/'))
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
          className="pure-form pure-form-stacked"
        >
          <fieldset>
            <legend>A contact form</legend>

            <div hidden>
              <input name="bot-field" onChange={this.handleChange} />
            </div>

            <label htmlFor="name">Name</label>
            <input name="name" type="text" placeholder="Name" onChange={this.handleChange} />

            <label htmlFor="email">E-post</label>
            <input name="email" type="email" placeholder="Email" onChange={this.handleChange} />
            <span className="pure-form-message">This is a required field.</span>

            <label htmlFor="state">State</label>
            <select name="state" onChange={this.handleChange} >
              <option>AL</option>
              <option>CA</option>
              <option>IL</option>
            </select>

            <label htmlFor="remember" className="pure-checkbox">
              <input name="remember" type="checkbox" onChange={this.handleChange} />Remember me
            </label>

            <label htmlFor="meddelande">Meddelande</label>
            <textarea name="meddelande"  onChange={this.handleChange} />

            <button type="submit" className="pure-button pure-button-primary">Skicka</button>
          </fieldset>
        </form>
      </div>
    );
  }
}
