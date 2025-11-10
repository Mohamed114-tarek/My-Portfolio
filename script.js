const openIcon = document.getElementById(`open`);
const closeIcon = document.getElementById(`close`);
const list = document.getElementById(`list`);
const header = document.getElementById(`header`);
const first = document.querySelector(".header__logo");
const second = document.querySelectorAll(".header__nav-link--bg-sc");
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
