const button = document.getElementById('button')
const input = document.getElementById('input')
const $fragment = document.createDocumentFragment()
const $headerName = document.querySelector('.header p')

const $response = document.getElementById('response')

button.addEventListener('click', () => {
  const data = input.value
  if (data === '') {
    alert('Please enter a valid name')
    return
  } else {
    if (button.dataset.haspress === 'false') {
      alert('Please press the reset button')
      return
    } else {
      fetch(`https://api.github.com/users/${data}`)
        .then((res) => (res.ok ? res.json() : Promise.reject(res)))
        .then((data) => {
          console.log(data)
          button.dataset.haspress = false
          $headerName.textContent = data.name
          const user = userData(data)
          $fragment.appendChild(user)
          const info = infoData(data)
          $fragment.appendChild(info)
          $response.appendChild($fragment)
        })
        .catch((err) => console.log(err))
    }
  }
})
//components
function userData({ login, avatar_url }) {
  const $div = document.createElement('div')
  const $h2 = document.createElement('h2')
  const $img = document.createElement('img')

  $div.classList.add('user-data')
  $h2.textContent = login
  $img.setAttribute('src', avatar_url)
  $img.setAttribute('alt', 'avatar')
  $div.appendChild($h2)
  $div.appendChild($img)
  return $div
}

function infoData({ name, email, public_repos, location, bio }) {
  const $div = document.createElement('div')
  const $p = document.createElement('p')
  const $p2 = document.createElement('p')
  const $p3 = document.createElement('p')
  const $p4 = document.createElement('p')
  const $p5 = document.createElement('p')
  $div.classList.add('user-data-info')
  $p.textContent = `Name: ${name}`
  $p2.textContent = `Email: ${email || 'No email'}`
  $p3.textContent = `Repostiory: ${public_repos}`
  $p4.textContent = `Location: ${location || 'No location'}`
  $p5.textContent = `Bio: ${bio || 'No bio'}`
  $div.appendChild($p5)
  $div.appendChild($p)
  $div.appendChild($p2)
  $div.appendChild($p3)
  $div.appendChild($p4)
  return $div
}

// async function getUserData() {
//   try {
//     const res = await fetch('https://api.github.com/users/NOA-eng')
//     const data = await res.json()

//     if (!res.ok)
//       throw {
//         status: res.status,
//         statusText: res.statusText,
//       }

//     data.forEach((el) => {
//       const dataUser = userData(el)
//       console.log(dataUser)
//       const dataInfo = infoData(el)
//       console.log(dataInfo)
//       $fragment.appendChild(dataUser)
//       $fragment.appendChild(dataInfo)
//     })
//     $response.appendChild($fragment)
//   } catch (err) {}
// }
// // console.log($fragment)

// getUserData()
