const header = document.getElementById('header')

function headerFaid() {
    const scrollValue = window.scrollY;
    if(scrollValue < 600) {
        header.classList.remove('header-onScroll')
    } 
    if(scrollValue >= 600) {
        header.classList.add('header-onScroll')
    }
}

window.addEventListener('scroll', headerFaid)