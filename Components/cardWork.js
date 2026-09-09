class CardWork extends HTMLElement {
  connectedCallback() {
    const imgSrc = this.getAttribute("img-src") || "";
    const projectName = this.getAttribute("project-name") || "";
    const typeWork = this.getAttribute("type-work") || "";
    const workLink = this.getAttribute("work-link") || "";
    this.innerHTML = `
            <article class="work__box">
          <img
            src="${imgSrc}"
            alt="work of mine"
            class="work__box-img"
          />
        <article class ="work__box-text"> 
          <h2 class="work__box-main-heading">${projectName}</h2>
          <p class="work__box-main-text">${typeWork}</p>
          <a target="_blank" href="${workLink}" class="work__box-link">See Work <i class="fa-solid fa-arrow-right"></i></a>
          </article>
        </article>`;
  }
}

customElements.define("card-work", CardWork);
