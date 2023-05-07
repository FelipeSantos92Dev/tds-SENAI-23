function ordenar() {
  let lista = [];
  let ordenado = [];

  lista[0] = Number(document.getElementById("n1").value);
  lista[1] = Number(document.getElementById("n2").value);
  lista[2] = Number(document.getElementById("n3").value);

  // Verificação de campos vazios
  if (lista[0] == "" || lista[1] == "" || lista[2] == "") {
    alert("Preencha todos os campos!");
    return;
  }

  // Short way :)
  // document.getElementById("resultado").innerHTML = lista.sort();

  // Long way :(
  if (lista[0] <= lista[1] && lista[0] <= lista[2]) {
    // lista[0] é o menor
    ordenado[0] = lista[0];
    if (lista[1] <= lista[2]) {
      // lista[1] é o segundo menor
      // lista[2] é o menor
      ordenado[1] = lista[1];
      ordenado[2] = lista[2];
    } else {
      // lista[2] é o segundo menor
      // lista[1] é o menor
      ordenado[1] = lista[2];
      ordenado[2] = lista[1];
    }
  }

  if (lista[1] <= lista[0] && lista[1] <= lista[2]) {
    // lista[1] é o menor
    ordenado[0] = lista[1];
    if (lista[0] <= lista[2]) {
      // lista[0] é o segundo menor
      // lista[2] é o menor
      ordenado[1] = lista[0];
      ordenado[2] = lista[2];
    } else {
      // lista[2] é o segundo menor
      // lista[0] é o menor
      ordenado[1] = lista[2];
      ordenado[2] = lista[0];
    }
  }

  if (lista[2] <= lista[0] && lista[2] <= lista[1]) {
    // lista[2] é o menor
    ordenado[0] = lista[2];
    if (lista[0] <= lista[1]) {
      // lista[0] é o segundo menor
      // lista[1] é o menor
      ordenado[1] = lista[0];
      ordenado[2] = lista[1];
    } else {
      // lista[1] é o segundo menor
      // lista[0] é o menor
      ordenado[1] = lista[1];
      ordenado[2] = lista[0];
    }
  }

  document.getElementById("resultado").innerHTML = ordenado;
}
