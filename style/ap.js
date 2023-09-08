const slides = document.querySelectorAll('.slide')

for (const slide of slides) {
    slide.addEventListener('click', () => {
        clearActiveClasses()
        slide.classList.add('active')
    })
}

function clearActiveClasses() {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
}
function scrollTo(element){
    window.scroll({
        left:0,
        top:element.offsetTop,
        behavior:'smooth'
    })
}
var button = document.querySelector('.header-btn');
var blog = document.querySelector('.foodHeading')
button.addEventListener('click', () =>{
    scrollTo(blog)
})

function scrollTo(element){
    window.scroll({
        left:0,
        top:element.offsetTop,
        behavior:'smooth'
    })
}
var onas = document.querySelector('.onas');
var history = document.querySelector('.history')
button.addEventListener('click', () =>{
    scrollTo(blog)
})
