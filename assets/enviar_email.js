document.addEventListener("DOMContentLoaded", function() {
  if (typeof emailjs !== "undefined") {
    emailjs.init("UF1QSKpNpI0WKgweL");

    const form = document.getElementById("subscriptionForm");
    form.addEventListener("submit", function(event) {
      event.preventDefault();

      emailjs.sendForm("nav.info.suporte", "formulario", this)
        .then(response => {
          alert("Mensagem enviada com sucesso!");
          form.reset();
          console.log("Mensagem enviada:", response);
        }, error => {
          alert("Erro ao enviar a mensagem. Tente novamente.");
          console.error("Erro:", error);
        });
    });
  } else {
    console.error("EmailJS não carregou corretamente.");
  }
});
