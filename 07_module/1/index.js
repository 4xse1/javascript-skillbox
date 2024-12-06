let books = ["Война и мир", "Мастер и Маргарита", "Преступление и наказание", "Дюна", "Властелин колец"];

const bookList = document.getElementById('book-list');
const addBookBtn = document.getElementById('add-book-btn');
const searchBookBtn = document.getElementById('search-book-btn');


function displayBooks() {
    bookList.innerHTML = '';  
    books.forEach(book => {
        const li = document.createElement('li');
        li.textContent = book;
        bookList.appendChild(li);
    });
}


function addBook() {
    const newBook = prompt("Введите название книги:");
    if (newBook) {
        books.push(newBook);
        displayBooks();
    } else {
        alert("Название книги не введено!");
    }
}


function searchBook() {
    const searchTerm = prompt("Введите название книги для поиска:");
    if (searchTerm) {
        let found = false;
        books.forEach(book => {
            const bookItem = [...bookList.getElementsByTagName('li')];
            bookItem.forEach(item => {
                item.style.backgroundColor = ''; 
                if (item.textContent.toLowerCase() === searchTerm.toLowerCase()) {
                    item.style.color = 'red'; 
                    found = true;
                }
            });
        });
        if (!found) {
            alert("Книга не найдена!");
        }
    }
}


addBookBtn.addEventListener('click', addBook);
searchBookBtn.addEventListener('click', searchBook);

displayBooks();