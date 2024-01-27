// Esempio di array per conservare gli utenti (da sostituire con un database)
const users = [
    { username: "simone", password: "austeri" },
    
];

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        alert("Login riuscito!");
        
        window.location.href = "menu.html";
    } else {
        alert("Credenziali non valide. Riprova.");
    }
}

function register() {
    const newUsername = document.getElementById("newUsername").value;
    const newPassword = document.getElementById("newPassword").value;

    // Verifica se l'utente esiste già
    if (users.some(u => u.username === newUsername)) {
        alert("Username già in uso. Scegline un altro.");
    } else {
        // Aggiungi il nuovo utente (in un'applicazione del mondo reale, dovresti gestire la memorizzazione dei dati)
        users.push({ username: newUsername, password: newPassword });
        alert("Registrazione riuscita! Ora puoi effettuare il login.");
    }
}

function redirectToLogin() {
    // Redirect to the login page
    window.location.href = "login.html";
}

document.getElementById("confirmPassword").addEventListener("input", function () {
    const newPassword = document.getElementById("newPassword").value;
    const confirmPassword = this.value;

    const message = document.getElementById("passwordMatchMessage");

    if (newPassword === confirmPassword) {
        message.innerHTML = "Le password corrispondono.";
        message.style.color = "green";
    } else {
        message.innerHTML = "Le password non corrispondono.";
        message.style.color = "red";
    }
});
