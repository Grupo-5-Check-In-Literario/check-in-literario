let usuarioEscondido = document.querySelectorAll('.user-hidden')
let botaoSurgirEsconder = document.querySelector('.more-info')

function esconderAparecer() {
    usuarioEscondido.forEach((usuario) =>{
        usuario.classList.toggle('hidden')
    })
}

botaoSurgirEsconder.addEventListener('click', () =>{
    if(botaoSurgirEsconder.innerText == "MAIS"){
        console.log('funcionou')
        
        esconderAparecer()
        botaoSurgirEsconder.innerText = "MENOS"
    }else{
        esconderAparecer()
        botaoSurgirEsconder.innerText = "MAIS"
    }
})