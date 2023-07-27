
function appendHome(){
  document.querySelector('#content').innerHTML = ""
  const container = document.querySelector('#content')
  const image = document.createElement('img')
  const heading = document.createElement('h1')
  heading.textContent = "Restaurant"
  container.appendChild(heading)
  image.src = "/rest.jpeg"
  container.appendChild(image)
};





export {appendHome}