function fetchBooks() {
  // Return fetch call as required by the tests
  return fetch("https://anapioficeandfire.com/api/books")
    .then(res => res.json())              // Parse JSON
    .then(data => renderBooks(data));     // Pass data to renderBooks
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

// ✅ Call fetchBooks once the page is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
