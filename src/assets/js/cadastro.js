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
};

/* ------  FUNÇÕES  ------ */

function estilizarInputIncorreto(input, helper, imagem){
    input.classList.remove('correct');
    input.classList.add('error');
    helper.classList.add('visible');
    if(imagem){
        imagem.classList.add('visible');
    }
};
function estilizarInputCorreto(input, helper, imagem){
    input.classList.remove('error');
    input.classList.add('correct');
    helper.classList.remove('visible');
    if(imagem){
        imagem.classList.remove('visible');
    }
};

function limparCampos() {
    elementos["municipio"].value = "";
    elementos["municipio"].classList.remove('correct')

    elementos["logradouro"].value = "";
    elementos["logradouro"].classList.remove('correct')

    elementos["uf"].value = "";
    elementos["uf"].classList.remove('correct')

    elementos["bairro"].value = "";
    elementos["bairro"].classList.remove('correct')
}

const getCep = async (cep) => {
    const apiUrl = `https://viacep.com.br/ws/${cep}/json/`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data)
   
    if(data.erro === true){
        console.log('erro')
        elementos["cep-cadastro-erro"].innerText = 'Cep inválido.'
        estilizarInputIncorreto(elementos["cep"], elementos["cep-cadastro-erro"])
        limparCampos()
        return;
    }
    estilizarInputCorreto(elementos["cep"], elementos["cep-cadastro-erro"])
    inputsCadastroCorretos.cepCadastro = true;
    

    elementos["logradouro"].value = data.logradouro;
    inputsCadastroCorretos.logradouroCadastro = true;
    estilizarInputCorreto(elementos["logradouro"], elementos["logradouro-cadastro-erro"])

    elementos["bairro"].value = data.bairro;
    inputsCadastroCorretos.bairroCadastro = true;
    estilizarInputCorreto(elementos["bairro"], elementos["bairro-cadastro-erro"])

    elementos["municipio"].value = data.localidade;
    inputsCadastroCorretos.municipioCadastro = true;
    estilizarInputCorreto(elementos["municipio"], elementos["municipio-cadastro-erro"])

    elementos["uf"].value = data.uf;
    inputsCadastroCorretos.ufCadastro = true;
    estilizarInputCorreto(elementos["uf"], elementos["uf-cadastro-erro"])
}

/* ------  EVENTOS  ------ */

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
        elementos["sobrenome-cadastro-erro"].innerText = 'Insira seu sobrenome.';
        estilizarInputIncorreto(elementos.sobrenome, elementos["sobrenome-cadastro-erro"], elementos["img-sobrenome-erro"]);
        inputsCadastroCorretos.sobrenomeCadastro = false;
    }
    else{
        estilizarInputCorreto(elementos.sobrenome, elementos["sobrenome-cadastro-erro"], elementos["img-sobrenome-erro"]);
        inputsCadastroCorretos.sobrenomeCadastro = true;
    }
});
elementos["email-cadastro"].addEventListener("blur", (e) => {
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
        inputsCadastroCorretos.senhaCadastro = false;
    }
    else{
        estilizarInputCorreto(elementos["senha-cadastro"], elementos["senha-cadastro-erro"], elementos["img-nova-senha-erro"]);
        inputsCadastroCorretos.senhaCadastro = true;
    }
});

elementos["data-nascimento"].addEventListener("change", (e) => {
    let valor = e.target.value;

    let data = new Date(valor);
    let data_atual = new Date();
    let ano_atual = data_atual.getFullYear();
    let ano = data.getFullYear();

    if(valor=="" || ano > ano_atual || ano < ano_atual-150){
        elementos["data-cadastro-erro"].innerText = 'Digite a data corretamente.'
        estilizarInputIncorreto(elementos["data-nascimento"], elementos["data-cadastro-erro"])
        inputsLoginCorretos.dataCadastro = false;
    }
    else{
        estilizarInputCorreto(elementos["data-nascimento"], elementos["data-cadastro-erro"])
        inputsCadastroCorretos.dataCadastro = true;
    }
})

