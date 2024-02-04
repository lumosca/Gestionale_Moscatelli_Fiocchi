const express = require('express');
const app = express();
const port = 3000;

const ListaLibri = [
    {
        id: 1,
        TitoloLibro: "1984",
        Autore: "George Orwell",
        Genere: "Romanzo distopico"
    },
    {
        id: 2,
        TitoloLibro: "Il Signore degli Anelli",
        Autore: "J.R.R. Tolkien",
        Genere: "Fantasy"
    },
    {
        id: 3,
        TitoloLibro: "Cronache del ghiaccio e del fuoco (Il Trono di Spade)",
        Autore: "George R.R. Martin",
        Genere: "Fantasy epico"
    },
    {
        id: 4,
        TitoloLibro: "Orgoglio e pregiudizio",
        Autore: "Jane Austen",
        Genere: "Romanzo romantico"
    },
    {
        id: 5,
        TitoloLibro: "Harry Potter e la Pietra Filosofale",
        Autore: "J.K. Rowling",
        Genere: "Letteratura fantastica per ragazzi"
    },
    {
        id: 6,
        TitoloLibro: "Cime tempestose",
        Autore: "Emily Brontë",
        Genere: "Romanzo gotico"
    },
    {
        id: 7,
        TitoloLibro: "Il Grande Gatsby",
        Autore: "F. Scott Fitzgerald",
        Genere: "Romanzo moderno"
    },
    {
        id: 8,
        TitoloLibro: "Cent'anni di solitudine",
        Autore: "Gabriel García Márquez",
        Genere: "Realismo magico"
    },
    {
        id: 9,
        TitoloLibro: "Lo Hobbit",
        Autore: "J.R.R. Tolkien",
        Genere: "Fantasy"
    },
    {
        id: 10,
        TitoloLibro: "Moby Dick",
        Autore: "Herman Melville",
        Genere: "Romanzo avventuroso"
    }
];

app.use(express.json());

app.get('/prenotazioni_libri', (req, res) => {
    res.status(200).json(ListaLibri);
});
/*
app.get('/ListaLibri/:id', (req, res) => {
    let id = req.params.id;
    let libro = ListaLibri.find((item) => item.id == id);

    if (libro != undefined)
        res.json(libro);
    else
        res.status(404).send("Libro non trovato");
});

app.post('/ListaLibri', (req, res) => {
    console.log(req.body);
    let TitoloLibro = req.body.TitoloLibro;
    let Autore = req.body.Autore;
    let Genere = req.body.Genere;

    if (TitoloLibro && Autore && Genere) {
        let id = ListaLibri[ListaLibri.length - 1].id + 1;
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
*/
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});