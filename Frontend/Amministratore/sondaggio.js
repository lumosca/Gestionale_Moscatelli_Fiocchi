const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware per gestire i dati inviati dal modulo HTML
app.use(bodyParser.urlencoded({ extended: false }));

// Array per memorizzare i dati del sondaggio
const surveyData = [];

// Funzione per verificare se un'email è valida
function isValidEmail(email) {
    // Utilizziamo una semplice espressione regolare per controllare il formato dell'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Endpoint per gestire la richiesta POST dal modulo HTML
app.post('/submit-survey', (req, res) => {
    const { name, email, rating, comments } = req.body;

    // Verifica se il nome è stato fornito
    if (!name) {
        return res.status(400).send('Il nome è obbligatorio.');
    }

    // Verifica se l'email è stata fornita e se è valida
    if (!email || !isValidEmail(email)) {
        return res.status(400).send('L\'email non è valida.');
    }

    // Puoi eseguire qui le operazioni desiderate, come salvare i dati su un database o inviarli via email

    // Aggiungi i dati del sondaggio all'array
    surveyData.push({ name, email, rating, comments });

    // Invia una risposta al client
    res.send('Grazie per aver completato il sondaggio!');
});

// Avvia il server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
