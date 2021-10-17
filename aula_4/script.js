var listagemFilmes = [];
var linkImagem = document.getElementById("link").value;
listagemFilmes.push(linkImagem);

function adicionarFilme() {
  var linkImagem = document.getElementById("link").value;
  //listagemFilmes.push(linkImagem);
  var adiciona = 0;

  listagemFilmes.forEach(function (item, indice, array) {
    console.log("Item e indice: " + item, indice);
    console.log("Link da imagem: " + linkImagem);
    console.log("Lista de filmes: " + listagemFilmes);

    if (item == linkImagem) {
      console.log(" Ja tem esse filme! ");
      adiciona++;
      console.log(adiciona + " valor do adiciona");
      var repetido = document.getElementById("repetido");
      repetido.innerHTML = " Ja tem esse filme! ";
    }
    if (linkImagem == "") {
      repetido.innerHTML = " Insira um link! ";
    }
  });
  if (adiciona == 0) {
    listagemFilmes.push(linkImagem);
    var filmeAdicionado = "<img src=" + linkImagem + ">";
    var listaFilmes = document.getElementById("listaFilmes");
    listaFilmes.innerHTML = listaFilmes.innerHTML + filmeAdicionado;
    console.log("lista " + listagemFilmes);
    console.log("valor do adiciona: " + adiciona);
    repetido.innerrHTML = "Filme Adicionado";
  }
}
// for (var i = 0; i < listaFilmes.length; i++) {
//   document.write("<img src=" + linkImagem + ">");
// }