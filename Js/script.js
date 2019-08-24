

// const listItems = document.querySelectorAll('ul li')
// console.log(listItems)

const contactLink = document.querySelector('.Contact')
const servicesLink = document.querySelector('.Services')
const aboutLink = document.querySelector('.About')
const ExternalLink = document.querySelector('.External')


const contact = document.querySelector('.contact-form')
const about = document.querySelector('.bg-cover')
const services = document.querySelector('.bg-services')
const external = document.querySelector('.footer-content')


const moveToContact = () => moveToElement(contact)
const moveToAbout = () => moveToElement(about)
const moveToServices = () => moveToElement(services)
const moveToFooter = () => moveToElement(external)


contactLink.addEventListener("click", moveToContact)
aboutLink.addEventListener("click", moveToAbout)
servicesLink.addEventListener("click", moveToServices)
ExternalLink.addEventListener("click", moveToFooter)


// function moving to element itself
function moveToElement(elm) {
    // console.log(elm)
    elm.scrollIntoView ({
        behavior: 'smooth',
    })
}


