let email = ''
let password = ''
let error = 'Salah Password'
let success = 'Sukses'
let div = document.querySelector('#pesan')

const formLogin = document.getElementById('form-login')
formLogin.addEventListener('submit', evt => {
    evt.preventDefault()
    if (email == 'adli@gmail.com' && password == 'abc123') {
        formLogin.style = 'display : none'
        const pesanSukses = document.createElement('h1')
        div.appendChild(pesanSukses)
        pesanSukses.innerText = success
        // console.log('Halo')
    }
    else {
        const pesanError = document.createElement('h1')
        document.body.appendChild(pesanError)
        div.appendChild(pesanError)
        pesanError.innerText = error
        pesanError.style = 'color : red'
        // console.log('Hihihi')
    }
})

const inputEmail = document.querySelector('#Email');
inputEmail.addEventListener('keyup', evt => {
    email = evt.target.value;
})

const inputPassword = document.querySelector('#Password');
inputPassword.addEventListener('keyup', evt => {
    password = evt.target.value
})
