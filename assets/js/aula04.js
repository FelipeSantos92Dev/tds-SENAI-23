/* let numero = prompt("Adivinhe o meu número:");
let tentativas = 0;

const aleatorio = Math.floor(Math.random() * 10) + 1;

for (tentativas; numero != aleatorio; tentativas++) {
  if (numero > aleatorio) {
    alert("O número é menor");
  } else {
    alert("O número é maior");
  }

  numero = prompt("Tente mais uma vez:");
}

alert("Parabéns, você acertou!");
alert("Número de tentativas: " + tentativas);
 */

let numero = prompt("Digite a senha de acesso!");
let senha = "SENAI564";
let saida = false;

for (let tentativa = 0; saida != true; tentativa++) {
  if (numero == senha) {
    alert("Parabéns!");
    saida = true;
  } else if (tentativa < 2) {
    numero = prompt("Errou! Tente novamente!");
  } else {
    alert("Acabaram suas tentativas!");
    saida = true;
  }
}
