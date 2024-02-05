const tableBody = document.getElementById('listaLibriBody');

document.addEventListener('DOMContentLoaded', () => {
    function aggiungiLibro() {
        console.log(`inizio: `);
    //console.log(document.getElementById('titolo').value);
    
        const nuovoLibro = {
    
            TitoloLibro: document.getElementById('titolo').value,
            Autore: document.getElementById('autore').value,
            Genere: document.getElementById('genere').value 
    
        };
        console.log(`begin agggiungi ibro: `);
        console.log(nuovoLibro);
    
        fetch('http://localhost:3000/aggiungiLibro', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(nuovoLibro)
        })
        .then(response => {
            if (response.ok) {
                //aggiornaListaLibri(); // Aggiorna la lista dei libri
               console.log("OK");
            } else {
                console.error('Errore durante l\'aggiunta del libro');
            }
        })
        .catch(error => console.error('eccezione l\'aggiunta del libro:', error));
    }
    
})

/*
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
*/
// Chiama la funzione all'avvio per caricare la lista iniziale dei libri
//aggiornaListaLibri();
