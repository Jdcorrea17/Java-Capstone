const registerForm = document.getElementById('register-form')
const registerUsername = document.getElementById('form-username')
const registerPassword = document.getElementById('form-password')

const headers = {
    'Content-Type':'application/json'
}

const baseUrl = 'http://localhost:8080'


const handleSubmit = async (e) =>{
    e.preventDefault()
    alert("Hello")
    let bodyObj = {
        username: registerUsername.value,
        password: registerPassword.value
    }

    const response = await fetch(`${baseUrl}/register.js`, {
        method: "POST",
        body: JSON.stringify(bodyObj),
        headers: headers
    })
        .catch(err => console.error(err.message))

    const responseArr = await response.json()

    if (response.status === 200){
        window.location.replace(responseArr[0])
    }
}

registerForm.addEventListener("submit", handleSubmit)

