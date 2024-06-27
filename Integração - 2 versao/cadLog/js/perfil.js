document.addEventListener('DOMContentLoaded', function() {
    const users = JSON.parse(localStorage.getItem("users"));
    if (users && users.length > 0) {
        const user = users[0];
        document.getElementById('userName').textContent = user.name;
        document.getElementById('userEmail').textContent = user.email;
    } else {
        // Se não houver usuário logado, redireciona para a página de login
        window.location.href = 'login.html';
    }
});

function logOut() {
    localStorage.removeItem("users");
    window.location.href = "index.html"; // Redireciona para a página inicial após logout
}
