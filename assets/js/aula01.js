function calcular() {
  let salario = document.getElementById("salarioInicial").value;
  let porcentagem;
  let aumento;
  let novoSalario;

  // Verifica se o campo está vazio
  if (salario == "") {
    alert("Preencha o campo com seu salário");
    return;
  }

  // Converte o valor para número
  salario = Number(salario);

  // Verifica se o valor é maior que 0
  if (salario <= 0) {
    alert("O salário deve ser maior que 0");
    return;
  }

  if (salario <= 6280) {
    // Verifica se o valor é menor ou igual que R$ 6.280,00
    porcentagem = "20%";
    aumento = salario * 0.2;
    novoSalario = salario + aumento;
  } else if (salario > 6280 && salario <= 8000) {
    // Verifica se o valor é maior que R$ 6.280,00 e menor ou igual que R$ 8.000,00
    porcentagem = "15%";
    aumento = salario * 0.15;
    novoSalario = salario + aumento;
  } else if (salario > 8000 && salario <= 15000) {
    // Verifica se o valor é maior que R$ 8.000,00 e menor ou igual que R$ 15.000,00
    porcentagem = "10%";
    aumento = salario * 0.1;
    novoSalario = salario + aumento;
  } else {
    // Verifica se o valor é maior que R$ 15.000,00
    porcentagem = "5%";
    aumento = salario * 0.05;
    novoSalario = salario + aumento;
  }

  //Exibição dos resultados
  document.getElementById("salIni").innerHTML = salario;
  document.getElementById("porc").innerHTML = porcentagem;
  document.getElementById("aumento").innerHTML = aumento;
  document.getElementById("salFin").innerHTML = novoSalario;
}
