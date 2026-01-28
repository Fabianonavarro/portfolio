// Inicializa EmailJS com sua chave pública
emailjs.init("UF1QSKpNpI0WKgweL"); // Substitua pela sua chave pública ativa

// Captura envio do formulário
const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  // Substitua com seus Service ID e Template ID corretos
  const serviceID = "seu_service_id";     // ex: "service_xxx"
  const templateID = "seu_template_id";   // ex: "template_xxx"

  emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      alert("Mensagem enviada com sucesso!");
      form.reset();
    }, (err) => {
      console.error("Erro detalhado EmailJS:", err);
      alert("Erro ao enviar a mensagem. Veja o console para detalhes.");
    });
});
