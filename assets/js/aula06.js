/* const numero = prompt("Digite um número inteiro e positivo: ");
let soma = 0;
let i = 0;
let separado = numero.split("");

// Verifica se o número é inteiro e positivo
if (numero % 1 != 0 || numero < 0) {
  alert("Número inválido!");
} else {
  do {
    soma += parseInt(separado[i]);
    i++;
  } while (i < separado.length);

  alert(`A soma dos algarismos é: ${soma}`);
}
 */

/* let entrada = prompt("Digite qualquer coisa ou 0 para encerrar!");
let maiorTamanho = entrada.length;
let maiorPalavra = entrada;

if (entrada != 0) {
  do {
    entrada = prompt("Digite qualquer coisa ou 0 para encerrar!");
    if (maiorTamanho < entrada.length) {
      maiorTamanho = entrada.length;
      maiorPalavra = entrada;
    }
  } while (entrada != 0);

  alert(`A maior palavra digitada foi: ${maiorPalavra}`);
} else {
  alert("Nenhuma palavra digitada!");
}
 */
/* 
let entrada = prompt("Digite uma frase: ");
let separado = entrada.split(" ");
let maiorTamanho = separado[0].length;
let maiorPalavra = separado[0];
let i = 0;

do {
  if (maiorTamanho < separado[i].length) {
    maiorTamanho = separado[i].length;
    maiorPalavra = separado[i];
  }
  i++;
} while (i < separado.length);

alert(`A maior palavra digitada foi: ${maiorPalavra}`);
 */
/* let entrada = prompt("Digite uma frase: ");
let separado = entrada.split(" ");
let menorTamanho = separado[0].length;
let menorPalavra = separado[0];
let i = 0;

do {
  if (menorTamanho > separado[i].length) {
    menorTamanho = separado[i].length;
    menorPalavra = separado[i];
  }
  i++;
} while (i < separado.length);

alert(`A menor palavra digitada foi: ${menorPalavra}`);
 */

let entrada = prompt("Digite uma frase: ");
let separado = entrada.split(" ");
let i = 0;
let j = separado.length - 1;
let invertido = [];

do {
  invertido[i] = separado[j];
  i++;
  j--;
} while (i < separado.length);
