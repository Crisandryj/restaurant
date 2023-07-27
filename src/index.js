import {appendHome} from './home'
import {appendMenu} from './menu'

// document.querySelector('#content').innerHTML = ""

const container = document.querySelector('#content')
const homeButton = document.createElement('button')
const menuButton = document.createElement('button')
const contactsButton = document.createElement('button')
homeButton.textContent = "Home"
menuButton.textContent = "Menu"
contactsButton.textContent = "Contacts"
container.appendChild(homeButton)
container.appendChild(menuButton)
container.appendChild(contactsButton)

homeButton.addEventListener('click', appendHome)
menuButton.addEventListener('click', appendMenu)

