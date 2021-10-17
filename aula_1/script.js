var campo = document.getElementById("campo");
var valorCampo = campo.value;

function Resultado() {
  //Nota máxima e miníma:
  var min = 0;
  var max = 10;

  //Gerando "notas" aleátórias para cada um dos bimestres, fixadas em uma casa após o ponto:
  var notaDoPrimeiroBimestre = Math.random() * (max - min) + min;
  var notaFixadaPrimeiro = notaDoPrimeiroBimestre.toFixed(1);
  var outputPrimeiro = document.getElementById("output-primeiro-bimestre");
  outputPrimeiro.innerHTML = notaFixadaPrimeiro;

  var notaDoSegundoBimestre = Math.random() * (max - min) + min;
  var notaFixadaSegundo = notaDoSegundoBimestre.toFixed(1);
  var outputSegundo = document.getElementById("output-segundo-bimestre");
  outputSegundo.innerHTML = notaFixadaSegundo;

  var notaDoTerceiroBimestre = Math.random() * (max - min) + min;
  var notaFixadaTerceiro = notaDoTerceiroBimestre.toFixed(1);
  var outputTerceiro = document.getElementById("output-terceiro-bimestre");
  outputTerceiro.innerHTML = notaFixadaTerceiro;

  var notaDoQuartoBimestre = Math.random() * (max - min) + min;
  var notaFixadaQuarto = notaDoQuartoBimestre.toFixed(1);
  var outputQuarto = document.getElementById("output-quarto-bimestre");
  outputQuarto.innerHTML = notaFixadaQuarto;

  //Cálculo para a nota Final Fixada
  var notaFinal =
    (notaDoPrimeiroBimestre +
      notaDoSegundoBimestre +
      notaDoTerceiroBimestre +
      notaDoQuartoBimestre) /
    4;
  var notaFixada = notaFinal.toFixed(1); //Função para fixação das casas decimais.

  if (notaFixada < 6) {
    console.log("Bem Vindo " + campo);
    console.log("Sua Nota Final é " + notaFixada);
    console.log("Você está REPROVADO(A)! ");

    if (campo != "") {
      var outputMensagem = document.getElementById("output-mensagem");
      outputMensagem.innerHTML =
        campo.value +
        " você está REPROVADO(A), sua nota Final é: " +
        notaFixada;
    }
  } else {
    console.log("Bem Vindo " + campo);
    console.log("Sua Nota Final é " + notaFixada);
    console.log("Você está APROVADO(A)!");

    if (campo != "") {
      var outputMensagem = document.getElementById("output-mensagem");
      outputMensagem.innerHTML =
        campo.value + " você está APROVADO(A), sua nota Final é: " + notaFixada;
    }
  }

  //Desafio conta toda dentro do console.log()
  console.log(
    "Aqui a conta está dentro do console.log, sem o uso de nenhuma variável fixada ou variável: " +
      (notaDoPrimeiroBimestre +
        notaDoSegundoBimestre +
        notaDoTerceiroBimestre +
        notaDoQuartoBimestre) /
        4
  );
}