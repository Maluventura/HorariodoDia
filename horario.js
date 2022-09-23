function carregar() {
  let mensagem = window.document.getElementById("mensagem");
  let img = window.document.getElementById("imagem");
  let tenha = window.document.getElementById("tenha");
  let data = new Date();
  let hora = data.getHours();
  let minutos = data.getMinutes();
  mensagem.innerText = ` Agora são ${hora}:${minutos} horas`;
  if (hora >= 0 && hora < 12) {
    img.src = "manha.jpg";
    document.body.style.background = "#FBBF02";
    tenha.innerText = "Tenha um ótimo dia!";
  } else if (hora > 12 && hora < 18) {
    img.src = "tarde.jpg";
    document.body.style.background = "#FA7502";
    tenha.innerText = "Tenha uma ótima tarde!";
  } else {
    img.src = "noite.jpg";
    document.body.style.background = "#122B35";
    tenha.innerText = "Tenha uma ótima noite";
  }
}
