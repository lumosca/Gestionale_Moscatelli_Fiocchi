const form = document.getElementById('aggiungiLibroForm');
const listaLibri = document.querySelector('.lista-libri');

form.addEventListener('submit', async function (event) {
    event.preventDefault();

    const titolo = document.getElementById('titolo').value;
    const autore = document.getElementById('autore').value;
    const genere = document.getElementById('genere').value;

    const response = await fetch('http://localhost:3000/aggiungi_libro', {
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
    listaLibri.innerHTML = '';
    libri.forEach(libro => {
        const listItem = document.createElement('li');
        listItem.textContent = `${libro.TitoloLibro} - ${libro.Autore} - ${libro.Genere}`;
        listaLibri.appendChild(listItem);
    });
}

// Chiama la funzione all'avvio per caricare la lista iniziale dei libri
aggiornaListaLibri();
