class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <footer>
      <h3 class="footer__headginn">Created by Mohamed Tarek Elawady</h3>
    </footer>`;
  }
}
customElements.define("m-footer", Footer);
