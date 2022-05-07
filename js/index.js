import { getDataGit } from './getData.js'

const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const name = document.getElementById('user').value
  getDataGit(name)
})
