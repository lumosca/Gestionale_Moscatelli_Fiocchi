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

function login() {
    // Get values from the form
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Make a POST request to the login endpoint (adjust the URL accordingly)
    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: username,
            password: password,
        }),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Invalid credentials');
        }
        return response.json();
    })
    .then(data => {
        console.log('Login successful:', data.message);
        // You can redirect or perform other actions upon successful login
    })
    .catch(error => {
        console.error('Login failed:', error.message);
        // Handle login failure (display error message, etc.)
    });
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