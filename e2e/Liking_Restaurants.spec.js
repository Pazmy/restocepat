/* eslint-disable no-undef */
const assert = require('assert')

Feature('Liking Restaurants')

Before(({ I }) => {
  I.amOnPage('/#/like')
})

Scenario('Showing empty liked restaurants', ({ I }) => {
  I.seeElement('.empty-like')
  I.see('There are no restaurants', 'h3')
})

Scenario('liking one restaurant', async ({ I }) => {
  I.see('There are no restaurants', 'h3')
  I.amOnPage('/')

  I.seeElement('.middle-card a')
  const firstRestaurant = locate('.middle-card a').first()
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant)
  I.click(firstRestaurant)

  I.seeElement('#likeButton')
  I.click('#likeButton')

  I.amOnPage('/#/like')
  I.seeElement('.card')
  const likedRestaurantName = await I.grabTextFrom('.middle-card h3')

  assert.strictEqual(firstRestaurantName, likedRestaurantName)
})

Scenario('unlike one restaurant', async ({ I }) => {
  I.see('There are no restaurants', 'h3')
  I.amOnPage('/')

  I.seeElement('.middle-card a')
  const firstRestaurant = locate('.middle-card a').first()
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant)
  I.click(firstRestaurant)

  I.seeElement('[aria-label="like this restaurant"')
  I.click('[aria-label="like this restaurant"')

  I.amOnPage('/#/like')
  I.seeElement('.card')
  I.click(firstRestaurant)
  I.seeElement('[aria-label="unlike this restaurant"')
  I.click('[aria-label="unlike this restaurant"')

  I.amOnPage('/#/like')
  I.dontSee(firstRestaurantName)
})
