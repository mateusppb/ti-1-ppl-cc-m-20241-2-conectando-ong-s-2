document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('form');
    const header = document.querySelector("header");

    form.addEventListener('submit', async function(event) {
        event.preventDefault();
        
        const formData = new FormData(form);

        // Captura dos dados do formulário
        const nomeONG = document.getElementById('InputNome').value;
        const email = document.getElementById('InputEmail').value;
        const logomarca = document.querySelector('input[type="file"]').value;
        const horarioFuncionamento = document.querySelector('input[type="horario"]').value;
        const categoria = document.getElementById('categoria').value;
        const pixDoacoes = document.querySelector('input[type="text"]').value;
        const contatosRedesSociais = document.querySelector('input[name="contatosRedesSociais"]').value;
        const oQueDoar = document.querySelector('input[type="doacao"]').value;
        const sobreONG = document.querySelector('textarea[name="sobreONG"]').value;

        // Exemplo de como mostrar os dados capturados
        console.log('Nome da ONG:', nomeONG);
        console.log('Email:', email);
        console.log('Logomarca da ONG:', logomarca);
        console.log('Horário de Funcionamento:', horarioFuncionamento);
        console.log('Categoria da ONG:', categoria);
        console.log('PIX para doações:', pixDoacoes);
        console.log('Contatos e Redes Sociais:', contatosRedesSociais);
        console.log('O que doar:', oQueDoar);
        console.log('Sobre a ONG:', sobreONG);

        alert('Dados enviados com sucesso!');

        // Recarrega a página
        window.location.reload();
    });
});

/*document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Captura dos dados do formulário
        const nomeONG = document.getElementById('InputNome').value;
        const email = document.getElementById('InputEmail').value;
        const logomarca = document.querySelector('input[type="file"]').value; // Isso captura apenas o nome do arquivo, não o arquivo em si
        const horarioFuncionamento = document.querySelector('input[name="horarioFuncionamento"]').value;
        const categoria = document.getElementById('categoria').value;
        const pixDoacoes = document.querySelector('input[name="pixDoacoes"]').value;
        const contatosRedesSociais = document.querySelector('input[name="contatosRedesSociais"]').value;
        const oQueDoar = document.querySelector('input[name="oQueDoar"]').value;
        const sobreONG = document.querySelector('textarea[name="sobreONG"]').value;

        // Criação do objeto JSON com os dados
        const formData = {
            nomeONG: nomeONG,
            email: email,
            logomarca: logomarca, // Verifique se o valor capturado aqui está correto para o seu caso
            horarioFuncionamento: horarioFuncionamento,
            categoria: categoria,
            pixDoacoes: pixDoacoes,
            contatosRedesSociais: contatosRedesSociais,
            oQueDoar: oQueDoar,
            sobreONG: sobreONG
        };

        // Convertendo o objeto em JSON
        const jsonData = JSON.stringify(formData);

        // Armazenando os dados na sessionStorage
        sessionStorage.setItem('formData', jsonData);
        
        window.location.reload();

        form.reset();

        alert('Formulário enviado com sucesso!');

        // Opcional: Remover alerta após alguns segundos
        // setTimeout(() => {
        //     alertElement.style.display = 'none';
        // }, 3000);
    });
});
*/
