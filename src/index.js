import {appendHome} from './home'

const container = document.querySelector('#content')
const button = document.createElement('button')
button.textContent = "Main"
container.appendChild(button)

appendHome()


