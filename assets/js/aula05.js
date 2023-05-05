let entrada, nome, i, soma, questao, alunoMaior, alunoMenor;
let maior = 0;
let menor = 10;
let media = 0;
let somaTotal = 0;
let msg1 = "";
let msg2 = "";
let alunos = [];
let notas = [];
let gabarito = ["B", "D", "A", "A", "E", "C", "E", "A", "B", "B"];

while (entrada != "N") {
  // Entrada de dados e armazenamento em array
  nome = prompt("Digite o nome do aluno: ");
  alunos.push(nome);

  // Resetar variáveis
  i = 0;
  soma = 0;
  questao = 1;

  // Loop para entrada de respostas
  while (i < 10) {
    entrada = prompt(`Resposta questão ${questao}:`).toUpperCase();

    if (entrada == gabarito[i]) {
      soma += 1;
      somaTotal += 1;
    }
    i++;
    questao++;
  }
  notas.push(soma);
  entrada = prompt(
    "Incluir novo aluno? S para Sim ou N para Não:"
  ).toUpperCase();
}

i = 0;

while (i < alunos.length) {
  if (notas[i] > maior) {
    maior = notas[i];
    alunoMaior = alunos[i];
  }
  if (notas[i] < menor) {
    menor = notas[i];
    alunoMenor = alunos[i];
  }
  msg1 += `Aluno ${alunos[i]} - Nota: ${notas[i]}` + "\n";
  i++;
}

media = somaTotal / alunos.length;

msg2 =
  "Maior nota: " +
  maior +
  " do aluno: " +
  alunoMaior +
  "\n" +
  "Menor nota: " +
  menor +
  " do aluno: " +
  alunoMenor +
  "\n";

alert(msg1 + "\n" + msg2 + "\n" + "Média da turma: " + media);
