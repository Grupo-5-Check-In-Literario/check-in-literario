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
const cardBook = document.querySelector('.card-item');
const bookTitle = document.querySelectorAll('.book-title');
const imgBook = document.querySelectorAll('.img-book')

searchInput.addEventListener('blur',(e) => {
    const input = e.target.value;

   searchBtn.addEventListener('click',(e) => {
         bookApi(input);
    })
})

const bookApi = async (book) => {
        const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${book}&key=AIzaSyCT5_PF4d5CFyw0x9KnQIpSklcfdFfdxpk`;

        const resp = await fetch(apiUrl);
        const data = await resp.json();
 
        const bookData = data.items;
        const bookList = Array(bookData);

        let selectbook = Array()
         bookList[0].map((items) => {
           selectbook.push(items.volumeInfo);
        })

        showBook(selectbook);
        console.log('this',selectbook);

        if(data.erro === true){
            alert('Livro não encontrado');
            return;     
    }
}

//função para substituir dinamicamente os cards de livros no html


function showBook(items){
        console.log('a',imgBook[0])
    for (let index = 0; index < bookTitle.length; index++) {
          bookTitle[index].innerHTML = `${items[index].title}`;      
    }
   
    for (let index = 0; index < imgBook.length + 1; index++) {
        if(items[index].imageLinks === undefined) {
            console.log('Filme nao tem thum')
            imgBook[index].setAttribute('src',`../src/assets/images/livro1.jpg`); 
        }else {
            imgBook[index].setAttribute('src',`${items[index].imageLinks.thumbnail}`); 
        }      
    }
 }