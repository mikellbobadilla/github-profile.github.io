import { templateP } from './dataContent.js'

export function dataRepo({ name, html_url, language }) {
  const $userDataRepo = document.createElement('div')
  $userDataRepo.setAttribute('class', 'user-data-repo')
  const $a = document.createElement('a')
  $a.setAttribute('href', `${html_url}`)
  $a.setAttribute('target', '_blank')
  $a.textContent = 'click Aqui'

  $userDataRepo.setAttribute('class', 'user-data-repo')
  const $h3 = document.createElement('h3')
  $userDataRepo.appendChild($h3)
  $userDataRepo.appendChild(templateP('Nonbre:', name))
  $userDataRepo.appendChild($a)
  $userDataRepo.appendChild(templateP('Lenguaje:', language))

  return $userDataRepo
}
