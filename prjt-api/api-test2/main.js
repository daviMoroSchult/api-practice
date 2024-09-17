const url = 'https://whoa.onrender.com/whoas/random';
const output = document.querySelector('#output')
const output1 = document.querySelector('#output2')
const output2 = document.querySelector('#output3')


async function getSound() {
  const response = await fetch(url)

  const data = await response.json()

  console.log(data)

  output.innerHTML = JSON.stringify(data[0].movie) 
  output1.innerHTML = JSON.stringify(data[0].current_whoa_in_movie)
  output2.innerHTML = JSON.stringify(data[0].audio)
}

getSound();