const photos = document.querySelectorAll(".photo__img");

const photoModal = document.querySelector(".photo-modal");
const modalImage = document.querySelector(".photo-modal__img");

photos.forEach((photo) => {
  photo.addEventListener("click", () => {
    modalImage.src = photo.src;
    modalImage.alt = photo.alt;

    photoModal.classList.add("active");

    document.body.style.overflow = "hidden";
  });
});

photoModal.addEventListener("click", (e) => {
  if (e.target === photoModal) {
    photoModal.classList.remove("active");

    document.body.style.overflow = "";
  }
});
