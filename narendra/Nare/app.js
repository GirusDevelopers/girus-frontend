const hamburger = document.querySelector("#hamburger")
const menu = document.querySelector("#hamburger")

hamburger.addEventListener("click", ()=>{
    menu.classList.toggle("hidden")
    hamburger.classList.toggle("bg-white")
})