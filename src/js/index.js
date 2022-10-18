const btnChangeMode = document.querySelector('#btn_change_mode')
const prefersColor = window.matchMedia('(prefers-color-scheme: dark)')


btnChangeMode.addEventListener('click', () => {
    let addTheme
    
    if(prefersColor.matches) {
        document.body.classList.toggle('lightMode')
        addTheme = document.body.classList.contains('lightMode') ? 'light' : ''
    }

    localStorage.setItem('theme', addTheme)
})


const getTheme = localStorage.getItem('theme')

if(getTheme === 'light') {
    document.body.classList.add('lightMode')
} else {
    localStorage.removeItem('theme')
}