const dbFilePath = 'db.json';

async function loadDatabase() {
    const response = await fetch(dbFilePath);
    const data = await response.json();
    return data;
}

async function saveDatabase(data) {
    const response = await fetch(dbFilePath, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response.json();
}

document.getElementById('registerForm').addEventListener('submit', async function (event) {
    event.preventDefault();
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;

    const db = await loadDatabase();
    
    if (db.users.some(user => user.email === email)) {
        alert('Email já cadastrado!');
        return;
    }

    db.users.push({ email, password });
    await saveDatabase(db);

    alert('Cadastro realizado com sucesso!');
});

document.getElementById('loginForm').addEventListener('submit', async function (event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const db = await loadDatabase();

    const user = db.users.find(user => user.email === email && user.password === password);

    if (user) {
        localStorage.setItem('loggedInUser', email);
        window.location.href = 'profile.html';
    } else {
        alert('Email ou senha incorretos!');
    }
});
