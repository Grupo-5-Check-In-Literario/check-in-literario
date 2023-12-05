// To be added latter

// class NavbarComponent extends HTMLElement {
// 	constructor() {
// 		super();

// 		// Default paths (you can adjust these as needed)
// 		const defaultImagePath = "./assets/images/";
// 		const defaultCssPath = "./assets/css/";

// 		// Use attributes or defaults
// 		const imagePath = this.getAttribute("image-path") || defaultImagePath;
// 		const cssPath = this.getAttribute("css-path") || defaultCssPath;

// 		const template = document.createElement("template");
// 		template.innerHTML = `
//     <nav class="navbar">
//       <img src="${imagePath}logo.png" class="logo" alt="Logo" />
//       <div class="nav-items">
//         <a href="#quem-somos">QUEM SOMOS</a>
//         <a href="#catalogo">CATÁLOGO</a>
//       </div>
//       <div class="search-bar">
//         <input type="text" placeholder="pesquisar..." />
//         <button type="submit">Buscar</button>
//       </div>
//       <div class="user-info">
//         <img class="user-icon" src="${imagePath}user_8742495.png" alt="Foto do usuário" />
//         <div class="user-text">
//           <span>Olá, Usuário</span>
//           <small>Acesse seu perfil</small>
//         </div>
//       </div>
//       <div class="carrinho">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 47 42"
//           fill="none">
//           <path
//             d="M0 1.96875C0 0.877734 0.87309 0 1.95833 0H5.67101C7.46615 0 9.05729 1.05 9.79983 2.625H43.3363C45.4823 2.625 47.049 4.67578 46.4859 6.75938L43.1404 19.2527C42.4469 21.8285 40.1214 23.625 37.4694 23.625H13.9286L14.3693 25.9629C14.5488 26.8898 15.3566 27.5625 16.295 27.5625H39.8194C40.9047 27.5625 41.7778 28.4402 41.7778 29.5312C41.7778 30.6223 40.9047 31.5 39.8194 31.5H16.295C13.4717 31.5 11.0483 29.482 10.526 26.7012L6.31562 4.4707C6.25851 4.15898 5.98924 3.9375 5.67101 3.9375H1.95833C0.87309 3.9375 0 3.05977 0 1.96875ZM10.4444 38.0625C10.4444 37.5454 10.5458 37.0334 10.7426 36.5557C10.9394 36.078 11.2279 35.6439 11.5916 35.2783C11.9553 34.9126 12.3871 34.6226 12.8623 34.4247C13.3375 34.2268 13.8468 34.125 14.3611 34.125C14.8755 34.125 15.3848 34.2268 15.86 34.4247C16.3351 34.6226 16.7669 34.9126 17.1306 35.2783C17.4943 35.6439 17.7828 36.078 17.9796 36.5557C18.1765 37.0334 18.2778 37.5454 18.2778 38.0625C18.2778 38.5796 18.1765 39.0916 17.9796 39.5693C17.7828 40.047 17.4943 40.4811 17.1306 40.8467C16.7669 41.2124 16.3351 41.5024 15.86 41.7003C15.3848 41.8982 14.8755 42 14.3611 42C13.8468 42 13.3375 41.8982 12.8623 41.7003C12.3871 41.5024 11.9553 41.2124 11.5916 40.8467C11.2279 40.4811 10.9394 40.047 10.7426 39.5693C10.5458 39.0916 10.4444 38.5796 10.4444 38.0625ZM37.8611 34.125C38.8999 34.125 39.8961 34.5398 40.6306 35.2783C41.3651 36.0167 41.7778 37.0182 41.7778 38.0625C41.7778 39.1068 41.3651 40.1083 40.6306 40.8467C39.8961 41.5852 38.8999 42 37.8611 42C36.8223 42 35.8261 41.5852 35.0916 40.8467C34.3571 40.1083 33.9444 39.1068 33.9444 38.0625C33.9444 37.0182 34.3571 36.0167 35.0916 35.2783C35.8261 34.5398 36.8223 34.125 37.8611 34.125Z"
//             fill="white" />
//         </svg>
//       </div>
//     </nav>
//     `;

// 		this.appendChild(template.content.cloneNode(true));

// 		const navbarStyleLink = document.createElement("link");
// 		navbarStyleLink.rel = "stylesheet";
// 		navbarStyleLink.href = `${cssPath}navbar.css`;
// 		document.head.appendChild(navbarStyleLink);

// 		const globalStyleLink = document.createElement("link");
// 		globalStyleLink.rel = "stylesheet";
// 		globalStyleLink.href = `${cssPath}global.css`;
// 		document.head.appendChild(globalStyleLink);
// 	}
// }

// customElements.define("navbar-component", NavbarComponent);

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


searchInput.addEventListener('blur',(e) => {
  const input = e.target.value;

 searchBtn.addEventListener('click',(e) => {
  console.log('click')
       bookApi(input);
       sendParams(input);
  })
})

searchInput.addEventListener('keypress',(e) => {  
  const input = e.target.value;
  if(e.key === 'Enter'){
      bookApi(input);
      sendParams(input);
  }
  
});


//api dos livros
const bookApi = async (book) => {
  const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${book}&key=AIzaSyCT5_PF4d5CFyw0x9KnQIpSklcfdFfdxpk`;

  const resp = await fetch(apiUrl);
  const data = await resp.json();

  const bookData = data.items;
  const bookList = Array(bookData);
  console.log(book, apiUrl)

  let selectbook = Array();
  bookList[0].map((items) => {
    selectbook.push(items.volumeInfo);
  });

  showBook(selectbook);
  console.log("this", selectbook);

  if (data.erro === true) {
    alert("Livro não encontrado");
    return;
  }
};

//renderizar os livros dinâmicamente na tela de catálogo
function showBook(items) {
  console.log("a", imgBook[0]);
  for (let index = 0; index < bookTitle.length; index++) {
    bookTitle[index].innerHTML = `${items[index].title}`;
  }

  for (let index = 0; index < imgBook.length + 1; index++) {
    if (items[index].imageLinks === undefined) {
      console.log("Filme nao tem thum");
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