import RestaurantSource from '../../data/restaurant-source'
import LoadingScreen from '../../utils/loading-screen'
import { RestaurantCard } from '../templates/template-creator'

const Home = {
  async render () {
    return ` <section class="section-1">
    <div class="hero-bg" aria-label="hero image background">
      <h1>Restaurant with menu around your location</h1>
    </div>
  </section>

  <section class="section-2">
    <h2>Explore Restaurant</h2>
    <div class="container-menu" id="container-menu"></div>
  </section>`
  },
  async afterRender () {
    LoadingScreen.loading()
    const restaurants = await RestaurantSource.ListRestaurants()
    LoadingScreen.hideLoading()
    const section2ContainerMenu = document.querySelector('#container-menu')
    restaurants.forEach((restaurant) => {
      section2ContainerMenu.innerHTML += RestaurantCard(restaurant)
    })
  }
}

export default Home
