document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('aggiungiLibroForm');
    const listaLibri = document.querySelector('.lista-libri');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        aggiungiLibro();
    });

    function aggiungiLibro() {
        const titolo = document.getElementById('titolo').value;
        const autore = document.getElementById('autore').value;
        const genere = document.getElementById('genere').value;

        if (titolo && autore && genere) {
            const nuovoLibro = {
                TitoloLibro: titolo,
                Autore: autore,
                Genere: genere
            };

            fetch('http://localhost:3000/aggiungi_libro', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(nuovoLibro),
            })
            .then(response => response.json())
            .then(data => {
                const listItem = document.createElement('li');
                listItem.textContent = `${titolo} - ${autore} - ${genere}`;
                listaLibri.appendChild(listItem);

                form.reset();
                alert(data.message);
            })
            .catch((error) => {
                console.error('Errore:', error);
                alert('Si è verificato un errore durante l\'aggiunta del libro.');
            });
        } else {
            alert('Inserisci tutti i campi del libro.');
        }
    }
});
