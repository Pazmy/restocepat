import 'regenerator-runtime' /* for async await transpile */
import '../styles/main.css'
import App from './views/app'
import swRegister from './utils/sw-register'

const app = new App({
  button: document.querySelector('.nav-toggle'),
  drawer: document.querySelector('.links'),
  content: document.querySelector('#mainContent')
})

window.addEventListener('hashchange', () => {
  app.renderPage()
})
window.addEventListener('load', () => {
  app.renderPage()
  swRegister()
})
