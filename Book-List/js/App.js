import { Modal } from './Modal.js';

class Book {
  constructor(title, author, storeUrl) {
    this.title = title;
    this.author = author;
    this.storeUrl = storeUrl;
  }
}

class UI {
  static displayBook() {
    const books = Storage.getBooks();
    books.forEach((book) => UI.addBookList(book))
  }

  static addBookList(book) {
    const list = document.querySelector('#books');

    const row = document.createElement('tr'); 

    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td><a href="${book.storeUrl}">서점 바로가기</a></td>
      <td><div class="delete">X</div></td>
    `;
    list.appendChild(row);
  }

  static clearFields() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#link').value = '';
  }

  static deleteBook(target) {
    if (target.classList.contains('delete')) {
      console.log(target.parentElement.parentElement.remove());
    }
  }
}

// 저장하기
class Storage {
  static getBooks() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'))
    }

    return books;
  }

  static addBook(book) {
    const books = Storage.getBooks();
    books.push(book);

    localStorage.setItem('books', JSON.stringify(books))
  }

  static removeBook(title) {
    const books = Storage.getBooks();

    books.forEach((book, index) => {
      if (book.title === title) {
        books.splice(index, 1);
      }
    });

    localStorage.setItem('books', JSON.stringify(books));
  }
}

// stored book에 담겨있는 책 정보 보여주기
document.addEventListener('DOMContentLoaded', UI.displayBook);


// 책을 추가하기
const bookForm = document.querySelector('#book-form');
bookForm.addEventListener('submit', (event) => {
  // Prevent actual submit
  event.preventDefault();

  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const link = document.querySelector('#link').value;

  // 유효성 검사
  if (title === '' || author === '' || link === '') {
    new Modal();
  } else {
    const book = new Book(title, author, link);

    // 책 추가된 것을 화면에 보여주기
    UI.addBookList(book);

    // local에서 저장하기
    Storage.addBook(book);

    // Clear Fields
    UI.clearFields();
  }

  
})


// 책 삭제하기
const books = document.querySelector('#books');
books.addEventListener('click', (event) => {
  
  // UI에서 삭제
  UI.deleteBook(event.target);

  // localStorage에서 삭제
  const tr = event.target.parentElement.parentElement;
  
  // console.log(event.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent)
  // console.log(event.target.parentElement.previousElementSibling.textContent);
  Storage.removeBook(tr.querySelector('td').innerText)
})