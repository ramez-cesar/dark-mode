const btnChangeMode = document.querySelector('#btn_change_mode')
const prefersColor = window.matchMedia('(prefers-color-scheme: dark)')


btnChangeMode.addEventListener('click', () => {
    
    if(prefersColor.matches) {
        document.body.classList.toggle('lightMode')
    }

})
