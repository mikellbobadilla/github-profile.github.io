import { getDataGit } from './getData.js'

const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const name = document.getElementById('user').value
  getDataGit(name)
})

const template = `            <!-- <div class="user-data-box">
              <p>Datos de Usuario</p>
              <div class="user">
                <a href="#">mikellbobadilla</a>
                <img src="./img/interior2.jpg" alt="avatar" width="70px">
              </div>
            </div> -->
            <!-- <div class="user-data-content">
              <p><strong>Nombre:</strong> Sting</p>
              <p><strong>Bio:</strong> Frontend Developer</p>
              <p><strong>Ubicación:</strong> Buenos Aires - Argentina</p>
              <p><strong>Blog:</strong> link</p>
              <p><strong>Cant. Repositorios:</strong> 13</p>
            </div> -->
            <!-- <div class="user-data-repo">
              <h3>Cont. Respositorio: </h3>
              <p><strong>Nombre:</strong> Cajero Automatico</p>
              <p><strong>Link Repo:</strong> click aqui</p>
              <p><strong>Lenguaje:</strong> Javascript</p>
            </div> -->`
