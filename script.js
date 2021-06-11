const cardButton = document.querySelector(".card__button--js");
const cardFooter = document.querySelector(".card__footer");

function showApps(event) {
  cardFooter.classList.toggle("active");
}

cardButton.addEventListener("click", showApps);
