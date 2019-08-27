

// const listItems = document.querySelectorAll('ul li')
// console.log(listItems)

const contactLink = document.querySelector('.Contact')
const servicesLink = document.querySelector('.Services')
const homepageLink = document.querySelector('.Homepage')
const aboutLink = document.querySelector('.About')
const ExternalLink = document.querySelector('.External')


const contact = document.querySelector('.contact-form')
const homepage = document.querySelector('.bg-cover')
const about = document.querySelector('.wrapper')
const services = document.querySelector('.bg-services')
const external = document.querySelector('.footer-content')


const moveToContact = () => moveToElement(contact)
const moveToAbout = () => moveToElement(about)
const moveToHome = () => moveToElement(homepage)
const moveToServices = () => moveToElement(services)
const moveToFooter = () => moveToElement(external)



contactLink.addEventListener("click", moveToContact)
aboutLink.addEventListener("click", moveToAbout)
homepageLink.addEventListener("click", moveToHome)
servicesLink.addEventListener("click", moveToServices)
ExternalLink.addEventListener("click", moveToFooter)


// function moving to element itself
function moveToElement(elm) {
    // console.log(elm)
    elm.scrollIntoView ({
        behavior: 'smooth',
    })
}



const mainNav = document.getElementById('target-menu')
const navToggle = document.getElementById('target-navbar')


navToggle.addEventListener('click', function () {
    // console.log(this.classList)
    // console.log("Same this :", navToggle.classList)

    if (this.classList.contains('active')) {
        // console.log("yes", this.classList.contains('active'))
        mainNav.style.display = "none"
        this.classList.remove('active')
    }
    else {
        // console.log("nooo", this.classList.contains('active'))
        mainNav.style.display = "flex"
        this.classList.add('active')
    }
})

