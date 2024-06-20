document.getElementById('botao-filtro').addEventListener('click', function() {
    var filtros = document.getElementById('filtros');
    if (filtros.style.display === 'flex') {
        filtros.style.display = 'none';
    } else {
        filtros.style.display = 'flex';
    }
});