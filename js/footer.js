class Footer extends HTMLElement {
    constructor() {
      super();
    }
  

  connectedCallback() {
    this.innerHTML = `
    <footer class="footer">
    <div class="footer__inner-container">
    <div class="footer__left-content">
      <img src="./images/logo-white.svg" alt="" class="navigation-footer__logo">
      <nav class="footer__nav">
        <ul class="footer__nav-list">
          <li class="footer__nav-item"><a href="./index.html" class="footer__nav-link">Home</a></li>
          <li class="footer__nav-item"><a href="./portfolio.html" class="footer__nav-link">Portfolio</a></li>
          <li class="footer__nav-item"><a href="./contact.html" class="footer__nav-link">Contact me</a></li>
        </ul>
      </nav>
    </div>
    <div class="footer__right-content">
      <div class="footer__social-container">
        <img id="githubIcon" src="./images/icons/github.svg" alt="github" class="footer__icon">
        <img id="twitterIcon" src="./images/icons/twitter.svg" alt="twitter" class="footer__icon">
        <img id="linkedinIcon" src="./images/icons/linkedin.svg" alt="linkedin" class="footer__icon">
      </div>
    </div>
  </div>
  </footer>
    `

  
  }

}

  customElements.define('footer-component', Footer);









