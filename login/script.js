let eye = document.querySelectorAll('.eye')
let senha = document.querySelector("#senha")

function togglePassword() {
    eye.forEach((eye) => {
        eye.classList.toggle('hide')
    })

    // escondendo ou/e mostrando a senha:
    const type = senha.getAttribute('type') == 'password' ? 'text' : 'password'

    senha.setAttribute('type', type)
    // if(senha.getAttribute('type') == 'password'){
    //     senha.setAttribute('type', 'text')
    // }else{
    //     senha.setAttribute('type', 'password')
    // }
}