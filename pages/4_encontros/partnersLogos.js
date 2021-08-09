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
  { // Copiar daqui...
    src: '../../assets/3_partnersLogos/pragma.jpg',
    width: '150px', // alterar o tamanho da imagem
    name: 'logo Pragma'
  }, // Até aqui, para adicionar uma nova imagem
]

const partnersLogosContainer = document.querySelector('.partners-sub-container')

partnersLogos.forEach(({src, name, width}, index) => {
  const position = index + 1
  const logoContainer = document.createElement('div');
  logoContainer.classList = 'logoContainer';
  const logo = document.createElement('img');
  logoContainer.appendChild(logo);
  logo.setAttribute('src', src);
  logo.setAttribute('alt', name);
  logo.style.width = width

  if (position % 5 === 0) {
    logoContainer.classList.add('single-row')
  }
  partnersLogosContainer.appendChild(logoContainer);
})