var numeroSecreto = parseInt(Math.random() * 11);

var tentativas = 0;

function Chutar() {
  var valorChute = parseInt(document.getElementById("valor").value);
  if (tentativas < 5) {
    console.log(tentativas);
    if (valorChute == numeroSecreto) {
      tentativas++;
      var mostrarTentativas = document.getElementById("tentativas");
      mostrarTentativas.innerHTML = "Tentou: " + tentativas;
      var resultado = document.getElementById("resultado");
      resultado.innerHTML = "PARABÉNS VOCÊ ACERTOU!!";
      var novoNumeroSecreto = parseInt(Math.random() * 11);
      numeroSecreto = novoNumeroSecreto;
      tentativas = 0;
    } else if (valorChute < numeroSecreto) {
      var resultado = document.getElementById("resultado");
      resultado.innerHTML = "TENTE UM VALOR MAIOR";
      tentativas++;
      var mostrarTentativas = document.getElementById("tentativas");
      mostrarTentativas.innerHTML = "Tentou: " + tentativas;
    } else if (valorChute > numeroSecreto) {
      var resultado = document.getElementById("resultado");
      resultado.innerHTML = "TENTE UM VALOR MENOR";
      tentativas++;
      var mostrarTentativas = document.getElementById("tentativas");
      mostrarTentativas.innerHTML = "Tentou: " + tentativas;
    } else {
      var resultado = document.getElementById("resultado");
      resultado.innerHTML = "DIGITE UM VALOR!";
    }
    if (valorChute > 10 || valorChute < 0) {
      var resultado = document.getElementById("resultado");
      resultado.innerHTML = "DIGITE UM NÚMERO ENTRE 0 E 10 ";
      tentativas++;
      var mostrarTentativas = document.getElementById("tentativas");
      mostrarTentativas.innerHTML = "Tentou: " + tentativas;
    }
  } else {
    var mostrarTentativas = document.getElementById("tentativas");
    mostrarTentativas.innerHTML =
      "Acabaram as " +
      tentativas +
      " tentativas o número secreto era: " +
      numeroSecreto;
    tentativas = 0;
    var novoNumeroSecreto = parseInt(Math.random() * 11);
    numeroSecreto = novoNumeroSecreto;
  }
}