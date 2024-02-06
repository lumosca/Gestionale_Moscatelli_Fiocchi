const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Array per memorizzare le recensioni
const reviews = [];

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

// Gestisce la richiesta POST per inviare una nuova recensione
app.post('/submit-review', (req, res) => {
    const { author, rating, content } = req.body;
    const date = new Date().toLocaleDateString(); // Ottiene la data corrente

    reviews.push({ author, rating, content, date });
    console.log('Nuova recensione aggiunta:', { author, rating, content, date });

    res.sendStatus(200); // Invia una risposta OK
});

// Gestisce la richiesta GET per ottenere tutte le recensioni
app.get('/get-reviews', (req, res) => {
    res.json(reviews);
});

// Avvia il server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
