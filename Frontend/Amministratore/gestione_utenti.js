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
                            <button onclick="rimuoviUtente(${utente.id})">Rimuovi</button>
                            <button class="pulsante-modifica" onclick="modificaUtente(${utente.id})">Modifica</button>
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
        const nome = document.getElementById('nome').value;
        const cognome = document.getElementById('cognome').value;
        const email = document.getElementById('email').value;
    
        const nuovoUtente = {
            nome: nome,
            cognome: cognome,
            email: email
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

    // Funzione per modificare un utente
// Funzione per modificare un utente


// Funzione per modificare un utente
window.modificaUtente = function(idUtente) {
    // Trova la riga corrispondente all'idUtente
    const riga = document.getElementById(`riga-${idUtente}`);
    
    // Trova i campi di testo all'interno della riga
    const campiTesto = riga.querySelectorAll('td:not(:first-child)');
    
    // Imposta i campi di testo come editabili
    campiTesto.forEach(campo => {
        const valoreAttuale = campo.textContent;
        campo.innerHTML = `<input type="text" value="${valoreAttuale}">`;
    });

    // Sostituisci il pulsante "Modifica" con i pulsanti "Conferma" e "Annulla"
    const pulsanteModifica = riga.querySelector('.pulsante-modifica');
    pulsanteModifica.innerHTML = `
        <button onclick="confermaModifiche(${idUtente})">Conferma</button>
        <button onclick="annullaModifiche(${idUtente})">Annulla</button>
    `;
};

    // Funzione per salvare le modifiche di un utente
    window.salvaModifiche = function(idUtente) {
        // Trova la riga corrispondente all'idUtente
        const riga = document.getElementById(`riga-${idUtente}`);
        
        // Trova i campi di input all'interno della riga
        const campiInput = riga.querySelectorAll('input');

        // Crea un oggetto per contenere i nuovi valori
        const nuoviValori = {
            nome: campiInput[0].value,
            cognome: campiInput[1].value,
            email: campiInput[2].value
        };

        // Invia una richiesta PUT al server per aggiornare l'utente
        fetch(`http://localhost:3000/ListaUtenti/${idUtente}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(nuoviValori),
        })
        .then(response => {
            if (response.ok) {
                // Aggiorna la lista degli utenti dopo il salvataggio
                caricaListaUtenti();
            } else {
                console.error('Errore durante il salvataggio delle modifiche dell\'utente');
            }
        })
        .catch(error => console.error('Errore durante il salvataggio delle modifiche dell\'utente:', error));
    };

// Funzione per modificare un utente


    // Funzione per confermare le modifiche di un utente
    window.confermaModifiche = function(idUtente) {
        // Trova la riga corrispondente all'idUtente
        const riga = document.getElementById(`riga-${idUtente}`);
        
        // Trova i campi di input all'interno della riga
        const campiInput = riga.querySelectorAll('input');

        // Crea un oggetto per contenere i nuovi valori
        const nuoviValori = {
            nome: campiInput[0].value,
            cognome: campiInput[1].value,
            email: campiInput[2].value
        };

        // Invia una richiesta PUT al server per aggiornare l'utente
        fetch(`http://localhost:3000/ListaUtenti/${idUtente}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(nuoviValori),
        })
        .then(response => {
            if (response.ok) {
                // Aggiorna la lista degli utenti dopo il salvataggio
                caricaListaUtenti();
            } else {
                console.error('Errore durante il salvataggio delle modifiche dell\'utente');
            }
        })
        .catch(error => console.error('Errore durante il salvataggio delle modifiche dell\'utente:', error));
    };

    // Funzione per annullare le modifiche di un utente
    window.annullaModifiche = function(idUtente) {
        // Ricarica la lista degli utenti per annullare le modifiche
        caricaListaUtenti();
    };


    // Carica la lista degli utenti al caricamento della pagina
    caricaListaUtenti();
});
