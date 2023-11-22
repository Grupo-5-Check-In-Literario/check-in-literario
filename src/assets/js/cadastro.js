const ids = ['nome', 'nome-cadastro-erro', 'img-nome-erro', 'sobrenome', 'sobrenome-cadastro-erro', 'img-sobrenome-erro', 
'email-cadastro', 'email-cadastro-erro', 'img-email-erro', 'senha-cadastro', 'senha-cadastro-erro', 'img-nova-senha-erro', 
'data-nascimento', 'data-cadastro-erro', 'img-data-erro', 'cep', 'cep-cadastro-erro', 'logradouro', 'logradouro-cadastro-erro', 
'numero', 'numero-cadastro-erro', 'bairro', 'bairro-cadastro-erro', 'municipio', 'municipio-cadastro-erro', 
'UF', 'uf-cadastro-erro'];
const elementos = {}
ids.forEach(id => { elementos[id] = document.getElementById(id); });

let btnSubmitCadastro = document.querySelector('#submit-cadastro[type="submit"]');
let inputsCadastroCorretos = {
    nomeCadastro: false,
    sobrenomeCadastro: false,
    emailCadastro: false,
    senhaCadastro: false,
    dataCadastro: false,
    cepCadastro: false,
    logradouroCadastro: false,
    numeroCadastro: false,
    bairroCadastro: false,
    municipioCadastro: false,
    ufCadastro: false,
}

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

elementos["nome"].addEventListener("blur", (e) => { 
    let valor = e.target.value;
    if(valor == ""){
        elementos["nome-cadastro-erro"].innerText = 'Teste1';
        estilizarInputIncorreto(elementos.nome, elementos["nome-cadastro-erro"], elementos["img-nome-erro"]);
        inputsCadastroCorretos.nomeCadastro = true;
    }
    else{
        estilizarInputCorreto(elementos.nome, elementos["nome-cadastro-erro"], elementos["img-nome-erro"]);
        inputsCadastroCorretos.nomeCadastro = false;
    }
});

/*
elementos["sobrenome"].addEventListener()
elementos["email-cadastro"].addEventListener()
elementos["senha-cadastro"].addEventListener()
elementos["data-nascimento"].addEventListener()
elementos["cep"].addEventListener()
elementos["logradouro"].addEventListener()
elementos["numero"].addEventListener()
elementos["bairro"].addEventListener()
elementos["municipio"].addEventListener()
elementos["UF"].addEventListener()*/