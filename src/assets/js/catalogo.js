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

// função pra receber os parametrosde busca das outras telas
function receivedParams(parameter) {  
    var loc = location.search.substring(1, location.search.length);  
    var param_value = loc;  
    var params = loc.split("&");  
    // for (i= 0 ; i < params.length; i++) {   
      
    //     param_name = params[i].substring(0,params[i].indexOf('='));   
    //     if (param_name == parameter) {                                          
    //         param_value = params[i].substring(params[i].indexOf('=') + 1)   
    //     }   
    // }   
    if (param_value) {   
        console.log('param',param_value)
        return param_value;   
    }   
    else {   
        return undefined;   
    } 
    
};

bookApi(receivedParams());

bookApi('em alta');
