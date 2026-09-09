class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header>
        <main class="header__container container">
          <img src="assets/logo.png" alt="Website Logo" class="header__logo" />
          <nav>
            <ul class="nav__list">
              <li class="nav__list-item">
                <a href="#home" class="nav__list-link nav__list-link--active">Home</a>
              </li>
              <li class="nav__list-item">
                <a href="#about" class="nav__list-link">About</a>
              </li>
              <li class="nav__list-item">
                <a href="#work" class="nav__list-link">work</a>
              </li>
              <li class="nav__list-item">
                <a href="#contact" class="nav__list-link">Contact</a>
              </li>
            </ul>
          </nav>
        </main>
      </header>`;
  }
  // trackSections() {
  //   const observer = new IntersectionObserver(
  //     (entry) => {
  //       entry.forEach((enter) => {
  //         if (enter.isIntersecting) {
  //           let link = document.querySelector(`a[href="#${enter.target.id}"]`);
  //           const navList = document.querySelectorAll(".nav__list-link");
  //           navList.forEach((a) => {
  //             a.classList.remove("nav__list-link--active");
  //           });
  //           link.classList.add("nav__list-link--active");
  //         }
  //       });
  //     },
  //     {
  //       threshold: 0.2,
  //     },
  //     {},
  //   );
  //   const sections = document.querySelectorAll(
  //     "#home , #about , #work ,#contact",
  //   );
  //   sections.forEach((sec) => observer.observe(sec));
  // }
}

customElements.define("m-header", Header);
