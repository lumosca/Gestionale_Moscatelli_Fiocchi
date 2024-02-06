const cors = require('cors');
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

// Dichiarato ListaLibri
let ListaLibri = [];

// Rotte per la gestione dei libri
app.get('/prenotazioni_libri', (req, res) => {
    res.status(200).json(ListaLibri);
});

app.get('/ListaLibri/:id', (req, res) => {
    let id = req.params.id;
    let libro = ListaLibri.find((item) => item.id == id);

    if (libro != undefined)
        res.json(libro);
    else
        res.status(404).send("Libro non trovato");
});

app.post('/aggiungiLibro', (req, res) => {
    console.log('beginmetodolistalibri');

    console.log(req);
    let TitoloLibro = req.body.TitoloLibro;
    let Autore = req.body.Autore;
    let Genere = req.body.Genere;
    
    if (TitoloLibro && Autore && Genere) {
        let id = ListaLibri.length > 0 ? ListaLibri[ListaLibri.length - 1].id + 1 : 1;

        const nuovoLibro = {
            id,
            TitoloLibro,
            Autore,
            Genere
        };

        ListaLibri.push(nuovoLibro);
        res.status(201).json(nuovoLibro);
    } else {
        res.status(400).send("Formato del body errato");
    }
});

app.put('/ListaLibri/:id', (req, res) => {
    let id = req.params.id;
    let libroIndex = ListaLibri.findIndex((item) => item.id == id);

    if (libroIndex >= 0) {
        let updatedLibro = req.body;
        ListaLibri[libroIndex] = { ...ListaLibri[libroIndex], ...updatedLibro };
        res.json(ListaLibri[libroIndex]);
    } else {
        res.status(404).send("Libro non trovato");
    }
});

let ListaUtenti = [
    {
        id: 1,
        nome: "Simone",
        cognome: "Austeri",
        email: "simone.austeri@ittterni.org"
    },
    {
        id: 2,
        nome: "Francesco",
        cognome: "Magaletti",
        email: "francesco.magaletti@ittterni.org"
    },
    // Altri utenti...
];

app.get('/utenti', (req, res) => {
    res.status(200).json(ListaUtenti);
});

app.post('/aggiungiUtente', (req, res) => {
    console.log("AGGIUNGI UTENTE")
    const nuovoUtente = req.body;

    if (!nuovoUtente || !nuovoUtente.nome || !nuovoUtente.cognome || !nuovoUtente.email) {
        res.status(400).json({ error: 'L\'utente deve avere un nome, un cognome e un\'email.' });
        return;
    }

    // Assegniamo un nuovo ID in base all'ultimo ID presente nella lista
    const nuovoId = ListaUtenti.length > 0 ? ListaUtenti[ListaUtenti.length - 1].id + 1 : 1;
    nuovoUtente.id = nuovoId;

    ListaUtenti.push(nuovoUtente);

    res.status(201).json({ message: 'Utente aggiunto con successo.', utente: nuovoUtente });
});

app.delete('/rimuoviUtente/:id', (req, res) => {
    const idUtente = parseInt(req.params.id);

    ListaUtenti = ListaUtenti.filter(utente => utente.id !== idUtente);

    res.status(200).json({ message: 'Utente rimosso con successo.', id: idUtente });
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
