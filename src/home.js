
function appendHome(){
  //clear html
  document.querySelector('#content').innerHTML = ""
  
  // create container
  const container = document.querySelector('#content')

  //add heading and image to container
  const image = document.createElement('img')
  const heading = document.createElement('h1')
  heading.textContent = "Le Bernardin"
  container.appendChild(heading)

  //select image from files and src
  image.src = "/rest.jpeg"
  container.appendChild(image)
};





export {appendHome}