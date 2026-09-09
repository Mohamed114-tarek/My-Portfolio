class About extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <main class="about" >
      <h1 class="main-heading about__main-heading">About Me</h1>
      <section class="about__container container" id="about">
        <article class="about__text-column">
          <h1 class="about__text-heading">
            Turning Ideas <br />
            Into Interactive <br />
            <span class="about__text-heading--color">Experience</span>
          </h1>
          <p class="about__text-discription">
            I’m Mohamed Tarek a passionate Front-End Developer and Graphic
            Design. I Love building clean , modern websites and creating designs
            that makes an impact . I am studying medicine so I also focus on
            details very much , performance , user experience
          </p>
          <a href="/assets/Mohamed_Tarek_CV.pdf" target ="__blank" class="about__text-cta main-btn">See My CV</a>
        </article>
        <article class="about__skills-column">
          <article class="about__skill">
            <i class="fa-solid fa-code about__skill-icon"></i>
            <article class="about__skill-text-box">
              <h3 class="about__skill-head">Front End Development</h3>
              <p class="about__skill-text">
                HTML , CSS , JavaScript <br />
                Responsive Design , UI/UX
              </p>
            </article>
          </article>
          <article class="about__skill">
            <i class="fa-solid fa-palette about__skill-icon"></i>
            <article class="about__skill-text-box">
              <h3 class="about__skill-head">Graphic Design</h3>
              <p class="about__skill-text">
            Social media designs with, <br />
                Photoshop.
              </p>
            </article>
          </article>
          <article class="about__skill">
            <i class="fa-solid fa-brain about__skill-icon"></i>
            <article class="about__skill-text-box">
              <h3 class="about__skill-head">Mindset</h3>
              <p class="about__skill-text">
              Always learning , always improving, <br />
always creating.              </p>
            </article>
          </article>
        </article>
      </section>
    </main>`;
  }
}
customElements.define("m-about", About);
