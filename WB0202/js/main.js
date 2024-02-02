const burger = document.querySelector('.burger-icon')
const body = document.querySelector('.body')

burger.addEventListener ('click', () => {
    if (body.classList.contains('body--opened-menu')) {
        body.classList.remove('body--opened-menu')
    }
    else {
        body.classList.add('body--opened-menu')
    }
})