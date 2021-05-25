import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";
import data from "../DATA.json";

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
// const data = JSON.parse(data);
navToggle.addEventListener("click", function () {
  links.classList.toggle("show-links");
});

let section2_container_menu = document.querySelector(".container-menu");
let card = "";
data.restaurants.forEach((e) => {
  card += `<div class="card">
  <div class="top-card">
  <a href="">
    <img
      src="${e.pictureId}"
      alt="${e.name}"
    /></a>
  </div>
  <div class="middle-card">
       <h3><a href="#">${e.name}</a></h3>
       <p class="rating">
      <span class="fas fa-star checked"></span>
      ${e.rating}
    </p>

    <p>
      <span class="fas fa-map-marker-alt"></span>
      ${e.city}
    </p>
    <p>
      ${e.description}
    </p>
  </div>
  <div class="bottom-card">
    <a href="#" class="details">Details</a>
    <button class="favorite" aria-label="add to favorite">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path
          d="M12 9.229c.234-1.12 1.547-6.229 5.382-6.229 2.22 0 4.618 1.551 4.618 5.003 0 3.907-3.627 8.47-10 12.629-6.373-4.159-10-8.722-10-12.629 0-3.484 2.369-5.005 4.577-5.005 3.923 0 5.145 5.126 5.423 6.231zm-12-1.226c0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-7.962-9.648-9.028-12-3.737-2.338-5.262-12-4.27-12 3.737z"
        />
      </svg>
    </button>
  </div>
</div>`;
});
section2_container_menu.innerHTML = card;
