class Book {
  constructor(title, author, storeUrl) {
    this.title = title;
    this.author = author;
    this.storeUrl = storeUrl;
  }
}

class UI {
  static displayBook() {
    const storedBooks = [
      {
        title: '리액트를 다루는 기술',
        author: '김민준',
        storeUrl: 'https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=204819510'
      },
      {
        title: '프론트엔드 개발 첫 걸음',
        author: 'Hara Kazuhiro',
        storeUrl: 'https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=173518326'
      }
    ];

    const books = storedBooks;
    books.forEach((book) => UI.addBookList(book))
  }

  static addBookList(book) {
    const list = document.querySelector('.books');

    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td><a href="${book.storeUrl}">서점 바로가기</a></td>
      <td><a class="delete" href="#">X</a></td>
    `;
    list.appendChild(row);
  }
}

document.addEventListener('DOMContentLoaded', UI.displayBook);