document.addEventListener('DOMContentLoaded', () => {
    // Funzione per caricare la lista degli utenti
    function caricaListaUtenti() {
        fetch('http://localhost:3000/lista_utenti')
            .then(response => response.json())
            .then(utenti => {
                const listaUtentiBody = document.getElementById('listaUtentiBody');
                listaUtentiBody.innerHTML = '';

                utenti.forEach(utente => {
                    const riga = document.createElement('tr');
                    riga.innerHTML = `
                        <td>${utente.id}</td>
                        <td>${utente.nome}</td>
                        <td>${utente.cognome}</td>
                        <td>${utente.email}</td>
                        <td>
                            <button onclick="modificaUtente(${utente.id})">Modifica</button>
                            <button onclick="rimuoviUtente(${utente.id})">Rimuovi</button>
                        </td>
                    `;
                    listaUtentiBody.appendChild(riga);
                });
            })
            .catch(error => console.error('Errore durante il caricamento degli utenti:', error));
    }

    // Funzione per rimuovere un utente
    window.rimuoviUtente = function(idUtente) {
        fetch(`http://localhost:3000/rimuovi_utente/${idUtente}`, {
            method: 'DELETE',
        })
        .then(response => {
            if (response.ok) {
                caricaListaUtenti();
            } else {
                console.error('Errore durante la rimozione dell\'utente');
            }
        })
        .catch(error => console.error('Errore durante la rimozione dell\'utente:', error));
    };

    // Carica la lista degli utenti al caricamento della pagina
    caricaListaUtenti();
});
