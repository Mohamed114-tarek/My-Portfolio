const openIcon = document.getElementById(`open`);
const closeIcon = document.getElementById(`close`);
const list = document.getElementById(`list`);
const header = document.getElementById(`header`);
const first = document.querySelector(".header__logo");
const second = document.querySelectorAll(".header__nav-link--bg-sc");
const ctaOneLeon = document.getElementById(`code-leon`);
const ctaTwoLeon = document.getElementById(`demo-leon`);
const ctaOneModus = document.getElementById(`code-modus`);
const ctaTwoModus = document.getElementById(`demo-modus`);
const projects = document.getElementById(`landing__cta-1`);
const secProjects = document.getElementById("pro");
openIcon.onclick = function () {
  list.style.right = "0%";
};
closeIcon.onclick = function () {
  list.style.right = "-200%";
};
document.addEventListener("click", function (e) {
  if (!list.contains(e.target) && !openIcon.contains(e.target)) {
    list.style.right = "-200%";
  }
});
ctaOneLeon.onclick = function () {
  window.open("https://github.com/Mohamed114-tarek/Leon-Template-", "_blank");
};
ctaTwoLeon.onclick = function () {
  window.open("https://mohamed114-tarek.github.io/Leon-Template-/", "_blank");
};
ctaOneModus.onclick = function () {
  window.open(
    "https://github.com/Mohamed114-tarek/Modus-Template-Agency-",
    "_blank"
  );
};
ctaTwoModus.onclick = function () {
  window.open(
    "https://mohamed114-tarek.github.io/Modus-Template-Agency-/",
    "_blank"
  );
};
projects.onclick = function () {
  secProjects.scrollIntoView({ behavior: "smooth" });
};
