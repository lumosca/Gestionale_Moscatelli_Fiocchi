document.addEventListener('DOMContentLoaded', function() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const bookId = urlParams.get('id');
    const book = document.getElementById(bookId);
    
    if (book) {
        const title = book.querySelector('h2').textContent;
        const author = book.querySelector('p').textContent;
        const image = book.querySelector('img').src;
        
        // Visualizza i dettagli del libro
        document.getElementById('book-details-img').src = image;
        document.getElementById('book-details-title').textContent = title;
        document.getElementById('book-details-author').textContent = `Autore: ${author}`;
    } else {
        console.error('ID del libro non valido');
    }
});
