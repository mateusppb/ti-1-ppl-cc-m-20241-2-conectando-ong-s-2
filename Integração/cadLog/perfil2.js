document.addEventListener('DOMContentLoaded', function () {
    const userEmail = localStorage.getItem('loggedInUser');
    if (!userEmail) {
        window.location.href = 'index.html';
    } else {
        document.getElementById('userEmail').textContent = userEmail;
    }

    document.getElementById('logoutButton').addEventListener('click', function () {
        localStorage.removeItem('loggedInUser');
        window.location.href = 'index.html';
    });
});
