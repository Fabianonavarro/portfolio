// Verifica se o EmailJS foi carregado
if (typeof emailjs !== "undefined") {
  // Inicializa EmailJS com sua chave pública
  emailjs.init("UF1QSKpNpI0WKgweL"); // Substitua com sua chave pública

  // Espera o DOM carregar completamente
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("subscriptionForm");
    if (!form) return console.error("Formulário não encontrado!");

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      emailjs.sendForm("nav.info", "formulario", this)
        .then(function (response) {
          alert("Mensagem enviada com sucesso!");
          form.reset();
          console.log("Mensagem enviada:", response);
        })
        .catch(function (error) {
          alert("Erro ao enviar a mensagem. Veja o console para detalhes.");
          console.error("Erro detalhado EmailJS:", error);
        });
    });
  });
} else {
  console.error("Erro: EmailJS não foi carregado corretamente.");
}
