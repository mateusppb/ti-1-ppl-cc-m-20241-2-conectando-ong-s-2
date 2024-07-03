document.addEventListener('DOMContentLoaded', function() {
    const usuarios = [
        {
            nome: "João Silva",
            email: "joao.silva@email.com",
            telefone: "(11) 98765-4321",
            cidade: "São Paulo",
            estado: "SP",
            status: "Voluntário",
            descricaoInteresse: "Experiência em educação e assistência social, ajudo diversas ONGs que se localizam por toda a cidade de São Paulo"
        },
        {
            nome: "Maria Oliveira",
            email: "maria.oliveira@email.com",
            telefone: "(21) 91234-5678",
            cidade: "Rio de Janeiro",
            estado: "RJ",
            status: "Doador",
            descricaoInteresse: "Apaixonada por ajudar animais de rua, gosto de ajudar ONGs que se situem perto da minha casa"
        }
    ];

    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get('id') || 0; // Default to the first user if no ID is specified
    const user = usuarios[userId];

    document.getElementById('nome-usuario').textContent = user.nome;
    document.getElementById('email-usuario').textContent = user.email;
    document.getElementById('telefone-usuario').textContent = user.telefone;
    document.getElementById('cidade-usuario').textContent = user.cidade;
    document.getElementById('estado-usuario').textContent = user.estado;
    document.getElementById('status-usuario').textContent = user.status;
    document.getElementById('descricao-interesse').textContent = user.descricaoInteresse;
});
