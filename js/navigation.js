class Navigation extends HTMLElement {
    constructor() {
      super();
    }
  

  connectedCallback() {
    this.innerHTML = `
    <nav class="navigation-top">
    <img src="./images/logo.svg" alt="" class="navigation-top__logo">
    <button class="hamburger-menu"></button>
    <div class="nav-container">
      <ul class="nav-primary">
        <li class="nav-primary__list-item"><a href="#" id="home-link" class="nav-primary__list-link cyan">Home</a></li>
        <li class="nav-primary__list-item"><a href="#" class="nav-primary__list-link">Portfolio</a></li>
        <li class="nav-primary__list-item"><a href="#" class="nav-primary__list-link">Contact me</a></li>
      </ul>
    </div>
  </nav>
    `

  
  }

}


  customElements.define('navigation-component', Navigation);



