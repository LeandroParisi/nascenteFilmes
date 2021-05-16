const redCircle = document.querySelector('.red-circle')
const cameraIcon = document.querySelector('.camera-icon')
const photoGallery = document.querySelector('.photo-gallery')
const closeButton = document.querySelector('.close-button');

redCircle.addEventListener('mouseover', () => {
  cameraIcon.setAttribute('id', 'active')
})

redCircle.addEventListener('mouseleave', () => {
  cameraIcon.removeAttribute('id')
  cameraIcon.setAttribute('id', 'fadeOut')
})

redCircle.addEventListener('click', () => {
  photoGallery.setAttribute('id', 'overlay-active')
  photoGallery.classList.add('darker-overlay')
})

closeButton.addEventListener('click', () => {
  photoGallery.classList.remove('darker-overlay')
  photoGallery.removeAttribute('id')
})

