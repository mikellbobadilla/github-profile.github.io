export function dataUser({ login, avatar_url, html_url }) {
  const $userDataBox = document.createElement('div')
  const $p = document.createElement('p')
  const $user = document.createElement('div')
  const $a = document.createElement('a')
  const $img = document.createElement('img')

  $img.setAttribute('src', avatar_url)
  $img.setAttribute('alt', 'avatar')
  $a.setAttribute('href', `${html_url}`)
  $a.setAttribute('target', '_blank')
  $userDataBox.setAttribute('class', 'user-data-box')
  $user.setAttribute('class', 'user')

  $p.textContent = 'Datos de Usuario'
  $a.textContent = login
  $userDataBox.appendChild($p)
  $userDataBox.appendChild($user)
  $user.appendChild($a)
  $user.appendChild($img)
  return $userDataBox
}
