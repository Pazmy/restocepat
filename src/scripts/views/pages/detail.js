import RestaurantSource from "../../data/restaurant-source";
import UrlParser from "../../routes/url-parser";
import { RestaurantDetail } from "../templates/template-creator";

const Detail = {
  async render() {
    return `<div class="restaurant-detail" id="restaurant-detail">
        </div>  
      `;
  },
  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailRestaurant(url.id);
    const RestaurantDetailContainer =
      document.querySelector("#restaurant-detail");
    console.log(restaurant.restaurant);
    RestaurantDetailContainer.innerHTML = RestaurantDetail(
      restaurant.restaurant
    );
  },
};

export default Detail;
