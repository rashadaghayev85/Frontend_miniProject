"use strict";


document.addEventListener('scroll' , () => {
    let header = document.querySelector ("header")
    let body = document.querySelector ('body')
    
    if (window.scrollY > 0) {
        header.classList.add('scroll')
        // body.style.padding = "90px 0 0 0"
    }
    else {
        header.classList.remove('scroll')
        // body.style.padding = "0"
    }
})