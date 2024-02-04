const express = require('express');
const app = express();

app.use(express.json());

const users = [];

// Register endpoint
app.post('/register', (req, res) => {
    const { username, password } = req.body;

    // Check if the username is already taken
    if (users.some(user => user.username === username)) {
        return res.status(400).json({ error: 'Username already exists' });
    }

    // Add the new user to the array (in a real-world scenario, you would store this in a database)
    users.push({ username, password });

    res.status(201).json({ message: 'User registered successfully' });
});

// Login endpoint
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Find the user by username
    const user = users.find(user => user.username === username);

    // Check if the user exists
    if (!user) {
        return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Compare the provided password with the stored password
    if (user.password === password) {
        res.json({ message: 'Login successful' });
    } else {
        res.status(401).json({ error: 'Invalid credentials' });
    }
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});
