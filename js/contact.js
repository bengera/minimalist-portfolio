class Contact extends HTMLElement {
    constructor() {
      super();
    }
  

  connectedCallback() {
    this.innerHTML = `
    <section id="contact-section" class="contact">
    <div class="contact__left-content">
      <h1 class="contact__heading">Interested in doing a project together?</h1>
    </div>
    <div class="contact__line"></div>
    <div class="contact__right-content">
    <a href="contact.html" class="about btn-short">Contact me</a>
    </div>
  </section>
    `

  
  }

}

  customElements.define('contact-component', Contact);









