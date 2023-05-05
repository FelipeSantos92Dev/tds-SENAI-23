// Importa o módulo "readline" do Node.js para interação com o terminal
const readline = require("readline");

// Cria uma interface para leitura e escrita no terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Pergunta ao usuário um número e armazena em uma variável
rl.question("Digite um número: ", (numero) => {
  // Converte a string do número para um número real
  numero = parseFloat(numero);

  // Exibe o número na tela
  console.log(`O número digitado foi: ${numero}`);

  // Fecha a interface e encerra o programa
  rl.close();
});
