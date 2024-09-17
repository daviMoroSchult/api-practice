const url = '';
const output = document.querySelector('#output')
const output1 = document.querySelector('#output2')
const output2 = document.querySelector('#output3')


async function getData() {
  const response = await fetch(url)

  const data = await response.json()

  console.log(data)

}

getData();

