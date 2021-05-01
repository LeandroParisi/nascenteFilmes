const redCircle = document.querySelector('.red-circle')
const cameraIcon = document.querySelector('.camera-icon')

redCircle.addEventListener('mouseover', () => {
  cameraIcon.setAttribute('id', 'active')
})

redCircle.addEventListener('mouseleave', () => {
  cameraIcon.removeAttribute('id')
  cameraIcon.setAttribute('id', 'fadeOut')
})