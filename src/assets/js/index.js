//API dos livros - ignorar por enquanto

const bookTitle = document.querySelectorAll('.book-title');
const imgBook = document.querySelectorAll('.img-book')

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

bookApi('em alta')

//função para substituir dinamicamente os cards de livros no html


function showBook(items){
        console.log('a',imgBook[0])
    for (let index = 0; index < bookTitle.length; index++) {
          bookTitle[index].innerHTML = `${items[index].title}`;      
    }
   
    for (let index = 0; index < imgBook.length + 1; index++) {
        if(items[index].imageLinks === undefined) {
            console.log('Filme nao tem thum')
            imgBook[index].setAttribute('src',`./src/assets/images/capa-ilustrativa.jpg`); 
        }else {
            imgBook[index].setAttribute('src',`${items[index].imageLinks.thumbnail}`); 
        }      
    }
}