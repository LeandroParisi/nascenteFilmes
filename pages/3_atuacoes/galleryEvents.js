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
    src: '../../assets/1_audioVisual/images/sala_abandonada.png',
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

let currentPhoto = 0
const minIndex = 0
const maxIndex = imageGallery.length - 1

const arrowLeft = document.querySelector('.arrow-left')
const arrowRight = document.querySelector('.arrow-right')
const currentImage = document.querySelector('.gallery-image')

arrowLeft.addEventListener('click', () => {
  if (currentPhoto - 1 >= minIndex) {
    arrowRight.classList.remove('disabled')
    currentPhoto -= 1
    currentImage.setAttribute('src', imageGallery[currentPhoto].src)
  } 
  if (currentPhoto === minIndex) {
    arrowLeft.classList.add('disabled')
  } 
});

arrowRight.addEventListener('click', () => {
  if (currentPhoto + 1 <= maxIndex) {
    arrowLeft.classList.remove('disabled')
    currentPhoto += 1
    currentImage.setAttribute('src', imageGallery[currentPhoto].src)
  } if (currentPhoto === maxIndex) {
    arrowRight.classList.add('disabled')
  }
});