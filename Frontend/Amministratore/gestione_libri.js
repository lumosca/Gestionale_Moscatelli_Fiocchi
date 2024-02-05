const tableBody = document.getElementById('listaLibriBody');

function aggiungiLibro() {
    const nuovoLibro = {
        TitoloLibro: prompt("Inserisci il titolo del libro:"),
        Autore: prompt("Inserisci l'autore del libro:"),
        Genere: prompt("Inserisci il genere del libro:")
    };

    fetch('http://localhost:3000/ListaLibri', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(nuovoLibro),
    })
    .then(response => {
        if (response.ok) {
            aggiornaListaLibri(); // Aggiorna la lista dei libri
        } else {
            console.error('Errore durante l\'aggiunta del libro');
        }
    })
    .catch(error => console.error('Errore durante l\'aggiunta del libro:', error));
}

function modificaLibro(libroId) {
    // Implementa la logica per la modifica del libro
    console.log(`Modifica del libro con ID: ${libroId}`);
}

function eliminaLibro(libroId) {
    fetch(`http://localhost:3000/ListaLibri/${libroId}`, {
        method: 'DELETE',
    })
    .then(response => {
        if (response.ok) {
            aggiornaListaLibri(); // Aggiorna la lista dei libri
        } else {
            console.error('Errore durante l\'eliminazione del libro');
        }
    })
    .catch(error => console.error('Errore durante l\'eliminazione del libro:', error));
}

function aggiornaListaLibri() {
    fetch('http://localhost:3000/ListaLibri')
        .then(response => response.json())
        .then(libri => {
            // Aggiorna la tua UI con la nuova lista di libri
            tableBody.innerHTML = '';

            libri.forEach(libro => {
                const row = tableBody.insertRow();

                Object.values(libro).forEach(value => {
                    const cell = row.insertCell();
                    cell.textContent = value;
                });

                const azioniCell = row.insertCell();

                const modificaButton = document.createElement('button');
                modificaButton.textContent = 'Modifica';
                modificaButton.addEventListener('click', () => modificaLibro(libro.id));
                azioniCell.appendChild(modificaButton);

                const eliminaButton = document.createElement('button');
                eliminaButton.textContent = 'Elimina';
                eliminaButton.addEventListener('click', () => eliminaLibro(libro.id));
                azioniCell.appendChild(eliminaButton);
            });
        })
        .catch(error => console.error('Errore durante il recupero della lista dei libri:', error));
}

// Chiama la funzione all'avvio per caricare la lista iniziale dei libri
aggiornaListaLibri();
