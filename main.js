// DOM elements
const logo = document.querySelector("header .logo img")
const linksDiv = document.querySelector("header .links")
const burger = document.getElementById("burger-menu")
const overlay = document.querySelector(".overlay.blue")
// Variables
let isMenuExisted = false



// Burger menu
overlay.remove()
burger.addEventListener("click", () => {
  if (isMenuExisted) {
    linksDiv.classList.remove("show")
    logo.src = "./images/logo-bookmark.svg"
    burger.src = "./images/icon-hamburger.svg"
    overlay.remove()

    isMenuExisted = false
  } else {
    linksDiv.classList.add("show")
    logo.src = "./images/logo-bookmark-white.svg"
    burger.src = "./images/icon-close.svg"
    document.body.append(overlay)

    isMenuExisted = true
  }
})
window.addEventListener("resize", () => {
  if (isMenuExisted) {
    linksDiv.classList.remove("show")
    logo.src = "./images/logo-bookmark.svg"
    burger.src = "./images/icon-hamburger.svg"
    overlay.remove()

    isMenuExisted = false
  }
})