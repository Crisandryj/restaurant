import {appendHome} from './home'
import {appendMenu} from './menu'

// create nav bar for nav buttons
const nav = document.querySelector('nav')

//create home, menu and contact nav buttons
const homeButton = document.createElement('button')
const menuButton = document.createElement('button')
const contactsButton = document.createElement('button')
homeButton.textContent = "Home"
menuButton.textContent = "Menu"
contactsButton.textContent = "Contacts"

//append buttons to nav element
nav.appendChild(homeButton)
nav.appendChild(menuButton)
nav.appendChild(contactsButton)

appendHome()
// Run modules for other js files on click
homeButton.addEventListener('click', appendHome)
menuButton.addEventListener('click', appendMenu)

