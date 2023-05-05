function crime() {
  // Receber valores dos inputs tipo radio
  let telefone, local, mora, devia, trabalhou, resultado;

  telefone = document.getElementsByName("tel").item(0).checked;
  local = document.getElementsByName("local").item(0).checked;
  mora = document.getElementsByName("mora").item(0).checked;
  devia = document.getElementsByName("devia").item(0).checked;
  trabalhou = document.getElementsByName("trabalhou").item(0).checked;

  // console.log(telefone, local, mora, devia, trabalhou);

  resultado = telefone + local + mora + devia + trabalhou;

  if (resultado == 5) {
    document.getElementById("resultado").innerHTML = "Culpado";
  } else if (resultado < 5 && resultado >= 3) {
    document.getElementById("resultado").innerHTML = "Cúmplice";
  } else if (resultado == 2) {
    document.getElementById("resultado").innerHTML = "Suspeito";
  } else {
    document.getElementById("resultado").innerHTML = "Inocente";
  }
}
