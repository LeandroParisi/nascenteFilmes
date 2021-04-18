const homeYellowCircle = document.querySelector('.yellow-circle')
const playButton = document.querySelector('.play-button')
const overlay = document.querySelector('.overlay');
const closeButton = document.querySelector('.close-button');
const video = document.querySelector('.video-container')

homeYellowCircle.addEventListener('mouseover', () => {
  const playButtonEntrance = 900;

  setTimeout(() => {
    playButton.classList.add('visible')
  }, playButtonEntrance)
})

playButton.addEventListener('click', () => {
  video.autoplay = true
  if (video.requestFullscreen) {
    video.requestFullscreen();
  }
  else if (video.webkitRequestFullscreen) {
    video.webkitRequestFullscreen();
  }
  else if (video.msRequestFullScreen) {
    video.msRequestFullScreen();
  } 
  video.load()
  overlay.setAttribute('id', 'overlay-active')
})

closeButton.addEventListener('click', () => {
  overlay.removeAttribute('id');
  video.autoplay = false;
  video.pause();
})
