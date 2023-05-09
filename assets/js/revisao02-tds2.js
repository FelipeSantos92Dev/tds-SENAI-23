// console.log("Hello, Crianças aleatórias!");

// Um programa que alimente um array

let entrada = prompt("Digite qualquer coisa!");
let lista = [];

// Alimentando o array
while (entrada != "n") {
  lista.push(entrada);
  entrada = prompt("Digite mais alguma coisa ou 'n' para parar!");
}

// Exibir cada dado do array em linhas
for (let i = 0; i < lista.length; i++) {
  if (Number(lista[i]) % 2 == 0) {
    console.log(`${lista[i]} é par`);
  } else {
    console.log(`${lista[i]} é ímpar`);
  }
  //console.log(lista[i]);
}
//console.log(lista);
