// let isNumeric = function (value) {
//     return /^\d+(?:\.\d+)?$/.test(value);
// };

// String.prototype.isNumeric = function () {
//     return isNumeric(this);
// };


form = document.querySelector('.adress-info');
errorMsg = document.querySelectorAll('.error-message');

logradouro = document.querySelector('#rua');
userCep = document.querySelector('#cep');
bairro = document.querySelector('#bairro');
cidade = document.querySelector('#cidade');
uf = document.querySelector('#uf')
numero = document.querySelector('#num');
complemento = document.querySelector('#comp');

//confirmação de todos os dados para submit
let confirmarDados = {
    nomeLogradouro: false,
    numCep: false,
    nomeBairro: false,
    nomeCidade: false,
    nomeUf: false,
}

//validando os campos
logradouro.addEventListener('blur', (e) => {
    if (logradouro.value.trim() == '') {
        e.preventDefault()
        errorMsg[0].style.display = 'block';
        logradouro.classList.add('error');
        confirmarDados.nomeLogradouro = false;
    } else {
        errorMsg[0].style.display = 'none';
        logradouro.classList.remove('error');
        confirmarDados.nomeLogradouro = true;
    }
})

cep.addEventListener('blur', (e) => {
    if (userCep.value.length === 8) {
         getCep(cep.value);
         errorMsg[1].style.display = 'none';
         userCep.classList.remove('error');
         confirmarDados.numCep = true;
         console.log(userCep.value)
     } else {
         e.preventDefault()
         errorMsg[1].style.display = 'block';
         userCep.classList.add('error');
         confirmarDados.numCep = false;
     }
 })

bairro.addEventListener('blur', (e) => {
    if (bairro.value.trim() == '') {
        e.preventDefault()
        errorMsg[2].style.display = 'block';
        bairro.classList.add('error');
        confirmarDados.nomeBairro = false;
    } else {
        errorMsg[2].style.display = 'none';
        bairro.classList.remove('error');
        confirmarDados.nomeBairro = true;
    }
})

cidade.addEventListener('blur', (e) => {
    if (cidade.value.trim() == '') {
        e.preventDefault()
        errorMsg[4].style.display = 'block';
        cidade.classList.add('error');
        confirmarDados.nomeCidade = false;
    } else {
        errorMsg[4].style.display = 'none';
        cidade.classList.remove('error');
        confirmarDados.nomeCidade = true;
    }
})

uf.addEventListener('blur', (e) => {
    if (uf.value.trim() == '') {
        e.preventDefault()
        errorMsg[5].style.display = 'block';
        uf.classList.add('error');
        confirmarDados.nomeUf = false;
    } else {
        errorMsg[5].style.display = 'none';
        uf.classList.remove('error');
        confirmarDados.nomeUf = true;
    }
})

//enviando o formulario caso todos os campos precisem ser digitados a mão
form.addEventListener('submit', (e) => {
    if(confirmarDados.nomeLogradouro == true && confirmarDados.numCep == true && confirmarDados.nomeBairro == true && confirmarDados.nomeCidade == true && confirmarDados.nomeUf == true){
        alert('Atualizado com sucesso');
    } else {
        e.preventDefault()
        alert('Faltam informações a serem preenchidas!');
    }
})

//verificador de cep
const getCep = async (cep) => {
    console.log(cep)
    const apiUrl = `https://viacep.com.br/ws/${cep}/json/`;
    const response = await fetch(apiUrl);
    const data = await response.json();
   
    //mostrar erro e resetar form
    if(data.erro === true){
        // form.reset();
        alert('Cep inválido, tente novamente.')
        return;
    }

    rua.value = data.logradouro;
    confirmarDados.nomeLogradouro = true;

    bairro.value = data.bairro;
    confirmarDados.nomeBairro = true;

    cidade.value = data.localidade;
    confirmarDados.nomeCidade= true;

    uf.value = data.uf;
    confirmarDados.nomeUf = true;
}
