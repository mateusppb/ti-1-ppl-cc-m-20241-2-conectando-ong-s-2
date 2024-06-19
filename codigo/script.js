$(document).ready(function() {
    // Função para obter os dados do servidor
    function getContatos() {
      console.log("Obtendo dados do servidor...");
      $.ajax({
        url: 'http://localhost:3001/api/ongs', // URL do seu servidor
        type: 'GET',
        success: function(data) {
          console.log("Dados obtidos com sucesso:", data);
          // Chama a função para exibir os contatos na página
          listContacts(data);
        },
        error: function(jqXHR, textStatus, errorThrown) {
          console.log('Erro ao obter os dados do servidor:', textStatus, errorThrown);
        }
      });
    }

    // Função para exibir os contatos na página
    function listContacts(contacts) {
      console.log("Exibindo contatos na página...");
      const datawrapper = $('#JSON');

      // Limpa o conteúdo existente na div
      datawrapper.empty();

      // Itera sobre os contatos e cria os elementos HTML
      contacts.forEach(function(element) {
        const contactDiv = $('<div>').addClass('contact');

        const namePara = $('<p>').addClass('json').html('<strong>Nome:</strong> <span class="nome">' + element.nome + '</span>');
        const locationPara = $('<p>').addClass('json').html('<strong>Local:</strong> <span class="local">' + element.local + '</span>');
        const contactPara = $('<p>').addClass('json').html('<strong>Contato:</strong> <span class="contato">' + element.contato + '</span>');

        // Adiciona os elementos à div
        contactDiv.append(namePara, locationPara, contactPara);
        datawrapper.append(contactDiv);
      });
    }

    // Chama a função para obter os dados do servidor ao carregar a página
    getContatos();
    //Entre em contato
    emailjs.init({
      publicKey: "PUHknr8cVE42JEaDl",
    });
    document.getElementById("conteiner").addEventListener("submit", function(event){
      event.preventDefault();
      console.log("Eniviando email")
      emailjs.sendForm("service_r3d1vdj", "template_aadpli4", this).then(function (res){
        console.log("Email enviado")
        alert("Enviada!" + res.status);
        console.log (res);
      }).catch(function(error){
        console.error(error)
      })
    })
});
