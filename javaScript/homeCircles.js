const homeYellowCircle = document.querySelector('.yellow-circle')
const playButton = document.querySelector('.play-button')
const overlay = document.querySelector('.overlay');
const closeButton = document.querySelector('.close-button');
const videoPopup = document.querySelector('#video-popup')
const video = document.querySelector('.video-container')

homeYellowCircle.addEventListener('mouseover', () => {
  const playButtonEntrance = 900;

  setTimeout(() => {
    playButton.classList.add('visible')
  }, playButtonEntrance)
})

playButton.addEventListener('click', () => {
  video.autoplay = true
  console.log(videoPopup.requestFullscreen)

  if (videoPopup.requestFullscreen) {
    videoPopup.requestFullscreen();
  }
  else if (videoPopup.webkitRequestFullscreen) {
    videoPopup.webkitRequestFullscreen();
  }
  else if (videoPopup.msRequestFullScreen) {
    videoPopup.msRequestFullScreen();
  } 
  video.load()
  videoPopup.classList.add('active')
  overlay.setAttribute('id', 'overlay-active')
})

closeButton.addEventListener('click', async () => {
  overlay.removeAttribute('id');
  videoPopup.classList.remove('active')
  if (videoPopup.fullscreenElement) {
    await videoPopup.exitFullscreen();
  }
  else if (videoPopup.fullscreenElement) {
    await videoPopup.webkitexitFullscreen();
  }
  else if (videoPopup.fullscreenElement) {
    await videoPopup.msexitFullscreen();
  } 
  video.autoplay = false;
  video.pause();
})
