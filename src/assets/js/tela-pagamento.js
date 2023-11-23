// let isNumeric = function (value) {
//     return /^\d+(?:\.\d+)?$/.test(value);
// };

// String.prototype.isNumeric = function () {
//     return isNumeric(this);
// };


form = document.querySelector('.adress-info');
errorMsg = document.querySelectorAll('.error-message');

rua = document.querySelector('#rua');
cep = document.querySelector('#cep');
bairro = document.querySelector('#bairro');
cidade = document.querySelector('#cidade');
uf = document.querySelector('#uf')
numero = document.querySelector('#num');
complemento = document.querySelector('#comp');

//confirmação dos dados para submit
let comfirmarDados = {
    nomeRua: false,
    numCep: false,
    nomeBairro: false,
    nomeCidade: false,
    nomeUf: false,
}

form.addEventListener('submit', (e) => {
    alert('Atualizado com sucesso')
})

//validando os campos
rua.addEventListener('blur', (e) => {
    if (rua.value.trim() == '') {
        e.preventDefault()
        errorMsg[0].style.display = 'block';
        rua.classList.add('error');
    } else {
        errorMsg[0].style.display = 'none';
        rua.classList.remove('error');
    }
})

cep.addEventListener('blur', (e) => {
    if (cep.value.trim() == '' || cep.value.length < 8 || cep.value.length > 8) {
        e.preventDefault()
        errorMsg[1].style.display = 'block';
        cep.classList.add('error');
    } else {
        errorMsg[1].style.display = 'none';
        cep.classList.remove('error');
    }
})

bairro.addEventListener('blur', (e) => {
    if (bairro.value.trim() == '') {
        e.preventDefault()
        errorMsg[2].style.display = 'block';
        bairro.classList.add('error');
    } else {
        errorMsg[2].style.display = 'none';
        bairro.classList.remove('error');
    }
})

//numero.addEventListener('blur', (e) => {
    // if (!isNumeric(numero.value.trim()) ) {
    //     e.preventDefault()
    //     errorMsg[3].style.display = 'block';
    //     numero.classList.add('error');
    // } else {
    //     errorMsg[3].style.display = 'none';
    //     numero.classList.remove('error')
        
    // }   
//})

cidade.addEventListener('blur', (e) => {
    if (cidade.value.trim() == '') {
        e.preventDefault()
        errorMsg[4].style.display = 'block';
        cidade.classList.add('error');
    } else {
        errorMsg[4].style.display = 'none';
        cidade.classList.remove('error');
    }
})

uf.addEventListener('blur', (e) => {
    if (uf.value.trim() == '') {
        e.preventDefault()
        errorMsg[5].style.display = 'block';
        uf.classList.add('error');
    } else {
        errorMsg[5].style.display = 'none';
        uf.classList.remove('error');
    }
})
