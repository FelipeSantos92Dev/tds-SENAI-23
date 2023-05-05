// Importa o módulo "readline" do Node.js para interação com o terminal
const readline = require("readline");

// Cria uma interface para leitura e escrita no terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Função que executa a calculadora
function calcular() {
  rl.question("Digite o primeiro número: ", (num1) => {
    rl.question("Digite o segundo número: ", (num2) => {
      rl.question("Digite a operação (+, -, *, /): ", (operacao) => {
        // Converte as strings dos números para números reais
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);

        // Realiza a operação solicitada e exibe o resultado
        if (operacao === "+") {
          console.log(`${num1} + ${num2} = ${num1 + num2}`);
        } else if (operacao === "-") {
          console.log(`${num1} - ${num2} = ${num1 - num2}`);
        } else if (operacao === "*") {
          console.log(`${num1} * ${num2} = ${num1 * num2}`);
        } else if (operacao === "/") {
          console.log(`${num1} / ${num2} = ${num1 / num2}`);
        } else {
          console.log("Operação inválida.");
        }

        // Fecha a interface e encerra o programa
        rl.close();
      });
    });
  });
}

// Chama a função para executar a calculadora
calcular();
