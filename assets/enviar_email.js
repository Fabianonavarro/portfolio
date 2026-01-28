// enviar_email.js
// Inicializa o EmailJS após o carregamento do script
document.addEventListener("DOMContentLoaded", function () {
  if (typeof emailjs !== "undefined") {
    // Inicializa com sua chave pública
    emailjs.init("UF1QSKpNpI0WKgweL"); // sua chave pública EmailJS

    // Captura o envio do formulário
    const form = document.getElementById("subscriptionForm");
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // impede o envio padrão

      // Envia usando o ID do serviço atualizado
      emailjs.sendForm("nav.info", "formulario", this)
        .then(function (response) {
          alert("Mensagem enviada com sucesso!");
          form.reset(); // limpa campos
          console.log("Mensagem enviada com sucesso:", response);
        })
        .catch(function (error) {
          alert("Erro ao enviar a mensagem. Veja o console para detalhes.");
          console.error("Erro detalhado EmailJS:", error);
        });
    });
  } else {
    console.error("Erro: EmailJS não foi carregado corretamente.");
  }
});
