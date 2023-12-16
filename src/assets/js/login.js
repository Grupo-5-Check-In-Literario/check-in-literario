let emailLogin = document.getElementById('email-login');
let emailLoginErro = document.getElementById('email-login-erro');
let imgLoginErro = document.getElementById('img-login-erro')

let senhaLogin = document.getElementById('senha-login');
let senhaLoginErro = document.getElementById('senha-login-erro')
let imgSenhaErro = document.getElementById('img-senha-erro')

let btnSubmitLogin = document.querySelector('#submit-login[type="submit"]')
let inputsLoginCorretos = {
    emailLogin: false,
    senhaLogin: false
}
let mensagemAlerta = document.querySelector('.box-alerta');

function estilizarInputIncorreto(input, helper, imagem){
    input.classList.remove('correct')
    input.classList.add('error')
    helper.classList.add('visible')
    imagem.classList.add('visible')
}
function estilizarInputCorreto(input, helper, imagem){
    input.classList.remove('error')
    input.classList.add('correct')
    helper.classList.remove('visible')
    imagem.classList.remove('visible')
}

emailLogin.addEventListener("blur", (e) => {
    let valor = e.target.value
    if(valor.includes('@') && valor.includes('.com')){
        estilizarInputCorreto(emailLogin, emailLoginErro, imgLoginErro)
        inputsLoginCorretos.emailLogin = true
    }else{
        emailLoginErro.innerText = 'O email deve conter "@" e ".com".'
        estilizarInputIncorreto(emailLogin, emailLoginErro, imgLoginErro)
        inputsLoginCorretos.emailLogin = false
    }
})

senhaLogin.addEventListener("blur", (e) => {
    let valor = e.target.value
    if (valor == "" || valor.length < 6) {
        senhaLoginErro.innerText = 'Por favor, insira uma senha de, no mínimo, 6 caracteres.'
        estilizarInputIncorreto(senhaLogin, senhaLoginErro, imgSenhaErro)
        inputsLoginCorretos.senhaLogin = false
    } else {
        estilizarInputCorreto(senhaLogin, senhaLoginErro, imgSenhaErro)
        inputsLoginCorretos.senhaLogin = true
    }
})

btnSubmitLogin.addEventListener(("click"), (e) =>{
    if (inputsLoginCorretos.emailLogin == false) {
        e.preventDefault()
        estilizarInputIncorreto(emailLogin, emailLoginErro, imgLoginErro)
        emailLoginErro.innerText = 'O email deve conter "@" e ".com".'
        msgAlert()
        
    }else if( inputsLoginCorretos.senhaLogin == false){
        e.preventDefault()
        estilizarInputIncorreto(senhaLogin, senhaLoginErro, imgSenhaErro)
        senhaLoginErro.innerText = 'Por favor, insira uma senha de, no mínimo, 6 caracteres.'
        msgAlert()
    }
})

function msgAlert(){
    mensagemAlerta.classList.toggle('escondido')
  }
  let linkOk = document.querySelector('.ok')
  linkOk.addEventListener('click', (e) =>{
    e.preventDefault()
    msgAlert()
  })