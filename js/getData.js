import { dataUser } from './components/dataUser.js'
import { dataContent } from './components/dataContent.js'
import { error } from './components/error.js'
const box = document.querySelector('.user-data')
const $fragement = document.createDocumentFragment()

export const getDataGit = async (name) => {
  try {
    const res = await fetch(`https://api.github.com/users/${name}`)

    if (!res.ok) {
      throw new Error(`${res.status} ${res.statusText}`)
    } else {
      const data = await res.json()
      const datos = dataUser(data)
      const datosContent = dataContent(data)

      if (box.hasChildNodes()) box.innerHTML = ''

      $fragement.appendChild(datos)
      $fragement.appendChild(datosContent)

      box.appendChild($fragement)
    }
  } catch (err) {
    console.log(`error: ${err.message}`)
    box.appendChild(error(err.message))
  }
}
