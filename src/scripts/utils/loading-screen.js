const LoadingScreen = {

  loading () {
    const loading = document.querySelector('.loading')
    loading.classList.add('add')
  },
  hideLoading () {
    const loading = document.querySelector('.loading')
    loading.classList.remove('add')
  }
}

export default LoadingScreen
