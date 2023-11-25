const ElementsIds = ['nome', 'nome-cadastro-erro', 'img-nome-erro', 'sobrenome', 'sobrenome-cadastro-erro', 'img-sobrenome-erro', 
'email-cadastro', 'email-cadastro-erro', 'img-email-erro', 'senha-cadastro', 'senha-cadastro-erro', 'img-nova-senha-erro', 
'data-nascimento', 'data-cadastro-erro', 'img-data-erro', 'cep', 'cep-cadastro-erro', 'logradouro', 'logradouro-cadastro-erro', 
'numero', 'numero-cadastro-erro', 'bairro', 'bairro-cadastro-erro', 'municipio', 'municipio-cadastro-erro', 
'uf', 'uf-cadastro-erro'];
const elementos = {}
ElementsIds.forEach(id => { elementos[id] = document.getElementById(id); });

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
    if (imagem) {
        imagem.classList.add('visible');
    }
}
function estilizarInputCorreto(input, helper, imagem){
    input.classList.remove('error')
    input.classList.add('correct')
    helper.classList.remove('visible')
    if (imagem) {
        imagem.classList.add('visible');
    }
}

elementos["nome"].addEventListener("blur", (e) => { 
    let valor = e.target.value;
    if(valor == ""){
        elementos["nome-cadastro-erro"].innerText = 'Por favor, insira seu nome.';
        estilizarInputIncorreto(elementos.nome, elementos["nome-cadastro-erro"], elementos["img-nome-erro"]);
        inputsCadastroCorretos.nomeCadastro = false;
    }
    else{
        estilizarInputCorreto(elementos.nome, elementos["nome-cadastro-erro"], elementos["img-nome-erro"]);
        inputsCadastroCorretos.nomeCadastro = true;
    }
});

elementos["sobrenome"].addEventListener("blur", (e) => {
    let valor = e.target.value;
    if(valor == ""){
        elementos["sobrenome-cadastro-erro"].innerText = 'Por favor, insira seu sobrenome.';
        estilizarInputIncorreto(elementos.sobrenome, elementos["sobrenome-cadastro-erro"], elementos["img-sobrenome-erro"]);
        inputsCadastroCorretos.sobrenomeCadastro = false;
    }
    else{
        estilizarInputCorreto(elementos.sobrenome, elementos["sobrenome-cadastro-erro"], elementos["img-sobrenome-erro"]);
        inputsCadastroCorretos.sobrenomeCadastro = true;
    }
});
elementos["email-cadastro"].addEventListener("change", (e) => {
    let valor = e.target.value;
    if(valor.includes("@") && valor.includes(".com")){
        estilizarInputCorreto(elementos["email-cadastro"], elementos["email-cadastro-erro"], elementos["img-email-erro"]);
        inputsCadastroCorretos.emailCadastro = true;
    }
    else{
        elementos["email-cadastro-erro"].innerText = 'O email deve conter "@" e ".com".';
        estilizarInputIncorreto(elementos["email-cadastro"], elementos["email-cadastro-erro"], elementos["img-email-erro"]);
        inputsCadastroCorretos.emailCadastro = false;
    }
});

elementos["senha-cadastro"].addEventListener("blur", (e) => {
    let valor = e.target.value;
    if(valor == "" || valor.lenght > 6){
        elementos["senha-cadastro-erro"].innerText = 'Por favor, insira uma senha de, no mínimo, 6 caracteres.';
        estilizarInputIncorreto(elementos["senha-cadastro"], elementos["senha-cadastro-erro"], elementos["img-nova-senha-erro"]);
        inputsCadastroCorretos.sobrenomeCadastro = false;
    }
    else{
        estilizarInputCorreto(elementos["senha-cadastro"], elementos["senha-cadastro-erro"], elementos["img-nova-senha-erro"]);
        inputsCadastroCorretos.sobrenomeCadastro = true;
    }
});

elementos["data-nascimento"].addEventListener("change", (e) => {
    let valor = e.target.value;

    let data = new Date(valor);
    let data_atual = new Date();
    let ano_atual = data_atual.getFullYear();
    let ano = data.getFullYear();

    if(valor=="" || ano > ano_atual){
        elementos["data-cadastro-erro"].innerText = 'Digite a data corretamente.'
        estilizarInputIncorreto(elementos["data-nascimento"], elementos["data-cadastro-erro"])
        inputsLoginCorretos.dataCadastro = false;
    }
    else{
        estilizarInputCorreto(elementos["data-nascimento"], elementos["data-cadastro-erro"])
        inputsCadastroCorretos.dataCadastro = true;
    }
})

