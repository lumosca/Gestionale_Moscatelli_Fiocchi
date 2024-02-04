const users = [
    { username: "simone", password: "austeri" },
    { username: "mattia", password: "fiocchi" },
    { username: "nicola", password: "moscatelli" },
];

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (username === users && password === password) {
        alert("Login amministratore riuscito!");

        window.location.href = "amministratore.html";
    } else {
        const user = users.find(u => u.username === username && u.password === password);

        if (user) {
            alert("Login amministratore riuscito!");
            window.location.href = "amministratore.html";
        } else {
            alert("Credenziali non valide. Riprova.");
        }
    }
}
