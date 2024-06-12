function logout() {
    // Remover os dados do usuário atual do localStorage
    localStorage.removeItem("name");
    localStorage.removeItem("email");

    // Redirecionar para a página de login
    window.location.href = "../inicial/index.html";
}
