const express = require('express');
const app = express();
const port = 3000;

const ListaLibri = [
    {
        TitoloLibro: "1984",
        Autore: "George Orwell",
        Genere: "Romanzo distopico"
    },
    {
        TitoloLibro: "Il Signore degli Anelli",
        Autore: "J.R.R. Tolkien",
        Genere: "Fantasy"
    },
    {
        TitoloLibro: "Cronache del ghiaccio e del fuoco (Il Trono di Spade)",
        Autore: "George R.R. Martin",
        Genere: "Fantasy epico"
    },
    {
        TitoloLibro: "Orgoglio e pregiudizio",
        Autore: "Jane Austen",
        Genere: "Romanzo romantico"
    },
    {
        TitoloLibro: "Harry Potter e la Pietra Filosofale",
        Autore: "J.K. Rowling",
        Genere: "Letteratura fantastica per ragazzi"
    },
    {
        TitoloLibro: "Cime tempestose",
        Autore: "Emily Brontë",
        Genere: "Romanzo gotico"
    },
    {
        TitoloLibro: "Il Grande Gatsby",
        Autore: "F. Scott Fitzgerald",
        Genere: "Romanzo moderno"
    },
    {
        TitoloLibro: "Cent'anni di solitudine",
        Autore: "Gabriel García Márquez",
        Genere: "Realismo magico"
    },
    {
        TitoloLibro: "Lo Hobbit",
        Autore: "J.R.R. Tolkien",
        Genere: "Fantasy"
    },
    {
        TitoloLibro: "Moby Dick",
        Autore: "Herman Melville",
        Genere: "Romanzo avventuroso"
    }
];

app.use(express.json());

app.get('/prenotazioni_libri', (req, res) => {
    res.status(200).json(ListaLibri);
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
