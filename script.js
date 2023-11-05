const carousels = document.querySelectorAll(".carousel");
carousels.forEach((carousel) => {
  const carouselItemArray = carousel.querySelectorAll(".carousel__item");

  const buttonsHTML = Array.from(carouselItemArray, () => {
    return `<span class="carousel__button"></span>`;
  });

  carousel.insertAdjacentHTML(
    "beforeend",
    `<div class="carousel__nav">
      ${buttonsHTML.join(" ")}
    </div>`
  );

  // Select the newly appended button elements within this carousel
  const buttons = carousel.querySelectorAll(".carousel__button");

  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      carouselItemArray.forEach((item) =>
        item.classList.remove("carousel__item--selected")
      );
      buttons.forEach((btn) =>
        btn.classList.remove("carousel__button--selected")
      );
      carouselItemArray[index].classList.add("carousel__item--selected");
      button.classList.add("carousel__button--selected");
    });
  });
  carouselItemArray[0].classList.add("carousel__item--selected");
  buttons[0].classList.add("carousel__button--selected");
});
