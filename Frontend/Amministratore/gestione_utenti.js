document.addEventListener('DOMContentLoaded', () => {
    // Funzione per caricare la lista degli utenti
    function caricaListaUtenti() {
        fetch('http://localhost:3000/utenti')
            .then(response => response.json())
            .then(utenti => {
                const listaUtentiBody = document.getElementById('listaUtentiBody'); // Corretto l'id
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
        fetch(`http://localhost:3000/rimuoviUtente/${idUtente}`, {
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

    // Funzione per aggiungere un utente
    window.aggiungiUtente = function() {
        const nuovoUtente = {
            nome: "Nuovo",
            cognome: "Utente",
            email: "nuovo.utente@example.com"
        };
        
        fetch('http://localhost:3000/aggiungiUtente', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(nuovoUtente),
        })
            .then(response => {
                if (response.ok) {
                    caricaListaUtenti(); // Aggiorna la lista degli utenti
                } else {
                    console.error('Errore durante l\'aggiunta dell\'utente');
                }
            })
            .catch(error => console.error('Errore durante l\'aggiunta dell\'utente:', error));
    };

    // Carica la lista degli utenti al caricamento della pagina
    caricaListaUtenti();
});
