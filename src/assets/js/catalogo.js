import { bookApi } from "./navbar-component.js";

//Atualizando os livros pela categoria
const listaDeCategorias = [ "AUTO AJUDA", "CIÊNCIAS BIOLÓGICAS", "CIÊNCIAS EXATAS", "CIÊNCIAS SOCIAIS", "DIDÁTICOS", "ENGENHARIA", "EDUCAÇÃO", "ESOTERISMO", "LITERATURA NACIONAL", "LITERATURA INTERNACIONAL", "QUADRINHOS", "SEXUALIDADE", "SAUDE E BEM ESTAR", "TECNOLOGIA", "VIAGEM", "BIOGRAFIA" ]

const listaNaoOrdenada = document.querySelector('.catalog-menu');
let tituloCategoria = document.getElementById('titulo-categoria');



for(let i = 0; i < listaDeCategorias.length; i++) {
    const categoria = document.createElement('li');
    
    categoria.innerText = listaDeCategorias[i];
    listaNaoOrdenada.appendChild(categoria);
    
    categoria.addEventListener('click', () => {
        tituloCategoria.innerText = listaDeCategorias[i];
        bookApi(listaDeCategorias[i]);
    })
};

// função pra receber os parametros de busca das outras telas
function receivedParams() {  
    var loc = sessionStorage.getItem('pesquisa');
    var param_value = loc;  
    console.log(param_value)
    if (param_value) {
        tituloCategoria.innerText = `Resultados para "${param_value}"`
        return param_value;   
    }   
    else { 
        bookApi("Em alta")
        return undefined;   
    }

};

bookApi(receivedParams());
