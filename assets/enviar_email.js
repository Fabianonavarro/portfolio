// Espera o DOM carregar
document.addEventListener("DOMContentLoaded", function() {
  
  // Inicializa EmailJS (v4)
  emailjs.init("UF1QSKpNpI0WKgweL"); // Sua chave pública

  const form = document.getElementById("subscriptionForm");

  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Evita envio padrão

    // Envia o formulário
    emailjs.sendForm("nav.info.suporte", "formulario", form)
      .then(function(response) {
        alert("Mensagem enviada com sucesso!");
        form.reset(); // Limpa os campos
        console.log("EmailJS response:", response);
      })
      .catch(function(error) {
        alert("Erro ao enviar a mensagem. Veja o console para detalhes.");
        console.error("Erro EmailJS:", error);
      });
  });

});
