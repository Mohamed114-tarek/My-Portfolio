class Hero extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <main class="hero" >
      <section class="hero__container container" id="home">
        <article class="hero__text-box">
          <p class="hero__text-1">Hello, I'm</p>
          <h1 class="hero__main-heading">Mohamed Tarek</h1>
          <h2 class="hero__sub-heading">
            Front End Development
            <span class="hero__sub-heading--x">X</span> Graphic Designer
          </h2>
          <p class="hero__main-text">
            I build modern , responsive websites and create <br />
            visual designs that turn ideas into reality
          </p>
          <article class="hero__btns-box">
            <button class="main-btn hero__main-btn">
              View My Work
              <i class="fa-solid fa-arrow-right hero__main-btn-icon"></i>
            </button>
            <a href="/assets/Mohamed_Tarek_CV.pdf" download class="sec-btn hero__sec-btn">Download CV</a>
          </article>
        </article>
        <img src="assets/hero.svg" alt="Illustration" class="hero__img" />
      </section>
    </main>`;
  }
}
customElements.define("m-hero", Hero);
