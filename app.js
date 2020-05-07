const button = document.querySelector("#generate-btn");
const quote = document.querySelector("#quote");
const author = document.querySelector(".author");

button.addEventListener('click', randomQuote);

fetch('https://api.quotable.io/random')
  .then(response => response.json())
  .then(data => {
    console.log(`${data.content} —${data.author}`)
  })

async function randomQuote() {
    const response = await fetch('https://api.quotable.io/random')
    const data = await response.json()
    quote.innerText = `${data.content}`
    author.innerText = `${data.author}`
}