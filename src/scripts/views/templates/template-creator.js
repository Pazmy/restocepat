import CONFIG from '../../globals/config'

const RestaurantCard = (restaurant) => {
  const description = restaurant.description.slice(0, 70)
  return `<div class="card">
      <div class="top-card">
      <a href="#/detail/${restaurant.id}">
        <img
          src="${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}"
          alt="${restaurant.name}"
        /></a>
      </div>
      <div class="middle-card">
           <h3><a href="#/detail/${restaurant.id}">${restaurant.name}</a></h3>
           <p class="rating">
          <span class="fas fa-star checked"></span>
          ${restaurant.rating}
        </p>
        <p>
          <span class="fas fa-map-marker-alt"></span>
          ${restaurant.city}
        </p>
        <p>
          ${description}
        </p>
      </div>
      <div class="bottom-card">
        <a href="#/detail/${restaurant.id}" class="details">Details</a>
        
      </div>
    </div>`
}

const RestaurantDetail = (restaurant) => {
  const foods = restaurant.menus.foods
  const drinks = restaurant.menus.drinks
  const reviews = restaurant.customerReviews

  return `<img
    src="${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}"
    alt="${restaurant.name}"
  />
  <h1>${restaurant.name}</h1>
  <div class="info">
    <p class="rating">
      <span class="fas fa-star checked"></span>
      ${restaurant.rating}
    </p>
    <p>
      <span class="fas fa-comment"></span>
      ${restaurant.customerReviews.length} Reviews
    </p>
    <p>
      <span class="fas fa-map-marker-alt"></span>
      ${restaurant.address}, ${restaurant.city}
    </p>
    <p>
      <span class="fas fa-utensils"></span> ${categories(restaurant)}
    </p>
  </div>
     <p>${restaurant.description}</p>
  <div class="menu">
    <h2>Menu</h2>
    <div class="menu-item">
      <div class="item">
      <h3>Foods</h3>
      <ul class="list-menu-item">${listItemMenu(foods)}</ul>
    </div>
    <div class="item">
      <h3>Drinks</h3>
      <ul class="list-menu-item">${listItemMenu(drinks)}</ul>
    </div>
    </div>
  </div>
  <div class="reviews">
    <h2>Reviews</h2>
    <div class="review-container">
    ${customerReviews(reviews)}
    </div>
  </div>
  
`
}
const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
  <svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
>
  <path fill="white"
    d="M12 9.229c.234-1.12 1.547-6.229 5.382-6.229 2.22 0 4.618 1.551 4.618 5.003 0 3.907-3.627 8.47-10 12.629-6.373-4.159-10-8.722-10-12.629 0-3.484 2.369-5.005 4.577-5.005 3.923 0 5.145 5.126 5.423 6.231zm-12-1.226c0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-7.962-9.648-9.028-12-3.737-2.338-5.262-12-4.27-12 3.737z"
  />
</svg>
  </button>
`

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z"/></svg>
  </button>
`

const listItemMenu = function (obj) {
  let li = ''
  obj.forEach((i) => {
    li += `<li>${i.name}`
  })
  return li
}

const categories = function (restaurant) {
  let menu = ''
  restaurant.categories.forEach((i) => (menu += ` ${i.name}`))
  return menu
}

const customerReviews = function (review) {
  let reviewItem = ''
  review.forEach((i) => {
    reviewItem += `
    <div class="review-item">
    <span>${i.name}, ${i.date}</span>
    <span>${i.review}</span>
    </div>`
  })
  return reviewItem
}

export {
  RestaurantCard,
  RestaurantDetail,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate
}
