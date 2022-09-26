function verificar() {
  const data = new Date();
  const anoatual = data.getFullYear();
  console.log(anoatual);
  const anousuario = window.document.getElementById("anodeNascimento");
  const resultado = window.document.getElementById("resultado");
  if (anousuario.value == 0 || anousuario.value >= anoatual) {
    window.alert("[ERRO] VERIFIQUE OS DADOS E TENTE NOVAMENTE");
  } else {
    const sexo = document.getElementsByName("sexo");
    const idade = anoatual - Number(anousuario.value);
    let genero = "";
    const img = document.createElement("img");
    img.setAttribute("id", "foto");
    if (sexo[0].checked) {
      genero = "Homem";
      if (idade > 0 && idade < 10) {
        img.setAttribute("src", "criancahomem.jpg");
      } else if (idade < 21) {
        img.setAttribute("src", "jovemhomen.jpg");
      } else if (idade < 50) {
        img.setAttribute("src", "homemadulto.jpg");
      } else {
        img.setAttribute("src", "idoso.jpg");
      }
    } else if (sexo[1].checked) {
      genero = "Mulher";
      if (idade > 0 && idade < 10) {
        img.setAttribute("src", "criancamulher.jpg");
      } else if (idade < 21) {
        img.setAttribute("src", "jovemmulher.jpg");
      } else if (idade < 50) {
        img.setAttribute("src", "mulheradulta.jpg");
      } else {
        img.setAttribute("src", "idosa.jpg");
      }
    }

    resultado.innerHTML = `Detectamos ${genero} com ${idade} anos`;
    resultado.appendChild(img);
  }
}
