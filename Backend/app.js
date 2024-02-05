const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

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
        TitoloLibro: "1984",
        Autore: "George Orwell",
        Genere: "Romanzo distopico"
    },
    {
        id: 4,
        TitoloLibro: "Il Signore degli Anelli",
        Autore: "J.R.R. Tolkien",
        Genere: "Fantasy"
    },
    {
        id: 5,
        TitoloLibro: "1984",
        Autore: "George Orwell",
        Genere: "Romanzo distopico"
    },
    {
        id: 6,
        TitoloLibro: "Il Signore degli Anelli",
        Autore: "J.R.R. Tolkien",
        Genere: "Fantasy"
    },
    {
        id: 7,
        TitoloLibro: "1984",
        Autore: "George Orwell",
        Genere: "Romanzo distopico"
    },
    {
        id: 8,
        TitoloLibro: "Il Signore degli Anelli",
        Autore: "J.R.R. Tolkien",
        Genere: "Fantasy"
    },
    {
        id: 9,
        TitoloLibro: "1984",
        Autore: "George Orwell",
        Genere: "Romanzo distopico"
    },
    {
        id: 10,
        TitoloLibro: "Il Signore degli Anelli",
        Autore: "J.R.R. Tolkien",
        Genere: "Fantasy"
    },
    // ... altri libri ...
];
/*

app.post('/aggiungi_libro', (req, res) => {
    const nuovoLibro = req.body;

    if (!nuovoLibro || !nuovoLibro.TitoloLibro || !nuovoLibro.Autore || !nuovoLibro.Genere) {
        res.status(400).json({ error: 'Il libro deve avere un titolo, un autore e un genere.' });
        return;
    }

    nuovoLibro.id = ListaLibri.length + 1;
    ListaLibri.push(nuovoLibro);

    res.status(201).json({ message: 'Libro aggiunto con successo.', libro: nuovoLibro });
});
*/
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

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
