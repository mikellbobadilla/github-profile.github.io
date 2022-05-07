export function error(err) {
  const $error = document.createElement('div')
  const $p = document.createElement('p')
  const $p2 = document.createElement('p')

  $error.setAttribute('class', 'error')
  $p.textContent = `Error: ${err} Usuario no Econtrado`
  $p2.textContent = 'Intente con otro nombre'
  $error.appendChild($p)
  $error.appendChild($p2)
  return $error
}
