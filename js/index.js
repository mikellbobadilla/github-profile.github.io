import { getDataGit } from './getData.js'

const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const name = document.getElementById('user').value
  getDataGit(name)
})

//Missing Line
for (var i = 0; i < vowels.length; i++) {
  console.log(vowels[i])
}
//Each letter printed on a separate line as follows: //a //e //i //o //u }
