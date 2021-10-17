function ConverterParaDolar() {
  var valorEmReal = document.getElementById("valor");
  var valorReal = valorEmReal.value;
  if (valorReal == "") {
    valorReal = 0;
  }
  console.log(valorReal);
  var valorRealNumerico = parseFloat(valorReal);
  var valorConvertidoParaDolar = valorRealNumerico * 0.19;
  var valorConvertidoFixado = valorConvertidoParaDolar.toFixed(2);
  var outputDolar = document.getElementById("output-dolar");
  outputDolar.innerHTML = "US$ " + valorConvertidoFixado;
}

function ConverterParaEuro() {
  var valorEmReal = document.getElementById("valor");
  var valorReal = valorEmReal.value;
  if (valorReal == "") {
    valorReal = 0;
  }
  console.log(valorReal);
  var valorRealNumerico = parseFloat(valorReal);
  var valorConvertidoParaDolar = valorRealNumerico * 0.16;
  var valorConvertidoFixado = valorConvertidoParaDolar.toFixed(2);
  var outputDolar = document.getElementById("output-euro");
  outputDolar.innerHTML = "€ " + valorConvertidoFixado;
}

function ConverterParaPeso() {
  var valorEmReal = document.getElementById("valor");
  var valorReal = valorEmReal.value;
  if (valorReal == "") {
    valorReal = 0;
  }
  console.log(valorReal);
  var valorRealNumerico = parseFloat(valorReal);
  var valorConvertidoParaDolar = valorRealNumerico * 7.98;
  var valorConvertidoFixado = valorConvertidoParaDolar.toFixed(2);
  var outputDolar = document.getElementById("output-peso");
  outputDolar.innerHTML = "$ " + valorConvertidoFixado;
}

function ConverterParaFranco() {
  var valorEmReal = document.getElementById("valor");
  var valorReal = valorEmReal.value;
  if (valorReal == "") {
    valorReal = 0;
  }
  console.log(valorReal);
  var valorRealNumerico = parseFloat(valorReal);
  var valorConvertidoParaDolar = valorRealNumerico * 0.17;
  var valorConvertidoFixado = valorConvertidoParaDolar.toFixed(2);
  var outputDolar = document.getElementById("output-franco");
  outputDolar.innerHTML = "SFr " + valorConvertidoFixado;
}

function ConverterParaDinar() {
  var valorEmReal = document.getElementById("valor");
  var valorReal = valorEmReal.value;
  if (valorReal == "") {
    valorReal = 0;
  }
  console.log(valorReal);
  var valorRealNumerico = parseFloat(valorReal);
  var valorConvertidoParaDolar = valorRealNumerico * 0.53;
  var valorConvertidoFixado = valorConvertidoParaDolar.toFixed(2);
  var outputDolar = document.getElementById("output-dinar");
  outputDolar.innerHTML = "د.ت " + valorConvertidoFixado;
}

function ConverterParaRupia() {
  var valorEmReal = document.getElementById("valor");
  var valorReal = valorEmReal.value;
  if (valorReal == "") {
    valorReal = 0;
  }
  console.log(valorReal);
  var valorRealNumerico = parseFloat(valorReal);
  var valorConvertidoParaDolar = valorRealNumerico * 13.77;
  var valorConvertidoFixado = valorConvertidoParaDolar.toFixed(2);
  var outputDolar = document.getElementById("output-rupia");
  outputDolar.innerHTML = "₹  " + valorConvertidoFixado;
}

function ConverterParaLibra() {
  var valorEmReal = document.getElementById("valor");
  var valorReal = valorEmReal.value;
  if (valorReal == "") {
    valorReal = 0;
  }
  console.log(valorReal);
  var valorRealNumerico = parseFloat(valorReal);
  var valorConvertidoParaDolar = valorRealNumerico * 0.14;
  var valorConvertidoFixado = valorConvertidoParaDolar.toFixed(2);
  var outputDolar = document.getElementById("output-libra");
  outputDolar.innerHTML = "£  " + valorConvertidoFixado;
}

function ConverterParaCoroa() {
  var valorEmReal = document.getElementById("valor");
  var valorReal = valorEmReal.value;
  if (valorReal == "") {
    valorReal = 0;
  }
  console.log(valorReal);
  var valorRealNumerico = parseFloat(valorReal);
  var valorConvertidoParaDolar = valorRealNumerico * 1.19;
  var valorConvertidoFixado = valorConvertidoParaDolar.toFixed(2);
  var outputDolar = document.getElementById("output-coroa");
  outputDolar.innerHTML = "Kr " + valorConvertidoFixado;
}

function ConverterParaRublo() {
  var valorEmReal = document.getElementById("valor");
  var valorReal = valorEmReal.value;
  if (valorReal == "") {
    valorReal = 0;
  }
  console.log(valorReal);
  var valorRealNumerico = parseFloat(valorReal);
  var valorConvertidoParaDolar = valorRealNumerico * 13.81;
  var valorConvertidoFixado = valorConvertidoParaDolar.toFixed(2);
  var outputDolar = document.getElementById("output-rublo");
  outputDolar.innerHTML = "₽  " + valorConvertidoFixado;
}

function ConverterParaXelim() {
  var valorEmReal = document.getElementById("valor");
  var valorReal = valorEmReal.value;
  if (valorReal == "") {
    valorReal = 0;
  }
  console.log(valorReal);
  var valorRealNumerico = parseFloat(valorReal);
  var valorConvertidoParaDolar = valorRealNumerico * 435.47;
  var valorConvertidoFixado = valorConvertidoParaDolar.toFixed(2);
  var outputDolar = document.getElementById("output-xelim");
  outputDolar.innerHTML = "Sh " + valorConvertidoFixado;
}

function ConverterParaYuan() {
  var valorEmReal = document.getElementById("valor");
  var valorReal = valorEmReal.value;
  if (valorReal == "") {
    valorReal = 0;
  }
  console.log(valorReal);
  var valorRealNumerico = parseFloat(valorReal);
  var valorConvertidoParaDolar = valorRealNumerico * 1.22;
  var valorConvertidoFixado = valorConvertidoParaDolar.toFixed(2);
  var outputDolar = document.getElementById("output-yuan");
  outputDolar.innerHTML = "¥ " + valorConvertidoFixado;
}

function ConverterParaBitcoin() {
  var valorEmReal = document.getElementById("valor");
  var valorReal = valorEmReal.value;
  if (valorReal == "") {
    valorReal = 0;
  }
  console.log(valorReal);
  var valorRealNumerico = parseFloat(valorReal);
  var valorConvertidoParaDolar = valorRealNumerico * 0.0000039;
  var valorConvertidoFixado = valorConvertidoParaDolar.toFixed(7);
  var outputDolar = document.getElementById("output-bitcoin");
  outputDolar.innerHTML = "₿ " + valorConvertidoFixado;
}