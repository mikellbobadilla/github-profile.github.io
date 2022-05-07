export function dataContent({ name, bio, location, blog, public_repos }) {
  const userDataContent = document.createElement('div')
  userDataContent.setAttribute('class', 'user-data-content')

  userDataContent.appendChild(templateP('Nombre: ', name))
  userDataContent.appendChild(templateP('Bio: ', bio))
  userDataContent.appendChild(templateP('Ubicación:', location))
  userDataContent.appendChild(templateP('Blog: ', blog))
  userDataContent.appendChild(templateP('Cant. Repositorios: ', public_repos))
  return userDataContent
}

export function templateP(title, value) {
  const $p = document.createElement('p')
  const $strong = document.createElement('strong')
  $strong.textContent = title
  $p.appendChild($strong)
  $p.appendChild(document.createTextNode(value))
  return $p
}
