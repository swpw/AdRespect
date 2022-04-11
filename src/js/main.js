const updateImageSize = () => 
  document.querySelectorAll('.gallery__img').forEach(e => 
    e.style.height = `${e.width * 3/4}px`)

window.addEventListener('resize', () => updateImageSize())
window.addEventListener('load', () => updateImageSize())

/**/

const btnMonthly = document.querySelector('#btn-monthly'),
  btnYearly = document.querySelector('#btn-yearly'),
  cardMonthly = document.querySelector('#monthly-cards'),
  cardyearly = document.querySelector('#yearly-cards')

let isMonthlyActive = true

btnMonthly.addEventListener('click', () => {
  if(isMonthlyActive) return
  
  cardMonthly.className = 'card__outside-container card__outside-container--is-active'
  cardyearly.className = 'card__outside-container'

  btnMonthly.className = 'pricing__button pricing__button--active'
  btnYearly.className = 'pricing__button'

  isMonthlyActive = true
})

btnYearly.addEventListener('click', () => {
  if(!isMonthlyActive) return

  cardMonthly.className = 'card__outside-container'
  cardyearly.className = 'card__outside-container card__outside-container--is-active'

  btnMonthly.className = 'pricing__button'
  btnYearly.className = 'pricing__button pricing__button--active'

  isMonthlyActive = false
})

/**/
const navEl = document.querySelector('.nav'),
  openMenuEl = document.querySelector('#menu'),
  closeMenuEl =document.querySelector('.nav__close-menu')

openMenuEl.addEventListener('click', () => navEl.className = 'nav nav--menu-open')

closeMenuEl.addEventListener('click', () => navEl.className = 'nav')

