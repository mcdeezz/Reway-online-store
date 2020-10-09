// A $( document ).ready() block.
$(document).ready(function () {
  console.log("ready!");
  const listItems = document.querySelectorAll(".menu > .nav-item");
  const hideShowIcons = document.querySelector(".hide-show-icons");
  const iconBox = document.querySelector(".hide-show-icons > span");

  // selecting the carousel-indicator dots

  const liDots = document.querySelectorAll(".carousel-indicator li");

  function setSelectedCarouselDot() {
    if (document.querySelector(".carousel-indicator li.dots-active") != null) {
      document
        .querySelector(".carousel-indicator li.dots-active")
        .classList.remove("dots-active");
    }
    this.classList.add("dots-active");
    console.log("click");
  }

  liDots.forEach((item) => {
    item.addEventListener("click", setSelectedCarouselDot);
    console.log(item);
  });

  carouseActiveBoxes = document.querySelectorAll(".carousel-box");

  // .dots-active
  // carousel active box
  function setSelectedCarouselBox() {
    if (document.querySelector(".carousel-box.active-carousel-box") != null) {
      document
        .querySelector(".carousel-box.active-carousel-box")
        .classList.remove("active-carousel-box");
    }
    this.classList.add("active-carousel-box");
  }

  carouseActiveBoxes.forEach((item) => {
    item.addEventListener("click", setSelectedCarouselBox);
    // console.log("ready!");
  });

  // more boots section
  const cards = document.querySelectorAll(".more-deals-card");

  function setSelectedClass() {
    if (document.querySelector(".more-deals-card.selected-card") != null) {
      document
        .querySelector(".more-deals-card.selected-card")
        .classList.remove("selected-card");
    }
    this.classList.add("selected-card");
  }

  cards.forEach((item) => {
    item.addEventListener("click", setSelectedClass);
    // console.log("ready!");
  });

  listItems[1].classList.add("active");

  function setActiveClass() {
    if (document.querySelector(".nav-item.active") != null) {
      document.querySelector(".nav-item.active").classList.remove("active");
    }
    this.classList.add("active");
  }

  listItems.forEach((item) => {
    item.addEventListener("click", setActiveClass);
    // console.log("ready!");
  });

  hideShowIcons.addEventListener("click", () => {
    if (iconBox.classList.contains("expand-icon")) {
      iconBox.classList.add("mini-icon");
      iconBox.classList.remove("expand-icon");
    } else {
      iconBox.classList.add("expand-icon");
      iconBox.classList.remove("mini-icon");
    }
  });
});
