import FavoriteRestaurant from "../../data/database";
import { RestaurantCard } from "../templates/template-creator";

const Like = {
  async render() {
    return `
        <section class="section-2">
    <h2>Liked Restaurant</h2>
    <div class="container-menu" id="container-menu"></div>
  </section>`;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurant.getAllRestaurant();
    let section2ContainerMenu = document.querySelector("#container-menu");
    restaurants.forEach((restaurant) => {
      section2ContainerMenu.innerHTML += RestaurantCard(restaurant);
    });
  },
};

export default Like;
