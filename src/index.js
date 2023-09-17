let addToy = false;

document.addEventListener("DOMContentLoaded", async () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  const toyCollection = document.querySelector('#toy-collection')
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });

  let data = await fetch('http://localhost:3000/toys')
  let toys = await data.json()

  toys.forEach(toy => {
    //destructure toy objecy values
    let { id, name, image, likes } = toy

    //create div element
    let div = document.createElement('div')
    div.classList.add('card')

    //create h2 element
    let header = document.createElement('h2')
    header.textContent = name

    //create img element
    let img = document.createElement('img')
    img.src = image
    img.classList.add('toy-avatar')

    //create paragraph element
    let likeCount = document.createElement('p')
    likeCount.textContent = `${likes} likes`

    //create button element
    let button = document.createElement('button')
    button.textContent = 'Like ❤️'
    button.classList.add('like-btn')
    button.id  = id
    increaseLike(button)

    //append elements to div
    div.append(header, img, likeCount, button)

    //append div to toy collection
    toyCollection.append(div)
  })
});

let form = document.querySelector('form')

form.addEventListener('submit', async (e) => {
  e.preventDefault()

  let toyName = e.target.name.value
  let image = e.target.image.value

  let data = { toyName, image }
  let body = JSON.stringify(data)
  let headers = { "content-type": "application/json"}

  let response = await fetch('http://localhost:3000/toys', { body, headers })

  if (response.status === 200){
    //append new toy to page
  } else {
    //throw new error
  }
})

function increaseLike(element){
  let id = element.id
  element.addEventListener('click', async (e) => {
    
  })
}