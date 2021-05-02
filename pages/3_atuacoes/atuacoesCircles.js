const redCircle = document.querySelector('.red-circle')
const cameraIcon = document.querySelector('.camera-icon')
const photoGallery = document.querySelector('.photo-gallery')
const closeButton = document.querySelector('.close-button');

const imageGallery = [
  {
    src: '../../assets/1_audioVisual/images/cidade.jpg',
    label: 'cidade'
  },
  {
    src: '../../assets/1_audioVisual/images/galpao.jpg',
    label: 'galpao'
  },
  {
    src: '../../assets/1_audioVisual/images/grafitte.jpg',
    label: 'grafitte'
  },
  {
    src: '../../assets/1_audioVisual/images/pescador.jpg',
    label: 'pescador'
  },
  {
    src: '../../assets/1_audioVisual/images/praia.jpg',
    label: 'praia'
  },
  {
    src: '../../assets/1_audioVisual/images/sala_abandonada.jpg',
    label: 'sala_abandonada'
  },
  {
    src: '../../assets/1_audioVisual/images/sambista.jpg',
    label: 'sambista'
  },
  {
    src: '../../assets/1_audioVisual/images/sesc.jpg',
    label: 'sesc'
  },
]

const setInfiniteScroll = (imageElement) => {
  console.log(imageElement)
  imageElement.addEventListener('click', () => {
    const gallery = document.querySelector('.gallery')
    gallery.style.padding = "0 500px 0 0"
  })
}

const renderGallery = () => {
  const gallery = document.querySelector('.gallery')
  console.log(gallery)
  imageGallery.forEach((image) => {
    const imageElement = document.createElement('img')
    imageElement.className = 'gallery-image'
    imageElement.setAttribute('src', image.src)
    imageElement.setAttribute('alt', image.label)
    gallery.appendChild(imageElement)
    setInfiniteScroll(imageElement)
  })
}

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
  renderGallery()
})

closeButton.addEventListener('click', () => {
  console.log('close button')
  photoGallery.classList.remove('darker-overlay')
  photoGallery.removeAttribute('id')
})

