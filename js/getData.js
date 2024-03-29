import { dataUser } from './components/dataUser.js'
import { dataContent } from './components/dataContent.js'
import { dataRepo } from './components/dataRepo.js'

import { error } from './components/error.js'
const box = document.querySelector('.user-data')
const $fragement = document.createDocumentFragment()

export const getDataGit = async (name) => {
  if (box.hasChildNodes()) box.innerHTML = ''
  try {
    const res = await fetch(`https://api.github.com/users/${name}`)
    const resData = await fetch(`https://api.github.com/users/${name}/repos`)
    if (!res.ok) {
      throw new Error(`${res.status} ${res.statusText}`)
    } else {
      const data = await res.json()
      const datos = dataUser(data)
      const datosContent = dataContent(data)

      $fragement.appendChild(datos)
      $fragement.appendChild(datosContent)
      // experimental

      const resDataJson = await resData.json()

      // ----------------------------------------------

      // experimental
      resDataJson.forEach((repo) => {
        const datosRepo = dataRepo(repo)
        $fragement.appendChild(datosRepo)
      })
      // ----------------------------

      box.appendChild($fragement)
    }
  } catch (err) {
    console.log(`error: ${err.message}`)
    box.appendChild(error(err.message))
  }
}
