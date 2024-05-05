const burgerBtn = document.querySelector('.hidden-menu-ico')
const topMenu = document.querySelector('.menu')

burgerBtn.addEventListener('click', () => {
    topMenu.classList.toggle('top-menu-hidden')
})

topMenu.addEventListener('click', () => {
    topMenu.classList.remove('top-menu-hidden')
})