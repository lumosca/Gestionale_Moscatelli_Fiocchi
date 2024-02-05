const form = document.getElementById('aggiungiLibroForm');
const tableBody = document.querySelector('.lista-libri');

form.addEventListener('submit', async function (event) {
    event.preventDefault();

    const titolo = document.getElementById('titolo').value;
    const autore = document.getElementById('autore').value;
    const genere = document.getElementById('genere').value;

    const response = await fetch('http://localhost:3000/ListaLibri', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            TitoloLibro: titolo,
            Autore: autore,
            Genere: genere,
        }),
    });

    const data = await response.json();
    console.log(data);

    // Aggiorna la lista dei libri
    aggiornaListaLibri();
});

async function aggiornaListaLibri() {
    const response = await fetch('http://localhost:3000/prenotazioni_libri');
    const libri = await response.json();

    // Aggiorna la tua UI con la nuova lista di libri
    tableBody.innerHTML = '';

    libri.forEach(libro => {
        const row = tableBody.insertRow();

        Object.entries(libro).forEach(([key, value]) => {
            const cell = row.insertCell();
            cell.textContent = value;
        });

        const azioniCell = row.insertCell();
        const modificaButton = document.createElement('button');
        modificaButton.textContent = 'Modifica';
        modificaButton.addEventListener('click', () => modificaLibro(libro));
        azioniCell.appendChild(modificaButton);

        const eliminaButton = document.createElement('button');
        eliminaButton.textContent = 'Elimina';
        eliminaButton.addEventListener('click', () => eliminaLibro(libro));
        azioniCell.appendChild(eliminaButton);
    });
}

function modificaLibro(libro) {
    console.log(`Editing book with ID: ${libro.id}`);
    // Implement your logic for editing a book
}

function eliminaLibro(libro) {
    console.log(`Deleting book with ID: ${libro.id}`);
    // Implement your logic for deleting a book
}

// Call the function at the beginning to load the initial list of books
aggiornaListaLibri();
