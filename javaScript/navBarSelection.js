
const navItems = document.querySelectorAll('.menu-item');

navItems.forEach(item => {
  item.addEventListener('click', navigate)
})

function navigate(event) {
  const page = event.target.className.split(' ')[1]
  setItemAsSelected(event)
  navigateToPage(page)
}

function setItemAsSelected(event) {
  const previousSelected = document.querySelector('#selected-item')
  const currentSelected = event.target
  if (previousSelected === currentSelected) {
    return null
  }
  if(!previousSelected) {
    return currentSelected.id = 'selected-item'
  }
  if (previousSelected !== currentSelected) {
    previousSelected.removeAttribute('id')
    return currentSelected.id = 'selected-item'
  }
}

function navigateToPage(page) {
  console.log(page)
  const previousPage = document.querySelector('.active-page')
  if (previousPage.id === page) {
    return null
  }
  const newPage = document.querySelector(`#${page}`)
  newPage.classList.add('active-page')
  newPage.classList.remove('unactive-page')
  previousPage.classList.remove('active-page')
  previousPage.classList.add('unactive-page')
}

// const pages = ['comeco', 'nos', 'atuacoes', 'encontros', 'contato']

// pages.forEach(page => {
//   const pageId = `#${page}`
//   const navgationOption = document.querySelector(pageId)
//   navgationOption.addEventListener('click', displayPage)
// })

// function displayPage(event) {
//   console.log(event.target)
// }