elementos["cep"].addEventListener('keyup', () =>{
    let valor = elementos["cep"].value.replace(/[^0-9]/g, "").replace(/^([\d]{5})([\d]{3})$/, "$1-$2");
    elementos["cep"].value = valor;
})

elementos["cep"].addEventListener("blur", (e) => {
    let valor = e.target.value;
    if(valor.length !== 9){
        elementos["cep-cadastro-erro"].innerText = 'Cep inválido.'
        estilizarInputIncorreto(elementos["cep"], elementos["cep-cadastro-erro"])
        inputsLoginCorretos.cepCadastro = false;
        limparCampos()
    }
    else{
        getCep(valor)
    }
});

elementos["logradouro"].addEventListener("blur", (e) => {
    let valor = e.target.value;
    if(valor==""){
        elementos["logradouro-cadastro-erro"].innerText = 'Insira seu logradouro'
        estilizarInputIncorreto(elementos["logradouro"], elementos["logradouro-cadastro-erro"])
        inputsLoginCorretos.logradouroCadastro = false;
    }
    else{
        estilizarInputCorreto(elementos["logradouro"], elementos["logradouro-cadastro-erro"])
        inputsCadastroCorretos.logradouroCadastro = true;
    }
});

elementos["numero"].addEventListener("change", (e) => {
    let valor = e.target.value;
    if(valor==""){
        elementos["numero-cadastro-erro"].innerText = 'Por favor, insira u'
        estilizarInputIncorreto(elementos["numero"], elementos["numero-cadastro-erro"])
        inputsLoginCorretos.numeroCadastro = false;
    }
    else{
        estilizarInputCorreto(elementos["numero"], elementos["numero-cadastro-erro"])
        inputsCadastroCorretos.numeroCadastro = true;
    }
});

elementos["bairro"].addEventListener("blur", (e) => {
    let valor = e.target.value;
    if(valor==""){
        elementos["bairro-cadastro-erro"].innerText = 'Insira seu bairro.'
        estilizarInputIncorreto(elementos["bairro"], elementos["bairro-cadastro-erro"])
        inputsLoginCorretos.bairroCadastro = false;
    }
    else{
        estilizarInputCorreto(elementos["bairro"], elementos["bairro-cadastro-erro"])
        inputsCadastroCorretos.bairroCadastro = true;
    }
});

elementos["municipio"].addEventListener("blur", (e) => {
    let valor = e.target.value;
    if(valor==""){
        elementos["municipio-cadastro-erro"].innerText = 'Insira seu município.'
        estilizarInputIncorreto(elementos["municipio"], elementos["municipio-cadastro-erro"])
        inputsLoginCorretos.municipioCadastro = false;
    }
    else{
        estilizarInputCorreto(elementos["municipio"], elementos["municipio-cadastro-erro"])
        inputsCadastroCorretos.municipioCadastro = true;
    }
});

elementos["uf"].addEventListener("blur", (e) => {
    let valor = e.target.value;
    if(valor==""){
        elementos["uf-cadastro-erro"].innerText = ''
        estilizarInputIncorreto(elementos["uf"], elementos["uf-cadastro-erro"])
        inputsLoginCorretos.ufCadastro = false;
    }
    else{
        estilizarInputCorreto(elementos["uf"], elementos["uf-cadastro-erro"])
        inputsCadastroCorretos.ufCadastro = true;
    }
});

btnSubmitCadastro.addEventListener("click", (e) => {
    let cadastroCorreto = true;
    Object.keys(inputsCadastroCorretos).forEach(chave => {
        if(inputsCadastroCorretos[chave] == false){
            e.preventDefault();
            console.log("erro ", chave);
            cadastroCorreto = false;
        }
    });
    cadastroCorreto == true ? alert("Cadastro realizado com sucesso!")
     : msgAlert();;
});