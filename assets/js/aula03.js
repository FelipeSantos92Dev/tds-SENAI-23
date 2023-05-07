//function numeros(x) {
// console.log(0);
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);
// console.log(10);

// let valor = Number(document.getElementById("valor").value);

/* if (x % 2 == 0) {
    console.log("Par");
  } else {
    console.log("Ímpar");
  } */
/* console.log("Teste"); */

/* for (let i = 0; i <= 10; i++) {
    console.log(i);
  } */
// document.getElementById("resultado").innerHTML += i + "<br>";
//}

/* function diaSemana() {
  let dataTotal = new Date();
  let dia = dataTotal.getDay();
  let mensagem;

  switch (dia) {
    case 0:
      mensagem = "Domingo";
      break;
    case 1:
      mensagem = "Segunda-feira";
      break;
    case 2:
      mensagem = "Terça-feira";
      break;
    case 3:
      mensagem = "Quarta-feira";
      break;
    case 4:
      mensagem = "Quinta-feira";
      break;
    case 5:
      mensagem = "Sexta-feira";
      break;
    case 6:
  }
} */

function lista() {
  let numeros = [22, 26, 34, 78, 2, 10, 23, 13, 1, 9, 27, 107];
  let pares = [];
  let impares = [];

  for (let i = 0; i < numeros.length; i++) {
    // console.log(numeros[i]);
    // let resto = numeros[i] % 2;

    if (numeros[i] % 2 == 0) {
      pares.push(numeros[i]);
    } else {
      impares.push(numeros[i]);
    }
  }

  console.log("Pares", pares);
  console.log("Ímpares", impares);
}

/* function maior() {
  let numeros = [22, 26, 34, 78, 2, 10, 23, 13, 1, 9, 27, 107];
  let maior = 0;
  let menor = 0;
  let soma = 0;
  let media = 0;

  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > maior) {
      maior = numeros[i];
    }

    if (numeros[i] < menor) {
      menor = numeros[i];
    }

    soma += numeros[i];

    media = soma / numeros.length;
  }

  console.log("Maior", maior);
  console.log("Menor", menor);
  console.log("Soma", soma);
  console.log("Média", media);
} */

/* function tabuada() {
  let valor = Number(document.getElementById("valor").value);

  for (let i = 0; i <= 10; i++) {
    let resultado = valor * i;
    console.log(valor + " x " + i + " = " + resultado);
  }
} */
