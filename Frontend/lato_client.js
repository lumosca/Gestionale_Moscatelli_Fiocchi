function aggiungiLibro() {
    const form = document.getElementById('aggiungiLibroForm');
    const titoloLibro = form.querySelector('#titoloLibro').value;
    const autore = form.querySelector('#autore').value;
    const genere = form.querySelector('#genere').value;

    const nuovoLibro = {
        TitoloLibro: titoloLibro,
        Autore: autore,
        Genere: genere
    };

    // Esegui una richiesta POST al tuo server per aggiungere il nuovo libro
    fetch('http://localhost:3000/ListaLibri', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(nuovoLibro),
    })
        .then(response => response.json())
        .then(data => {
            console.log('Libro aggiunto con successo:', data);
            // Aggiorna la visualizzazione della lista dei libri sul client, se necessario
        })
        .catch(error => console.error('Errore durante l\'aggiunta del libro:', error));
}
