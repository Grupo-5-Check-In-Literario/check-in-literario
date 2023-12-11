let linkSair = document.getElementById('sair')

linkSair.addEventListener('click', (e) =>{
  let alertaSaida = confirm('Tem certeza que deseja sair?')
  if (!alertaSaida){
    e.preventDefault()
  }else{
    alert("Até a próxima!")
  }
})

//Todas as requisições da barra de busca ficam nesse .js
const searchInput = document.querySelector("#search");
const searchBtn = document.querySelector(".search-btn");
const bookTitle = document.querySelectorAll(".book-title");
const imgBook = document.querySelectorAll(".img-book");
let tituloCategoria = document.getElementById('titulo-categoria');

searchInput.addEventListener('blur',(e) => {
  const input = e.target.value;
  searchBtn.addEventListener('click',(e) => {
    bookApi(input);
    if(window.location.pathname != '/catalogo.html'){
        sendParams(input); 
        sessionStorage.setItem('pesquisa', input) 
    }else{
      tituloCategoria.innerText = `Resultados para "${input}"`
    }
  })
})

searchInput.addEventListener('keypress',(e) => {  
  const input = e.target.value;
  if(e.key === 'Enter'){
    bookApi(input);
    if(window.location.pathname != '/catalogo.html'){
      sendParams(input);
      sessionStorage.setItem('pesquisa', input) 
    }else{
    tituloCategoria.innerText = `Resultados para "${input}"`
    }
  }
});


//api dos livros
const bookApi = async (book) => {
  const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${book}&key=AIzaSyCT5_PF4d5CFyw0x9KnQIpSklcfdFfdxpk`;

  const resp = await fetch(apiUrl);
  const data = await resp.json();

  const bookData = data.items;
  const bookList = Array(bookData);

  let selectbook = Array();
  bookList[0].map((items) => {
    selectbook.push(items.volumeInfo);
  });

  showBook(selectbook);

  if (data.erro === true) {
    alert("Livro não encontrado");
    return;
  }
};

//renderizar os livros dinâmicamente na tela de catálogo
function showBook(items) {
  for (let index = 0; index < bookTitle.length; index++) {
    bookTitle[index].innerHTML = `${items[index].title}`;
  }

  for (let index = 0; index < imgBook.length + 1; index++) {
    if (items[index].imageLinks === undefined) {
      imgBook[index].setAttribute(
        "src",
        `./src/assets/images/capa-ilustrativa.jpg`
      );
    } else {
      imgBook[index].setAttribute(
        "src",
        `${items[index].imageLinks.thumbnail}`
      );
    }
  }
};

//passando a busca da barra de pesquisa para renderizar no catálogo
var sendParams = function(valor){
  window.location = "catalogo.html?"+valor;
};

export {bookApi, sendParams};