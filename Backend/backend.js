const fs = require('fs');
const http = require('http');
const express = require('express')
const app = express()

app.use(express.json())

const users = [
    {
        TitoloLIbro: "1984",
        Autore: "George Orwell",
        Genere: "Romanzo distopico"
    },
    {
        TitoloLIbro: "Il Signore degli Anelli",
        Autore: "J.R.R. Tolkien",
        Genere: "Fantasy"
    },
    {
        TitoloLIbro: "Il Signore degli Anelli",
        Autore: "J.R.R. Tolkien",
        Genere: "Fantasy"
    },
    {
        TitoloLIbro: "Cronache del ghiaccio e del fuoco (Il Trono di Spade)",
        Autore: "George R.R. Martin",
        Genere: "Fantasy epico"
    },
    {
        TitoloLIbro: "Orgoglio e pregiudizio",
        Autore: "Jane Austen",
        Genere: "Romanzo romantico"
    },
    {
        TitoloLIbro: "Harry Potter e la Pietra Filosofale",
        Autore: "J.K. Rowling",
        Genere: "Letteratura fantastica per ragazzi"
    },
    /*
    
    "Cime tempestose"

Autore: Emily Brontë
Genere: Romanzo gotico
"Il Grande Gatsby"

Autore: F. Scott Fitzgerald
Genere: Romanzo moderno
"Cent'anni di solitudine"

Autore: Gabriel García Márquez
Genere: Realismo magico
"Lo Hobbit"

Autore: J.R.R. Tolkien
Genere: Fantasy
"Moby Dick"

Autore: Herman Melville
Genere: Romanzo avventuroso
    
    */
];

const html = fs.readFileSync('./Frontend/menu.html', 'utf-8');

const server = http.createServer((req, res) => {
    res.end(html);
    console.log('richiesta');
});

server.listen(4000, () => {
    console.log('server_startato');
});