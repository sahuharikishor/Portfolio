/*=============== SHOW & CLOSE MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/* Show menu */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/* Hide menu */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MOBILE MENU ===============*/
const navLink = document.querySelectorAll('.nav__link, .nav__contact')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== HOME TEXT CIRCULAR ===============*/
const homeText = document.getElementById('home-text'),
    letters = homeText.textContent.trim().split(''),
    angleStep = 360 / letters.length

homeText.textContent = ''

// Iterates through each character
letters.forEach((char, i) => {
    const span = document.createElement('span')
    span.textContent = char
    span.style.transform = `rotate(${i * angleStep}deg)`
    homeText.appendChild(span)
})


/*=============== HOME TYPED JS ===============*/
const typedHome = new Typed('#home-typed', {
    strings: ['Freelancer', 'Web Developer', 'SEO Specialist', 'Data Analyst'],
    typeSpeed: 60,
    backSpeed: 30,
    backDelay: 2000,
    loop: true,
})


/*=============== CHANGE HEADER STYLES ===============*/
const scrollHeader = () => {
    const header = document.getElementById('header')
    // Add the .scroll-header class if the bottom scroll of the viewport is greater than 50
    this.scrollY >= 50 ? header.classList.add('scroll-header')
        : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


/*=============== SWIPER WORK ===============*/
const swiperWork = new Swiper('.work__swiper', {
    loop: true,
    spaceBetween: 24,
    slidesPerView: 'auto',
    grabCursor: true,
    speed: 600,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    }
})


/*=============== SERVICES ACCORDION ===============*/
const servicesCards = document.querySelectorAll('.services__card'),
    servicesButtons = document.querySelectorAll('.services__button')

// It iterates over each button found
servicesButtons.forEach(button => {
    button.addEventListener('click', () => {
        const currentCard = button.closest('.services__card'), // Get the cla...
            isOpen = currentCard.classList.contains('services-open') // Che...

        // Close all other services data
        servicesCards.forEach(card => {
            card.classList.replace('services-open', 'services-close')
        })

        // If the clicked card was closed, it opens it
        if (!isOpen) {
            currentCard.classList.replace('services-close', 'services-open')
        }
    })
})


/*=============== TESTIMONIALS OF DUPLICATE CARDS ===============*/
// Get all testimonial sliders
const tracks = document.querySelectorAll('.testimonials__content')

tracks.forEach(track => {
    const cards = [...track.children]

    for (const card of cards) {
        track.appendChild(card.cloneNode(true))
    }
})


/*=============== CONTACT EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message')

const sendEmail = async (e) => {
    // Prevent the page from reloading
    e.preventDefault()

    try {
        // serviceID - templateID - #form - publicKey
        await emailjs.sendForm('service_29bof4l', 'template_5tmcdj8', '#contact-form', 'hCghQs0noOwkMy_Is')
        // Show sent message
        contactMessage.textContent = 'Message sent successfully ✅'

        // Clear input fields
        contactForm.reset()
    } catch (error) {
        // Show error message
        contactMessage.textContent = 'Message not sent (service error) ❌'
    } finally {
        // Remove message after five seconds
        setTimeout(() => contactMessage.textContent = '', 5000)
    }
}
contactForm.addEventListener('submit', sendEmail)


/*=============== SHOW SCROLL UP ===============*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== CUSTOM CURSOR ===============*/


/*=============== SCROLLREVEAL ANIMATION ===============*/




