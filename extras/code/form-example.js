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
    <legend>Om du vill veta mer eller kanske rent ut av behöver hjälp med ett uppdrag är du alltid välkommen att höra av dig.</legend>

    <div hidden>
      <input name="bot-field" onChange={this.handleChange} />
    </div>

    <label htmlFor="name">Namn</label>
    <input name="name" type="text" placeholder="Namn" onChange={this.handleChange} />

    <label htmlFor="email">E-post</label>
    <input name="email" type="email" placeholder="E-posyt" onChange={this.handleChange} />
    <span className="pure-form-message">This is a required field.</span>

    <label htmlFor="state">State</label>
    <select name="state" onChange={this.handleChange} >
      <option>AL</option>
      <option>CA</option>
      <option>IL</option>
    </select>

    <label htmlFor="remember" className="pure-checkbox">
      <input name="remember" type="checkbox" onChange={this.handleChange} /> Remember me
    </label>

    <label htmlFor="meddelande">Meddelande</label>
    <textarea name="meddelande"  onChange={this.handleChange} />

    <button type="submit" className="pure-button pure-button-primary">Skicka</button>
  </fieldset>
</form>
