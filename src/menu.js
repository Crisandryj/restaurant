function appendMenu(){
  document.querySelector('#content').innerHTML = ""
  const container = document.querySelector('#content')
  const image = document.createElement('img')
  const heading = document.createElement('h1')
  heading.textContent = "Menu"
  heading.classList.add('head')
  container.appendChild(heading)
  image.src = "/menu.png"
  container.appendChild(image)
};

export {appendMenu}