const users = [
    { username: "simone", password: "austeri" },
    { username: "mattia", password: "fiocchi" },
    { username: "nicola", password: "moscatelli" },
];

function login() {
    const enteredUsername = document.getElementById("username").value;
    const enteredPassword = document.getElementById("password").value;

    const user = users.find(user => user.username === enteredUsername && user.password === enteredPassword);

    if (user) {
        alert("Login amministratore riuscito!");
        window.location.href = "/Frontend/Amministratore/amministratore.html";
    } else {
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
        alert("Credenziali non valide. Riprova.");
    }
}
