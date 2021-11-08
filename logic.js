const Ul = document.querySelector('.Untitled-lists')
const bars = document.getElementById('bars')
const nav = document.querySelector('NAV')

bars.addEventListener('click', () => {
    Ul.classList.toggle('active')
    nav.classList.toggle('active')
})
