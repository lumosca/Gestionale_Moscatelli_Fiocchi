document.addEventListener('DOMContentLoaded', () => {
    caricaListaLibri(); // Carica la lista dei libri all'avvio della pagina
});

function caricaListaLibri() {
    const tableBody = document.getElementById('listaLibriBody');
    tableBody.innerHTML = ''; // Pulisce la tabella prima di aggiornarla

    fetch('http://localhost:3000/prenotazioni_libri')
        .then(response => response.json())
        .then(libri => {
            libri.forEach(libro => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td id="titolo-${libro.id}">${libro.TitoloLibro}</td>
                    <td id="autore-${libro.id}">${libro.Autore}</td>
                    <td id="genere-${libro.id}">${libro.Genere}</td>
                    <td>
                        <button onclick="modificaLibro(${libro.id})">Modifica</button>
                        <button onclick="eliminaLibro(${libro.id})">Elimina</button>
                        <button onclick="confermaModifiche(${libro.id})">Conferma Modifiche</button>
                    </td>
                `;
                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Errore durante il caricamento dei libri:', error));
}

function aggiungiLibro() {
    const titolo = document.getElementById('titolo').value;
    const autore = document.getElementById('autore').value;
    const genere = document.getElementById('genere').value;

    const nuovoLibro = {
        TitoloLibro: titolo,
        Autore: autore,
        Genere: genere
    };

    fetch('http://localhost:3000/aggiungiLibro', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(nuovoLibro)
    })
    .then(response => {
        if (response.ok) {
            caricaListaLibri(); // Aggiorna la lista dei libri dopo l'aggiunta
        } else {
            console.error('Errore durante l\'aggiunta del libro');
        }
    })
    .catch(error => console.error('Errore durante l\'aggiunta del libro:', error));
}

function modificaLibro(idLibro) {
    const titoloCell = document.querySelector(`#titolo-${idLibro}`);
    const autoreCell = document.querySelector(`#autore-${idLibro}`);
    const genereCell = document.querySelector(`#genere-${idLibro}`);

    titoloCell.contentEditable = true;
    autoreCell.contentEditable = true;
    genereCell.contentEditable = true;
}

function eliminaLibro(idLibro) {
    if (confirm("Sei sicuro di voler eliminare questo libro?")) {
        fetch(`http://localhost:3000/ListaLibri/${idLibro}`, {
            method: 'DELETE'
        })
        .then(response => {
            if (response.ok) {
                caricaListaLibri(); // Aggiorna la lista dei libri dopo l'eliminazione
            } else {
                console.error('Errore durante l\'eliminazione del libro');
            }
        })
        .catch(error => console.error('Errore durante l\'eliminazione del libro:', error));
    }
}

function confermaModifiche(idLibro) {
    const titolo = document.getElementById(`titolo-${idLibro}`).innerText;
    const autore = document.getElementById(`autore-${idLibro}`).innerText;
    const genere = document.getElementById(`genere-${idLibro}`).innerText;

    const libroModificato = {
        TitoloLibro: titolo,
        Autore: autore,
        Genere: genere
    };

    fetch(`http://localhost:3000/ListaLibri/${idLibro}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(libroModificato)
    })
    .then(response => {
        if (response.ok) {
            caricaListaLibri(); // Aggiorna la lista dei libri dopo la modifica
        } else {
            console.error('Errore durante il salvataggio delle modifiche del libro');
        }
    })
    .catch(error => console.error('Errore durante il salvataggio delle modifiche del libro:', error));
}
