const users = [
    { username: "simone", password: "austeri" },
    { username: "francesco ", password: "magaletti" },
    { username: "mattia", password: "fiocchi" },
    { username: "nicola", password: "moscatelli" },
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


    if (users.some(u => u.username === newUsername)) {
        alert("Username già in uso. Scegline un altro.");
    } else {

        users.push({ username: newUsername, password: newPassword });
        alert("Registrazione riuscita! Ora puoi effettuare il login.");
    }
}

function redirectToLogin() {

    window.location.href = "login.html";
}

document.getElementById("confirmPassword").addEventListener("input", function () {
    const newPassword = document.getElementById("newPassword").value;
    const confirmPassword = this.value;

    const message = document.getElementById("passwordMatchMessage");

    if (newPassword === confirmPassword) {
        message.innerHTML = "le password corrispondono.";
        message.style.color = "green";
    } else {
        message.innerHTML = "le password non corrispondono.";
        message.style.color = "red";
    }
});


/*async fetch('http://localhost:3000/prenotazione_libri'){
    await response = 
}*/