const users = [
    { username: "simone", password: "austeri" },
    { username: "mattia", password: "fiocchi" },
    { username: "nicola", password: "moscatelli" },
];

function login() {
    const enteredUsername = document.getElementById("username").value;
    const enteredPassword = document.getElementById("password").value;

    const correctUsername = "mattia";  // Sostituisci con il tuo username corretto
    const correctPassword = "fiocchi";  // Sostituisci con la tua password corretta

    if (enteredUsername === correctUsername && enteredPassword === correctPassword) {
        alert("Login amministratore riuscito!");
        window.location.href = "/amministratore/amministratore.html";
    } else {
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
        alert("Credenziali non valide. Riprova.");
    }
}


