// Define uma função para realizar a operação solicitada
function operacao(num1, num2, operacao) {
  switch (operacao) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      return NaN;
  }
}

// Define uma função para ler um número a partir do terminal
function lerNumero(mensagem) {
  let numero = NaN;
  while (isNaN(numero)) {
    numero = parseFloat(prompt(mensagem));
  }
  return numero;
}

// Lê os números e a operação solicitada
let num1 = lerNumero("Digite o primeiro número:");
let num2 = lerNumero("Digite o segundo número:");
let operacao = prompt("Digite a operação (+, -, *, /):");

// Executa a operação solicitada e exibe o resultado
let resultado = operacao(num1, num2, operacao);
if (!isNaN(resultado)) {
  console.log(`${num1} ${operacao} ${num2} = ${resultado}`);
} else {
  console.log("Operação inválida.");
}
