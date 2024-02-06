const users = [
    { username: "simone", password: "austeri" },
    { username: "mattia", password: "fiocchi" },
    { username: "nicola", password: "moscatelli" },
];

function login() {
    const enteredUsername = document.getElementById("username").value;
    const enteredPassword = document.getElementById("password").value;

    // Controlla se le credenziali corrispondono a quelle memorizzate nell'array 'users'
    const user = users.find(user => user.username === enteredUsername && user.password === enteredPassword);

    if (user) {
        alert("Login amministratore riuscito!");
        window.location.href = "amministratore.html";
    } else {
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
        alert("Credenziali non valide. Riprova.");
    }
}
document.addEventListener('DOMContentLoaded', function() {
    const books = document.querySelectorAll('.book');
    const bookDetails = document.getElementById('book-details');
    const bookDetailsImg = document.getElementById('book-details-img');
    const bookDetailsTitle = document.getElementById('book-details-title');
    const bookDetailsAuthor = document.getElementById('book-details-author');
    const prenotaBtn = document.getElementById('prenota-btn');

    books.forEach(book => {
        book.addEventListener('click', function() {
            const imgSrc = book.querySelector('img').src;
            const title = book.querySelector('h2').textContent;
            const author = book.querySelector('p').textContent;

            bookDetailsImg.src = imgSrc;
            bookDetailsTitle.textContent = title;
            bookDetailsAuthor.textContent = author;
            bookDetails.classList.remove('hidden');
        });
    });

    prenotaBtn.addEventListener('click', function() {
        // Invia richiesta al backend per prenotare il libro
        const title = bookDetailsTitle.textContent;
        const author = bookDetailsAuthor.textContent;
        prenotaLibro(title, author);
    });

    function prenotaLibro(title, author) {
        // Simula l'invio della richiesta al backend
        console.log('Prenotazione effettuata per il libro:', title, 'di', author);
        // Qui dovresti inviare una richiesta HTTP al tuo backend per registrare la prenotazione
    }
});

        document.querySelectorAll('.book').forEach(book => {
            book.addEventListener('click', function() {
                const title = book.querySelector('h2').textContent;
                const author = book.querySelector('p').textContent;
                const image = book.querySelector('img').src;
                window.location.href = `book_details.html?title=${encodeURIComponent(title)}&author=${encodeURIComponent(author)}&image=${encodeURIComponent(image)}`;
            });
        });
    
