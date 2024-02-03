// client.js

function getUsers() {
  fetch('http://localhost:3000/users')
    .then(response => response.json())
    .then(data => console.log('Users:', data))
    .catch(error => console.error('Error:', error));
}

function getUserById(id) {
  fetch(`http://localhost:3000/users/${id}`)
    .then(response => response.json())
    .then(data => console.log('User by ID:', data))
    .catch(error => console.error('Error:', error));
}

function createUser() {
  const user = {
    name: 'John Doe',
    age: 25,
  };

  fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
    .then(response => response.json())
    .then(data => console.log('Created User:', data))
    .catch(error => console.error('Error:', error));
}

function updateUser(id) {
  const updatedUser = {
    name: 'Updated User',
    age: 30,
  };

  fetch(`http://localhost:3000/users/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedUser),
  })
    .then(response => response.json())
    .then(data => console.log('Updated User:', data))
    .catch(error => console.error('Error:', error));
}

function deleteUser(id) {
  fetch(`http://localhost:3000/users/${id}`, {
    method: 'DELETE',
  })
    .then(response => {
      if (response.ok) {
        console.log('User deleted successfully');
      } else {
        console.error('Error:', response.status);
      }
    })
    .catch(error => console.error('Error:', error));
}
