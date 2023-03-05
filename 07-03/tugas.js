const email = document.getElementById('email');
const password = document.getElementById('password')
const form = document.getElementById('form')
const msgElement = document.getElementById('pesan')

form.addEventListener('submit', (e) => {
    let messages = []
    if(email.value === '' || email.value == null) {
        messages.push('Email is required')
    }

    if (password.value.length <= 6) {
        messages.push('Password must be longer than 6 characters')
    }

    if (password.value.length >= 20) {
        messages.push('Password must be less than 20 characters')
    }

    if (password.value === '123456' && password.value === 123456) {
        messages.push('Password is invalid')
    }

    if (email.value === 'adli@gmail.com' && password.value === 'abc1234') {
        form.style = 'display : none'
        const successMsg = messages.push('Login Success')
        successMsg.style = 'color: black'
    }

    if (email.value !== 'adli@gmail.com' && password.value !== 'abc1234') {
        messages.push('Failed')
        msgElement.style = 'color: red'
    }

    if (messages.length > 0) {
        e.preventDefault()
        msgElement.innerText = messages.join(', ')
      }
})