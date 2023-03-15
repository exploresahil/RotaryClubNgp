// Import our custom CSS
import "../scss/styles.scss";

//*-----------------------------------------> Header Nav Section

const openMenu = document.querySelector(".nav-menu-open");
const nav = document.querySelector(".nav");
const closeMenu = document.querySelector(".nav-menu-close");
const closeobject = document.querySelector("#closeObject");

openMenu.addEventListener("click", () => {
  nav.classList.add("open");
  openMenu.style.display = "none";
  closeMenu.style.display = "block";
});

closeobject.addEventListener("click", () => {
  nav.classList.remove("open");
  openMenu.style.display = "block";
});

closeMenu.addEventListener("click", () => {
  nav.classList.remove("open");
  openMenu.style.display = "block";
});

//*-----------------------------------------> Home Hero Section

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  effect: "fade",
  loop: true,
  grabCursor: "true",
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

//*-----------------------------------------> Home Over View Section

const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;

//*-----------------------------------------> featured Projects Section

var featuredSwiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});

//*-----------------------------------------> Photo Gallery Section

window.onload = function () {
  /// Get the select element
  const selectElement = document.getElementById("photoYear");

  // Get the current year
  const currentYear = new Date().getFullYear();

  // Add options for all years since 2000 to the current year
  for (let year = 2000; year <= currentYear; year++) {
    // Create a new option element
    const optionElement = document.createElement("option");

    // Set the value and text of the option
    optionElement.value = year;
    optionElement.textContent = year;

    // Add the option to the select element
    selectElement.appendChild(optionElement);
  }

  // Set the default option to the current year
  selectElement.value = currentYear;

  nav.classList.remove("open");
};

