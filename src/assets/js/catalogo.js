const listaDeCategorias = [ "AUTO AJUDA", "CIÊNCIAS BIOLÓGICAS", "CIÊNCIAS EXATAS", "CIÊNCIAS SOCIAIS", "DIDÁTICOS", "ENGENHARIA", "EDUCAÇÃO", "ESOTERISMO", "LITERATURA NACIONAL", "LITERATURA INTERNACIONAL", "QUADRINHOS", "SEXUALIDADE", "SAUDE E BEM ESTAR", "TECNOLOGIA", "VIAGEM", "BIOGRAFIA"]

const listaNaoOrdenada = document.querySelector('.catalog-menu')

let tituloCategoria = document.getElementById('titulo-categoria')

for(let i = 0; i < listaDeCategorias.length; i++) {
    const categoria = document.createElement('li')
    
    categoria.innerText = listaDeCategorias[i]
    listaNaoOrdenada.appendChild(categoria)
    
    categoria.addEventListener('click', () => tituloCategoria.innerText = listaDeCategorias[i])
}

//API dos livros - ignorar por enquanto

const searchInput = document.querySelector('#search');
const searchBtn = document.querySelector('.search-btn');

searchInput.addEventListener('blur',(e) => {
    const input = e.target.value;

   searchBtn.addEventListener('click',(e) => {
         bookApi(input);
         console.log('Click funciona')
    })
})

const bookApi = async (book) => {
        const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${book}&key=AIzaSyCT5_PF4d5CFyw0x9KnQIpSklcfdFfdxpk`;

        console.log(apiUrl);
    }