elementos["cep"].addEventListener("change", (e) => {
    let valor = e.target.value;
    let tamanho_cep = valor.lenght;
    console.log(tamanho_cep);
    if(valor.lenght >= 8){
        console.log("TO AQUI");
        getCep(valor);
        estilizarInputCorreto(elementos["cep"], elementos["cep-cadastro-erro"])
        inputsCadastroCorretos.cepCadastro = true;
    }
    else{
        elementos["cep-cadastro-erro"].innerText = 'Teste 6'
        estilizarInputIncorreto(elementos["cep"], elementos["cep-cadastro-erro"])
        inputsLoginCorretos.cepCadastro = false;
    }
})

elementos["logradouro"].addEventListener("blur", (e) => {
    let valor = e.target.value;
    if(valor==""){
        elementos["logradouro-cadastro-erro"].innerText = 'Teste 7'
        estilizarInputIncorreto(elementos["logradouro"], elementos["logradouro-cadastro-erro"])
        inputsLoginCorretos.logradouroCadastro = false;
    }
    else{
        estilizarInputCorreto(elementos["logradouro"], elementos["logradouro-cadastro-erro"])
        inputsCadastroCorretos.logradouroCadastro = true;
    }
})

elementos["numero"].addEventListener("blur", (e) => {
    let valor = e.target.value;
    if(valor==""){
        elementos["numero-cadastro-erro"].innerText = 'Teste 8'
        estilizarInputIncorreto(elementos["numero"], elementos["numero-cadastro-erro"])
        inputsLoginCorretos.numeroCadastro = false;
    }
    else{
        estilizarInputCorreto(elementos["numero"], elementos["numero-cadastro-erro"])
        inputsCadastroCorretos.numeroCadastro = true;
    }
})

elementos["bairro"].addEventListener("blur", (e) => {
    let valor = e.target.value;
    if(valor==""){
        elementos["bairro-cadastro-erro"].innerText = 'Teste 9'
        estilizarInputIncorreto(elementos["bairro"], elementos["bairro-cadastro-erro"])
        inputsLoginCorretos.bairroCadastro = false;
    }
    else{
        estilizarInputCorreto(elementos["bairro"], elementos["bairro-cadastro-erro"])
        inputsCadastroCorretos.bairroCadastro = true;
    }
})

elementos["municipio"].addEventListener("blur", (e) => {
    let valor = e.target.value;
    if(valor==""){
        elementos["municipio-cadastro-erro"].innerText = 'Teste 10'
        estilizarInputIncorreto(elementos["municipio"], elementos["municipio-cadastro-erro"])
        inputsLoginCorretos.municipioCadastro = false;
    }
    else{
        estilizarInputCorreto(elementos["municipio"], elementos["municipio-cadastro-erro"])
        inputsCadastroCorretos.municipioCadastro = true;
    }
})

elementos["uf"].addEventListener("blur", (e) => {
    let valor = e.target.value;
    if(valor==""){
        elementos["uf-cadastro-erro"].innerText = 'Teste 11'
        estilizarInputIncorreto(elementos["uf"], elementos["uf-cadastro-erro"])
        inputsLoginCorretos.ufCadastro = false;
    }
    else{
        estilizarInputCorreto(elementos["uf"], elementos["uf-cadastro-erro"])
        inputsCadastroCorretos.ufCadastro = true;
    }
})

const getCep = async (cep) => {
    console.log(cep)
    const apiUrl = `https://viacep.com.br/ws/${cep}/json/`;
    const response = await fetch(apiUrl);
    const data = await response.json();
   
    if(data.erro === true){
        alert('Cep inválido, tente novamente.')
        return;
    }
    console.log(data.logradouro);
    elementos["logradouro"].value = data.logradouro;
    inputsCadastroCorretos.logradouroCadastro = true;
    elementos["bairro"].value = data.bairro;
    inputsCadastroCorretos.bairroCadastro = true;

    elementos["municipio"].value = data.localidade;
    inputsCadastroCorretos.municipioCadastro = true;

    elementos["uf"].value = data.uf;
    inputsCadastroCorretos.ufCadastro = true;
}