import data from "../../../DATA.json";
import RestaurantSource from "../../data/restaurant-source";
import { RestaurantCard } from "../templates/template-creator";

const Home = {
  async render() {
    return ` <section class="section-1">
    <div class="hero-bg" aria-label="hero image background">
      <h1>Restaurant with menu around your location</h1>
    </div>
  </section>

  <section class="section-2">
    <h2>Explore Restaurant</h2>
    <div class="container-menu" id="container-menu"></div>
  </section>`;
  },
  async afterRender() {
    const restaurants = await RestaurantSource.ListRestaurants();
    let section2ContainerMenu = document.querySelector("#container-menu");
    restaurants.forEach((restaurant) => {
      section2ContainerMenu.innerHTML += RestaurantCard(restaurant);
    });
  },
};

export default Home;
