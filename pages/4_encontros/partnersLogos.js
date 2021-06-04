const partnersLogos = [
  {
    src: '../../assets/3_partnersLogos/sus.png',
    width: '100px',
    name: 'logo SUS'
  },
  {
    src: '../../assets/3_partnersLogos/ambev.png',
    width: '100px',
    name: 'logo ambev'
  },
  {
    src: '../../assets/3_partnersLogos/ipads.png',
    width: '100px',
    name: 'logo ipads'
  },
  {
    src: '../../assets/3_partnersLogos/arapyau.png',
    width: '100px',
    name: 'logo arapyau'
  },
  {
    src: '../../assets/3_partnersLogos/rpb.png',
    width: '150px',
    name: 'logo rpb'
  },
  {
    src: '../../assets/3_partnersLogos/calvo.png',
    width: '100px',
    name: 'logo calvo'
  },
  {
    src: '../../assets/3_partnersLogos/estudiomawaca.png',
    width: '100px',
    name: 'logo estudiomawaca'
  },
  {
    src: '../../assets/3_partnersLogos/suindara.png',
    width: '120px',
    name: 'logo suindara'
  },
  {
    src: '../../assets/3_partnersLogos/ancat.jpg',
    width: '120px',
    name: 'logo Ancat'
  },
  {
    src: '../../assets/3_partnersLogos/pragma.jpg',
    width: '150px',
    name: 'logo Pragma'
  },
]

const partnersLogosContainer = document.querySelector('.partners-sub-container')

partnersLogos.forEach(({src, name, width}, index) => {
  const position = index + 1
  const logoContainer = document.createElement('img');
  logoContainer.setAttribute('src', src);
  logoContainer.setAttribute('alt', name);
  logoContainer.style.width = width
  // logoContainer.classList.add('logo-image');

  if (position % 5 === 0) {
    logoContainer.classList.add('single-row')
  }
  partnersLogosContainer.appendChild(logoContainer);
})