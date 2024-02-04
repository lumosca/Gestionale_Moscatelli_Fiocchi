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
app.post('/aggiungi_libro', (req, res) => {
    const nuovoLibro = req.body;

    if (!nuovoLibro || !nuovoLibro.TitoloLibro || !nuovoLibro.Autore || !nuovoLibro.Genere) {
        res.status(400).json({ error: 'Il libro deve avere un titolo, un autore e un genere.' });
        return;
    }

    ListaLibri.push(nuovoLibro);

    res.status(201).json({ message: 'Libro aggiunto con successo.', libro: nuovoLibro });
});*/

app.post('/ListaLibri', (req, res)=>{
    console.log(req.body)
    let TitoloLibro = req.body.TitoloLibro
    let Autore = req.body.Autore
    let Genere = req.body.Genere
    if(TitoloLibro && Autore && Genere){
        //creo nuovo utente
        //let id = users.length + 1
        let id = ListaLibri[ListaLibri.length -1].id +1
        const nuoviLibri = {
            TitoloLibro,
            Autore,
            Genere
        }
        ListaLibri.push(nuoviLibri)
        res.status(200).json(nuoviLibri)
    }
    res.status(400).send("formato del body errato")
});


app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});


const form = document.getElementById('aggiungiLibroForm');
const listaLibri = document.querySelector('.lista-libri');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    aggiungiLibro();
});
