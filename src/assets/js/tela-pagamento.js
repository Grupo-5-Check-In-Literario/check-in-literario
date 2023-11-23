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
    numeroCasa: false
}

form.addEventListener('submit', (e) => {
    alert('Atualizado com sucesso')
})


//pegando valor dos inputs
rua.addEventListener('change',(e) => {
    console.log(e.target.value) 
});

cep.addEventListener('change',(e) => {
    console.log(e.target.value) 
});

cidade.addEventListener('change',(e) => {
    console.log(e.target.value) 
});

uf.addEventListener('change',(e) => {
    console.log(e.target.value) 
});

numero.addEventListener('change',(e) => {
    console.log(e.target.value) 
});

complemento.addEventListener('change',(e) => {
    console.log(e.target.value) 
});


//validando os campos
rua.addEventListener('blur', (e) => {

    console.log(rua.value, 'a')
    if(rua.value.trim() == ''){
        e.preventDefault()
        errorMsg[0].style.display = 'block';
        rua.classList.add('red-input');
    } else{
        errorMsg[0].style.display = 'none';
        rua.classList.remove('red-input')
    }
})

cep.addEventListener('blur', (e) => {
    if(cep.value.trim() == '' || cep.value.length < 8 || cep.value.length > 8){
        e.preventDefault()
        errorMsg[1].style.display = 'block';
        cep.classList.add('red-input');
    } else{
        errorMsg[1].style.display = 'none';
        cep.classList.remove('red-input')
    }
})

bairro.addEventListener('blur', (e) => {
    if(bairro.value.trim() == ''){
        e.preventDefault()
        errorMsg[2].style.display = 'block';
        bairro.classList.add('red-input');
    } else{
        errorMsg[2].style.display = 'none';
        bairro.classList.remove('red-input')
    }
})

numero.addEventListener('blur', (e) => {
    if(numero.value.trim() == ''){
        e.preventDefault()
        errorMsg[3].style.display = 'block';
        numero.classList.add('red-input');
    } else{
        errorMsg[3].style.display = 'none';
        numero.classList.remove('red-input')
    }
})

cidade.addEventListener('blur', (e) => {
    if(cidade.value.trim() == ''){
        e.preventDefault()
        errorMsg[4].style.display = 'block';
        cidade.classList.add('red-input');
    } else{
        errorMsg[4].style.display = 'none';
        cidade.classList.remove('red-input')
    }
})

uf.addEventListener('blur', (e) => {
    if(uf.value.trim() == ''){
        e.preventDefault()
        errorMsg[5].style.display = 'block';
        uf.classList.add('red-input');
    } else{
        errorMsg[5].style.display = 'none';
        uf.classList.remove('red-input')
    }
})
