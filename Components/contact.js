class Contact extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `    <main class="contact">
          <h1 class="main-heading about__main-heading">Contact</h1>
      <section class="contact__container container">
        <img
          class="contact__img"
          src="assets/contact.svg"
          alt="contact photo"
        />
        <article class="contact__info">
          <article class="contact__info-card">
            <i class="fa-solid fa-phone contact__info-card-icon"></i>
            <h3 class="contact__info-card-heading">010 2641 437</h3>
          </article>
          <article class="contact__info-card">
            <i class="fa-regular fa-envelope contact__info-card-icon"></i>
            <a
              href="mailto:mohamedelawady2023@gmail.com"
              target="_blank"
              class="contact__info-link"
            >
              <h3 class="contact__info-card-heading">
                mohamedelawady2023@gmail.com
              </h3></a
            >
          </article>
          <article class="contact__info-card">
            <a href="https://www.facebook.com/Mohamed8Elawady" target="_blank" class="contact__info-link">
              <i class="fa-brands fa-facebook contact__info-card-icon"></i>
            </a>
            <a href="https://www.instagram.com/mohamed8_tarek/" target="_blank" class="contact__info-link">
              <i class="fa-brands fa-instagram contact__info-card-icon"></i>
            </a>
            <a href="https://wa.me/201022641437" target="_blank" rel="noopener noreferrer" class="contact__info-link">
              <i class="fa-brands fa-whatsapp contact__info-card-icon"></i>
            </a>
            <a href="http://github.com/Mohamed114-tarek?tab=repositories" target="_blank" class="contact__info-link">
              <i class="fa-brands fa-github contact__info-card-icon"></i>
            </a>
            <h3 class="contact__info-card-heading">My social media</h3>
          </article>
        </article>
      </section>
    </main>`;
  }
}
customElements.define("m-contact", Contact);
