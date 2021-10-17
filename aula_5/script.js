var listagemFilmes = [];
var listaImagem = [];
var linkImagem = document.getElementById("link").value;
listagemFilmes.push(linkImagem);

function adicionarFilme() {
  var nomeFilme = document.getElementById("nome-filme").value;
  var linkImagem = document.getElementById("link").value;
  if (linkImagem.endsWith(".jpg")) {
    listarNaTela(linkImagem, nomeFilme);
  } else if (linkImagem == "") {
    var repetido = document.getElementById("repetido");
    repetido.innerHTML = "!! INSIRA UM LINK !!";
  } else {
    var repetido = document.getElementById("repetido");
    repetido.innerHTML = "!! O LINK NÃO É VÁLIDO !!";
  }
  document.getElementById("link").value = "";
  document.getElementById("nome-filme").value = "";
  //listagemFilmes.push(linkImagem);
}

function listarNaTela(linkImagem, nomeFilme) {
  var adiciona = 0;

  console.log(nomeFilme);

  listagemFilmes.forEach(function (item, indice, array) {
    if (item == linkImagem) {
      adiciona++;
      var repetido = document.getElementById("repetido");
      repetido.innerHTML = " !! JÁ TEM ESSE FILME !! ";
    }
  });
  if (adiciona == 0) {
    listagemFilmes.push(linkImagem);

    var filmeAdicionado =
      "<figure>" +
      "<figcaption>" +
      nomeFilme +
      "</figcaption>" +
      "<img src=" +
      linkImagem +
      ">" +
      "</figure>";
    listaImagem.push(filmeAdicionado);

    var listaFilmes = document.getElementById("listaFilmes");

    console.log(nomeFilme);
    listaFilmes.innerHTML = listaImagem;

    // for (var i = 0; i < listaImagem.length; i++) {
    //   listaFilmes.innerHTML = listaImagem;
    //   //   document.write("<img src=" + linkImagem + ">");
    // }

    var repetido = document.getElementById("repetido");
    repetido.innerHTML = "!! FILME ADICIONADO !! ";
  }
}

function removerPrimeiroFilme() {}
// for (var i = 0; i < listaFilmes.length; i++) {
//   document.write("<img src=" + linkImagem + ">");
// }