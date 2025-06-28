// DOM elements
const logo = document.querySelector("header .logo img")
const linksDiv = document.querySelector("header .links")
const burger = document.getElementById("burger-menu")
const overlay = document.querySelector(".overlay.blue")
const featuresToggle = document.querySelectorAll(".features-toggle span")
const questions = document.querySelectorAll(".question > p")
const input = document.querySelector(".contact input")
const submit = document.querySelector(".contact button")

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


// Features toggle
featuresToggle.forEach(span => {
  span.addEventListener("click", () => {
    featuresToggle.forEach(s => s.classList.remove("active"))
    span.classList.add("active")
  })
})


// Questions
questions.forEach(ques => {
  ques.addEventListener("click", () => {
    questions.forEach(que => que.parentElement.classList.remove("active"))
    ques.parentElement.classList.add("active")
  })
})


// Email validation
submit.addEventListener("click", (e) => {
  e.preventDefault()

  const emailValue = input.value.trim()
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  
  if (!emailValue || !emailRegex.test(emailValue)) {
    input.parentElement.classList.add("error")
    return
  }
  
  input.value = ""
})
input.addEventListener("focus", () => input.parentElement.classList.remove("error"))
input.addEventListener("input", () => input.parentElement.classList.remove("error"))