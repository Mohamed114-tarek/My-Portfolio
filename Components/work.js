class Work extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <main class="work">
      <h1 class="main-heading">Work</h1>
      <section class="work__container container" id="work">
        <card-work
          img-src="assets/work-1.jpg"
          project-name="Hummer"
          type-work="Graphic Design" work-link="/hummer.html"
        ></card-work>
        <card-work
          img-src="assets/work-2.png"
          project-name="Dr.fayad"
          type-work="Front End Development"
          work-link="https://mohamed114-tarek.github.io/Dr.Fayad.com/"
        ></card-work>
        <card-work
          img-src="assets/work-3.jpg"
          project-name="Dr.Elmahdy"
          type-work="Graphic Design"
          work-link ="/mohamed.html"
        ></card-work>
      </section> <article class="work__btns"> <a class="main-btn work__main-btn" target="__blank" href="/my-work.html" >See More Work </a></article>
    </main>`;
  }
}
customElements.define("m-work", Work);
