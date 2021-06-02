import RestaurantSource from '../../data/restaurant-source'
import UrlParser from '../../routes/url-parser'
import LikeButtonInitiator from '../../utils/like-button-initiator'
import LoadingScreen from '../../utils/loading-screen'
import { RestaurantDetail } from '../templates/template-creator'

const Detail = {
  async render () {
    return `<div class="restaurant-detail" id="restaurant-detail">
        </div>
        <div id="likeButtonContainer"></div>
      `
  },
  async afterRender () {
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    LoadingScreen.loading()
    const response = await RestaurantSource.detailRestaurant(url.id)
    LoadingScreen.hideLoading()
    const RestaurantDetailContainer =
      document.querySelector('#restaurant-detail')
    RestaurantDetailContainer.innerHTML = RestaurantDetail(response.restaurant)

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: response.restaurant.id,
        address: response.restaurant.address,
        city: response.restaurant.city,
        description: response.restaurant.description,
        name: response.restaurant.name,
        rating: response.restaurant.rating,
        pictureId: response.restaurant.pictureId
      }
    })
    LoadingScreen.hideLoading()
  }
}

export default Detail
