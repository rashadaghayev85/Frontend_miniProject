"use strict";


document.addEventListener('scroll' , () => {
    let header = document.querySelector ("header")
    let body = document.querySelector ('body')
    let logo = document.querySelector ('.dropdown, .pages > ul > li > a ')
    let link = document.querySelectorAll ('.nav-link')
    
    if (window.scrollY > 0) {
        header.classList.add('scroll')
        logo.style.color = "#000"
        //link.style.color = "#000"
        link.forEach(element => {
            element.style.color="#000"
        });
        // body.style.padding = "90px 0 0 0"
    }
    else {
        header.classList.remove('scroll')
        logo.style.color = "#fff"
        link.forEach(element => {
            element.style.color="#fff"
        });
        // body.style.padding = "0"
    }
})

let a = document.querySelectorAll("button")
let exam = document.querySelectorAll (".exam")
let icon = document.querySelector (".icon")


a.forEach(element => {
    element.addEventListener('click', () => {
        document.querySelector('.active')?.classList.remove('active')
        element.classList.add('active');
    })
    if(icon.className === "active"){
        exam.forEach(e => {
            e.classList.add("d-flex")
        })
    }
    else{
        exam.forEach(e => {
            e.classList.remove("d-flex")
        })
    }

})


























    // a.forEach(element => {
    //     element.addEventListener("click",function(){
         
    //         a.forEach(element => {
    //             element.classList.remove("active")
    //             if (element.getElementsByClassName("active")) {
    //                 element.style.background = "#2b4eff"
    //             }
    //             else {
    //                 element.style.background = "transparent"
    //             }
    
    
    
    //     });
    
    //         element.classList.add("active")

           
    
    
    
    //       } )
    // }) 
    // a.forEach(element => {
    //     if (element.getElementsByClassName("active")) {
    //         element.style.background = "#2b4eff"
    //     }
    //     else {
    //         element.style.background = "transparent"
    //     }
    // })

