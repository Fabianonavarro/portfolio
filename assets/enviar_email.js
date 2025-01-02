// Inicializa o EmailJS após o carregamento do script
window.onload = function() {
  // Verifica se o emailjs foi carregado corretamente
  if (typeof emailjs !== "undefined") {
    // Inicializa o EmailJS com a sua chave pública
    emailjs.init("UF1QSKpNpI0WKgweL");  // Substitua com a sua chave pública

    // Captura o envio do formulário
    document.getElementById("subscriptionForm").addEventListener("submit", function(event) {
      event.preventDefault(); // Impede o envio padrão do formulário

      // Envia o formulário para o EmailJS usando o método sendForm
      emailjs.sendForm("nav.info.suporte", "formulario", this)
        .then(function(response) {
          // Mensagem de sucesso
          alert("Mensagem enviada com sucesso!");
          // Limpa os campos do formulário após o envio bem-sucedido
          document.getElementById("subscriptionForm").reset();
          console.log('Mensagem enviada com sucesso:', response);
        }, function(error) {
          // Mensagem de erro
          alert("Erro ao enviar a mensagem. Tente novamente.");
          console.error("Erro ao enviar a mensagem:", error);
          console.log('Detalhes do erro:', error);
        });
    });
  } else {
    console.error("Erro: EmailJS não foi carregado corretamente.");
  }
};
