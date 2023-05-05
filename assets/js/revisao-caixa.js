function saque() {
  // Saque caixa eletrônico

  let valor, resto, notas100, notas50, notas20, notas10, notas5, notas2, notas1;

  valor = document.getElementById("valor").value;

  // Verifica se o valor foi informado
  if (valor == "") {
    alert("Informe o valor a ser sacado!");
    return;
  }

  // Verifica se o valor é maior que R$ 10,00
  if (valor < 10) {
    alert("O valor mínimo para saque é R$ 10,00");
    return;
  }

  // Verifica se o valor é menor que R$ 1.000,00
  if (valor > 1000) {
    alert("O valor máximo para saque é R$ 1.000,00");
    return;
  }

  // Notas de 100
  resto = valor % 100;
  notas100 = (valor - resto) / 100;
  valor = resto;

  // Notas de 50
  resto = valor % 50;
  notas50 = (valor - resto) / 50;
  valor = resto;

  // Notas de 20
  resto = valor % 20;
  notas20 = (valor - resto) / 20;
  valor = resto;

  // Notas de 10
  resto = valor % 10;
  notas10 = (valor - resto) / 10;
  valor = resto;

  // Notas de 5
  resto = valor % 5;
  notas5 = (valor - resto) / 5;
  valor = resto;

  // Notas de 2
  resto = resto % 2;
  notas2 = (valor - resto) / 2;
  valor = resto;

  // Notas de 1
  notas1 = resto;

  // Exibe o resultado
  document.getElementById("notas100").innerHTML = notas100;
  document.getElementById("notas50").innerHTML = notas50;
  document.getElementById("notas20").innerHTML = notas20;
  document.getElementById("notas10").innerHTML = notas10;
  document.getElementById("notas5").innerHTML = notas5;
  document.getElementById("notas2").innerHTML = notas2;
  document.getElementById("notas1").innerHTML = notas1;
}
