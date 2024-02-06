function visualizzaPrenotazioni() {
    fetch('http://localhost:3000/prenotazioni_libri')
        .then(response => response.json())
        .then(prenotazioni => {
            const prenotazioniBody = document.getElementById('prenotazioniBody');
            prenotazioniBody.innerHTML = ''; // Pulisce la tabella prima di aggiornarla

            prenotazioni.forEach(prenotazione => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${prenotazione.id}</td>
                    <td>${prenotazione.TitoloLibro}</td>
                    <td>${prenotazione.Autore}</td>
                    <td>${prenotazione.Genere}</td>
                `;
                prenotazioniBody.appendChild(row);
            });
        })
        .catch(error => console.error('Errore durante il caricamento delle prenotazioni:', error));
}
