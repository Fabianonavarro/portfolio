// enviar_email.js

document.addEventListener("DOMContentLoaded", function () {
  // Verifica se o EmailJS foi carregado
  if (typeof emailjs === "undefined") {
    console.error("Erro: EmailJS não foi carregado corretamente.");
    return;
  }

  // Inicializa com a chave pública
  emailjs.init("UF1QSKpNpI0WKgweL");

  const form = document.getElementById("subscriptionForm");

  if (!form) {
    console.error("Formulário não encontrado na página.");
    return;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Envia o formulário para EmailJS
    emailjs.sendForm("nav.info.suporte", "formulario", this)
      .then(function (response) {
        alert("Mensagem enviada com sucesso!");
        form.reset();
        console.log("Mensagem enviada com sucesso:", response);
      })
      .catch(function (error) {
        alert("Erro ao enviar a mensagem. Veja o console para detalhes.");
        console.error("Erro detalhado EmailJS:", error);
      });
  });
});
