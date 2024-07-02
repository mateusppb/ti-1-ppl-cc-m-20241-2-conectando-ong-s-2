document.getElementById('botao-filtro').addEventListener('click', function() {
    var filtros = document.getElementById('filtros');
    if (filtros.style.display === 'flex') {
        filtros.style.display = 'none';
    } else {
        filtros.style.display = 'flex';
    }
});

const botaoBusca = document.getElementById('botao-busca');
botaoBusca.addEventListener('click', realizarBusca);

const inputBusca = document.getElementById('input-busca');
inputBusca.addEventListener('input', realizarBusca);

function realizarBusca() {
    const termoBusca = inputBusca.value.toLowerCase();
    const estadoSelecionado = document.getElementById('estado').value;
    const cidadeSelecionada = document.getElementById('cidade').value;

    const voluntariosFiltrados = filtrarVoluntarios(termoBusca, estadoSelecionado, cidadeSelecionada);
    exibirResultadosBusca(voluntariosFiltrados);
}

function filtrarVoluntarios(termoBusca, estadoSelecionado, cidadeSelecionada) {
    // Utilize o array de voluntários (que você provavelmente busca do seu banco de dados)
    const voluntarios = [
        // ... seus dados de voluntários
    ];

    let voluntariosFiltrados = voluntarios;

    // Filtra por termo de busca
    if (termoBusca) {
        voluntariosFiltrados = voluntariosFiltrados.filter(voluntario => {
            const nome = voluntario.nome.toLowerCase();
            const cidade = voluntario.cidade.toLowerCase();
            const sobre = voluntario.sobreVoluntario.toLowerCase();

            return nome.includes(termoBusca) || cidade.includes(termoBusca) || sobre.includes(termoBusca);
        });
    }

    // Filtra por estado
    if (estadoSelecionado && estadoSelecionado !== 'todos') {
        voluntariosFiltrados = voluntariosFiltrados.filter(voluntario => voluntario.estado === estadoSelecionado);
    }

    // Filtra por cidade
    if (cidadeSelecionada && cidadeSelecionada !== 'todas') {
        voluntariosFiltrados = voluntariosFiltrados.filter(voluntario => voluntario.cidade === cidadeSelecionada);
    }

    return voluntariosFiltrados;
}

function exibirResultadosBusca(voluntarios) {
    const listaVoluntarios = document.getElementById('lista-voluntarios');
    listaVoluntarios.innerHTML = ''; // Limpa a lista antes de exibir novos resultados

    voluntarios.forEach(voluntario => {
        const itemLista = document.createElement('li');
        itemLista.innerHTML = `
        <h3><span class="math-inline">\{voluntario\.nome\}</h3\>
        <p>{voluntario.cidade} - ${voluntario.estado}</p>
`;
listaVoluntarios.appendChild(itemLista);
});
}
